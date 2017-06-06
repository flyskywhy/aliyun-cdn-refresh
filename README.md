# aliyun-cdn-refresh
Simplify Refresh and push interface for aliyun cdn api

```javascript
const cdn = require('aliyun-cdn-refresh')({
    "accessKeyId": "YOUR_ALIYUN_CDN_ACCESS_KEY",
    "secretAccessKey": "YOUR_ALIYUN_CDN_ACCESS_SECRET",
    "endpoint": "https://cdn.aliyuncs.com"
});
```


## To refresh CDN cache
```javascript
cdn.refreshDir(http://yourcdndomain/img/);
cdn.refreshFile(http://yourcdndomain/img/1.png);
cdn.refreshFiles([http://yourcdndomain/img/1.png, http://yourcdndomain/img/2.png, ...]);
```

## To push file into CDN cache
```javascript
cdn.pushFile(http://yourcdndomain/img/1.png);
cdn.pushFiles([http://yourcdndomain/img/1.png, http://yourcdndomain/img/2.png, ...]);
```
