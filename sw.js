self.addEventListener('push', evt => {
    var options = {
        body: 'Here is a notification body!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    evt.waitUntil(
        self.registration.showNotification('test message', options)
    )
});
