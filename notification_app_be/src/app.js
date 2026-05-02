require("dotenv").config();

const express = require("express");
const fetchNotifications = require("./fetchNotifications");
const sortNotifications = require("./priorityService");

const app = express();

app.get("/api/notifications", async (req, res) => {
    try {
        const token = process.env.ACCESS_TOKEN;

        if (!token) {
            return res.status(500).json({
                error: "ACCESS_TOKEN missing"
            });
        }

        const notifications =
            await fetchNotifications(token);

        const sortedNotifications =
            sortNotifications(notifications);

        res.status(200).json({
            success: true,
            total: sortedNotifications.length,
            notifications: sortedNotifications
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log(
        "Notification API running on port 3000"
    );
});