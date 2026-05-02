const axios = require("axios");
const { getAuthHeaders } = require("./auth");

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://20.207.122.201/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: getAuthHeaders()
            }
        );

        console.log("Log sent successfully:");
        console.log(response.data);
    } catch (error) {
        console.log("Error sending log:");

        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = Log;