# aliyun-cdn-refresh
Simplify Refresh and push interface for aliyun cdn api

```javascript
const cdn = require('aliyun-cdn-refresh')({
    "accessKeyId": "YOUR_ALIYUN_CDN_ACCESS_KEY",
    "secretAccessKey": "YOUR_ALIYUN_CDN_ACCESS_SECRET",
    "endpoint": "https://cdn.aliyuncs.com",
    "timeout": 5000 // Request timeout in milliseconds for connecting phase and response receiving phase. Defaults to 5000, both are 5s. You can use timeout: 5000 to tell urllib use same timeout on two phase or set them seperately such as timeout: [3000, 5000], which will set connecting timeout to 3s and response 5s
});
```


## To refresh CDN cache
```javascript
cdn.refreshDir('http://yourcdndomain/img/');
cdn.refreshFile('http://yourcdndomain/img/1.png');
cdn.refreshFiles(['http://yourcdndomain/img/1.png', 'http://yourcdndomain/img/2.png']);
```

## To push file into CDN cache
```javascript
cdn.pushFile('http://yourcdndomain/img/1.png');
cdn.pushFiles(['http://yourcdndomain/img/1.png', 'http://yourcdndomain/img/2.png']);
```
