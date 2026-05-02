const express = require("express");

const schedulerRoutes =
    require("./routes/schedulerRoutes");

const app = express();

app.use(
    "/api",
    schedulerRoutes
);

app.listen(3000, () => {
    console.log(
        "Server running on port 3000"
    );
});