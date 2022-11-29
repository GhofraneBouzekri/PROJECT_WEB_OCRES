const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
  headers: {
    'X-RapidAPI-Key': '428e9956abmshd1ba0370876e6a6p12c166jsnf285a5eb8532',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});