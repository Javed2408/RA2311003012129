const axios = require("axios");
async function fetchNotifications(token) {
    const response = await axios.get(
        "http://20.207.122.201/evaluation-service/notifications",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data.notifications;
}
module.exports = fetchNotifications;