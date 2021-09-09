  var req= new XMLHttpRequest();
 req.open('GET','https://restcountries.eu/rest/v2/all',true);
  req.send();
  req.onload=function(){
      var data=JSON.parse(req.response);
      for(i=0;i<data.length;i++)
    {
     console.log(`Country Name:${data[i].name} Region:${data[i].region} Sub region: ${data[i].subregion} Population: ${data[i].population}`);
    }

  }
