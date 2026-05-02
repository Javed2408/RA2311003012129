require("dotenv").config();

const {
    getDepots,
    getVehicles
} = require("../services/apiService");

const knapsack =
    require("../services/knapsackService");

async function scheduleTasks(req, res) {
    try {
        const token =
            process.env.ACCESS_TOKEN;

        const depots =
            await getDepots(token);

        const vehicles =
            await getVehicles(token);

        const mechanicHours =
            depots.depots[0].MechanicHours;

        const maxImpact =
            knapsack(
                vehicles.vehicles,
                mechanicHours
            );

        res.json({
            mechanicHours,
            maxImpact
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = {
    scheduleTasks
};