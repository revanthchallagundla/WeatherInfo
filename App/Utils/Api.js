var React = require("react");
var ReactDom = require("react-dom");
var axios = require("axios");

module.exports ={
    fetchweather:function(city){
        var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+ '&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5');
        return axios.get(encodedURI)
                .then(function(resp){
                return resp.data;                      
                })
                .catch(function (error) {
                    console.log(error);
                    return null;
                  });
    }
}

