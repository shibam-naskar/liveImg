const axios = require('axios')
const shortid = require('shortid');

function uploadImg(username,repo,token, content) {
    var filetype = content.toString().split(',')[0].split(';')[0].split('/')[1];
    var filerealdata = content.toString().split(',')[1];
    var data = JSON.stringify({
      message: "Uploaded by liveImg by shibam",
      content: `${filerealdata}`,
    });
  
    var config = {
      method: "put",
      url: `https://api.github.com/repos/${username}/${repo}/contents/${shortid.generate()}.${filetype.toLocaleLowerCase()}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.content.download_url));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

module.exports = uploadImg;