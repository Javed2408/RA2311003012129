require("dotenv").config();
const fetchNotifications = require("./fetchNotifications");
const sortNotifications = require("./priorityService");
async function main() {
    try {
        const token = process.env.ACCESS_TOKEN;
        if (!token) {
            console.log("Error: ACCESS_TOKEN not found in .env");
            return;
        }
        const notifications = await fetchNotifications(token);
        const sortedNotifications =
            sortNotifications(notifications);
        console.log("Sorted Notifications:\n");
        sortedNotifications.forEach((notification, index) => {
            console.log(`Notification ${index + 1}`);
            console.log(`ID: ${notification.ID}`);
            console.log(`Type: ${notification.Type}`);
            console.log(`Message: ${notification.Message}`);
            console.log(`Timestamp: ${notification.Timestamp}`);
            console.log("-----------------------------");
        });
    } catch (error) {
        console.log("Error fetching notifications:");
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}
main();