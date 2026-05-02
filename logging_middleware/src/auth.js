require("dotenv").config();

function getAuthToken() {
    return process.env.ACCESS_TOKEN;
}

function getAuthHeaders() {
    return {
        Authorization: `Bearer ${getAuthToken()}`,
        "Content-Type": "application/json"
    };
}

module.exports = {
    getAuthToken,
    getAuthHeaders
};