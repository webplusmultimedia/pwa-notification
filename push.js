var push = require('web-push');

let vapiKeys = {
    publicKey: 'BEf1IWsWxpYHwvd9uKZPjCSKUtja__vryjavo1j8wqZopNhm70kWhzb6olPzKt6X196gQCsDeYMgVDXq-HY2-A4',
    privateKey: 'AVIPfXIk5YyCXoCi9hDdEOcggQFUStFpN3u3oeXV0zw'
};

push.setVapidDetails('mailto:test@webplusm.net', vapiKeys.publicKey, vapiKeys.privateKey);
let sub1 = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fviJFmXwWjU:APA91bFgfiTQ9OFhBCfAK3I2Pl1o_HOYha6kPoCVdqeGdy5GtYi7h6_Cf_IxvDZSPlYMKK4YkMq0GB3lmrtdvzRfrnLqeQ6Fi2Z1FhH5rXqxES0-cwnsbR5jzDGN2NhMz1oPEj2RSgUL",
    expirationTime: null,
    keys: {
        p256dh: "BEseANoll16FPfVdDsW4vZ1xwDpSWJdOhclCHvNv6mnGIDl1tEnKZ5piUC1WfUaIG9c5m1TmyE6zjgg8ZEdoJ2U", auth: "OrEv4_PNqQRXol-NgiuoZA"
    }
};

let sub2 = {
    "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABd0Yfi8aTmOUWXspv0bA6W9TbCEPtxp7TpVkkXHiXnba08eLNHcBx97aM8yK6gWchTTA9mq0VXZiYnjpxC7PbBrQfb7E_-mHfsfkdix1xwS7VR4p5Nu_cmfpJoyEiLTsi-ly0VeCDX72J2KurF4Ykjh5yZhdi9iszRAqlakcfaZu0Fs2o",
    "keys":{
        "auth":"zdYM4S277k_TKARRD0tPbg",
        "p256dh":"BDQp64C9uVj4ncfQyJrM4XL_hBWSsGx1paKaNeWRNAt_MB1oS9W_nJpEXVbT6t3raX5vYv6xMxb58l39X3Nuf8k"
    }
};

push.sendNotification(sub1, 'test message');
push.sendNotification(sub2, 'test message');
