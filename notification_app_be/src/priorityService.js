function getPriority(type) {
    if (type === "Placement") {
        return 3;
    }
    if (type === "Result") {
        return 2;
    }
    if (type === "Event") {
        return 1;
    }
    return 0;
}
function sortNotifications(notifications) {
    return notifications.sort((a, b) => {
        const priorityDifference =
            getPriority(b.Type) -
            getPriority(a.Type);
        if (priorityDifference !== 0) {
            return priorityDifference;
        }
        return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
        );
    });
}
module.exports = sortNotifications;