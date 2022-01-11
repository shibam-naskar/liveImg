<h1 align="center">LIVEIMG</h1>
<h2>example</h2>

```javascript
const uploadImg = require("liveimg");

var data = await uploadImg({
  username: YOUT_GITHUB_USERNAME,
  repo: YOUR_REPO_NAME,
  token: GITHUB_ACCESS_TOKEN,
  content: IMAGE_DATA_BASE64,
});
console.log(data);
```

<p>You have to create a public repo in your github acount to store all images</p>


<h2>How To Generette Github Access Token</h2>
<img src="https://user-images.githubusercontent.com/39475600/148953390-7d07cc59-ee32-479b-93d0-b9d2a8e38115.gif"/>
