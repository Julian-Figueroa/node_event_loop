const https = require('https');

const start = Date.now();
const url = 'https://www.google.com';

function doRequest() {
https
    .request(url, res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    })
    .end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();