const notifications = {
    messages: ['Повідомлення 1', 'Повідомлення 2'],
    alerts: ['Сповіщення 1', 'Сповіщення 2'],
    updates: ['Оновлення 1', 'Оновлення 2'],
};
function* flattenNotifications(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const nestedList = obj[key];
            for (const item of nestedList) {
                yield item;
            }
        }
    }
}
for (const notification of flattenNotifications(notifications)) {
    console.log(notification);
}