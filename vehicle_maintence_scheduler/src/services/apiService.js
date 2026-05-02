const axios = require("axios");
async function getDepots(token) {
    const response = await axios.get(
        "http://20.207.122.201/evaluation-service/depots",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
}
async function getVehicles(token) {
    const response = await axios.get(
        "http://20.207.122.201/evaluation-service/vehicles",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return response.data;
}
module.exports = {
    getDepots,
    getVehicles
};