var push = require('web-push');

let vapiKeys = {
    publicKey: 'BEf1IWsWxpYHwvd9uKZPjCSKUtja__vryjavo1j8wqZopNhm70kWhzb6olPzKt6X196gQCsDeYMgVDXq-HY2-A4',
    privateKey: 'AVIPfXIk5YyCXoCi9hDdEOcggQFUStFpN3u3oeXV0zw'
};

push.setVapidDetails('mailto:test@webplusm.net', vapiKeys.publicKey, vapiKeys.privateKey);
let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fviJFmXwWjU:APA91bFgfiTQ9OFhBCfAK3I2Pl1o_HOYha6kPoCVdqeGdy5GtYi7h6_Cf_IxvDZSPlYMKK4YkMq0GB3lmrtdvzRfrnLqeQ6Fi2Z1FhH5rXqxES0-cwnsbR5jzDGN2NhMz1oPEj2RSgUL",
    expirationTime: null,
    keys: {
        p256dh: "BEseANoll16FPfVdDsW4vZ1xwDpSWJdOhclCHvNv6mnGIDl1tEnKZ5piUC1WfUaIG9c5m1TmyE6zjgg8ZEdoJ2U", auth: "OrEv4_PNqQRXol-NgiuoZA"
    }
};

push.sendNotification(sub, 'test message');
