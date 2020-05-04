let url = 'https://api.covid19api.com/summary';
let conurl="https://api.covid19api.com/countries";


fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //intial global data set
    document.getElementById("location").innerHTML = 'Global';
    document.getElementById("confirmedValue").innerHTML =data.Global.TotalConfirmed;//data.Countries[0].Country;
    document.getElementById("deathsValue").innerHTML =data.Global.TotalDeaths;
    document.getElementById("recoveredValue").innerHTML =data.Global.TotalRecovered;
    //console.log(data.Countries.length);
    //table fill


    //loop locations oon top
    sleep(3000);
    let lengthCount=data.Countries.length;
    let a=0;
    while(true){
    document.getElementById("location").innerHTML = data.Countries[a].Country;
    document.getElementById("confirmedValue").innerHTML =data.Countries[a].TotalConfirmed;//data.Countries[0].Country;
    document.getElementById("deathsValue").innerHTML =data.Countries[a].TotalDeaths;
    document.getElementById("recoveredValue").innerHTML =data.Countries[a].TotalRecovered;
        a+=1;
        a=a%(lengthCount+1);
    }

});


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}