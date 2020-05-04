let url = 'https://api.covid19api.com/summary';
let conurl="https://api.covid19api.com/countries";
let a=0;
let lengthCount;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(typeof data);
    //intial global data set
    document.getElementById("location").innerHTML = 'Global';
    document.getElementById("confirmedValue").innerHTML =data.Global.TotalConfirmed;//data.Countries[0].Country;
    document.getElementById("deathsValue").innerHTML =data.Global.TotalDeaths;
    document.getElementById("recoveredValue").innerHTML =data.Global.TotalRecovered;
    //console.log(data.Countries.length);
    //table fill
    lengthCount==data.Countries.length;
    buildTable(data);
    jsonData(data);
    //loop locations oon top
    
    
    // while(true){
    //     console.log(data);

    // // document.getElementById("location").innerHTML = data.Countries[a].Country;
    // // document.getElementById("confirmedValue").innerHTML =data.Countries[a].TotalConfirmed;//data.Countries[0].Country;
    // // document.getElementById("deathsValue").innerHTML =data.Countries[a].TotalDeaths;
    // // document.getElementById("recoveredValue").innerHTML =data.Countries[a].TotalRecovered;
    // //     a+=1;
    // //     a=a%(lengthCount);
    // //     console.log(a);
    // //     sleep(3000);

    //  }

});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


async function jsonData(data){
    await sleep(10000);

while(a<=248){
    document.getElementById("location").innerHTML = data.Countries[a].Country;
document.getElementById("confirmedValue").innerHTML =data.Countries[a].TotalConfirmed;//data.Countries[0].Country;
document.getElementById("deathsValue").innerHTML =data.Countries[a].TotalDeaths;
document.getElementById("recoveredValue").innerHTML =data.Countries[a].TotalRecovered;
a+=1;
if(a==248){
    a=0;
    }
    await sleep(10000);
    //console.log(a);

}

}


function buildTable(data){
    var table = document.getElementById('CountryTable')

    for (var i = 0; i < data.Countries.length; i++){
        var row = `<tr>
                        <td>${data.Countries[i].Country}</td>
                        <td>${data.Countries[i].TotalConfirmed}</td>
                        <td>${data.Countries[i].TotalDeaths}</td>
                        <td>${data.Countries[i].TotalRecovered}</<td>
                  </tr>`
                  
        table.innerHTML += row


    }
}