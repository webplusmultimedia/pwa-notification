var push = require('web-push');

let vapiKeys = {
    publicKey: 'BEf1IWsWxpYHwvd9uKZPjCSKUtja__vryjavo1j8wqZopNhm70kWhzb6olPzKt6X196gQCsDeYMgVDXq-HY2-A4',
    privateKey: 'AVIPfXIk5YyCXoCi9hDdEOcggQFUStFpN3u3oeXV0zw'
};

push.setVapiDetails('mailto:test@webplusm.net',vapiKeys.publicKey,vapiKeys.privateKey);
let sub={

};

push.sendNotification(sub,'test message');
