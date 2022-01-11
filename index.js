const axios = require('axios')

async function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}


async function uploadImg(dataall) {
    var datafinal;
    var filetype = await dataall.content.toString().split(',')[0].split(';')[0].split('/')[1];
    var filerealdata = await dataall.content.toString().split(',')[1];
    var _id = await getRandomString(40);
    var data = JSON.stringify({
      message: "Uploaded by liveImg by shibam",
      content: `${filerealdata}`,
    });
  
    var config = {
      method: "put",
      url: `https://api.github.com/repos/${dataall.username}/${dataall.repo}/contents/${_id}.${filetype.toLocaleLowerCase()}`,
      headers: {
        Authorization: `Bearer ${dataall.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    await axios(config)
      .then(function (response) {
        datafinal = response.data.content;
      })
      .catch(function (error) {
        return error;
      });
    
      return datafinal.download_url;
  }

module.exports = uploadImg;
