var push = require("web-push");

let vapiKeys = {
    publicKey: "BEf1IWsWxpYHwvd9uKZPjCSKUtja__vryjavo1j8wqZopNhm70kWhzb6olPzKt6X196gQCsDeYMgVDXq-HY2-A4",
    privateKey: "AVIPfXIk5YyCXoCi9hDdEOcggQFUStFpN3u3oeXV0zw"
};

push.setVapidDetails("mailto:test@test.com", vapiKeys.publicKey, vapiKeys.privateKey);
let sub1 = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fIGoxnj2tZo:APA91bEUkbvb2zaZwwoAUSUApWk8dERz9U-n2dgtNgnZQ-7IZB1KuNXE-U180BhCP6Xlf4Hpob0_K7K7JKLlaB0Ic1qbDmP0UDpEzSQXhNXkS46Ez6ZIPpDk5fOAxu2HOeRDAfEVUlls",
    "expirationTime": null,
    "keys": {
        "p256dh": "BGcrN__nieY9qSn7muHcR-S6yXS9LAcBgttyhr5xrNee4x0UCE6NaOPDvWQPslqkwAxTVv-kFxa35VjYPB4_X0s",
        "auth": "Zk4JZ2ud_IQnlrpb8WYMhw"
    }
};

let sub2 = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dBrSx2uSnhE:APA91bHwN_jQ4HG-FxR_jUeEG8d_21X3cGuv8mSfAVJMk-k4M5hKTWtbhfmkytsWQbeu-ISlYwGD8n0U8NdN5Oe482OjuV_6w6e3Avu-ZG1F1ijXCyDqdt1l9-FsuGYqJobgXKQoDqQD",
    "expirationTime": null,
    "keys": {
        "p256dh": "BMDXV1_0k9cI96AdJaJxh-QDJx70WBDPV7D4CxFOSuqXDzcjJgZbNczIqrz0EKraILhOA-LftE-AtVmjKietvT0",
        "auth": "n7LLx-ZLxRNCPp4TTn3L8w"
    }
};

push.sendNotification(sub1, "test message").catch((err) => console.log(err));
push.sendNotification(sub2, "test message").catch((err) => console.log(err));
