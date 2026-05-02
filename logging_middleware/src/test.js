const Log = require("./logger");

async function testLogger() {
    await Log(
        "backend",
        "info",
        "handler",
        "testing logging middleware"
    );
}

testLogger();