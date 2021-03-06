var display = document.getElementById("display_container");
display.innerHTML = "Test_Container";

getData();

//Besorgen von API-Daten
function getData(){
  var key = "fe58beaf1d2866c93f5b52ffe66777bb";
  var url = "https://api.themoviedb.org/3/movie/550?api_key="+key;

  var iniRequest = new XMLHttpRequest();
  iniRequest.open('GET', url);
  iniRequest.onload=function(){
      var score = JSON.parse(iniRequest.responseText);
        display.innerHTML = "ERFOLGREICH";
    console.log(score);
    buildApiData(score)
  }
  iniRequest.send();
}

  //Aufbauen der Liste mit API-Daten
  function buildApiData(data){
    var list = document.getElementById("apiList");
    
    //Name
    var newLi = document.createElement("li");
    var newLiText = document.createTextNode(data.original_title);
    newLi.appendChild(newLiText);
    list.appendChild(newLi);
    
    //Klasse
    newLi = document.createElement("li");
    newLiText = document.createTextNode(data.homepage);
    newLi.appendChild(newLiText);
    list.appendChild(newLi);
    
    //Class
    newLi = document.createElement("li");
    newLiText = document.createTextNode(data.serienalarm);
    newLi.appendChild(newLiText);
    list.appendChild(newLi);
  }