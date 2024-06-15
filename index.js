const btn = document.querySelector('button');

btn.onclick = () => {
    alert('This Button Works!')
}


window.addEventListener("load", (event) => {
    console.log("page is fully loaded")
    fetch("http://api.weatherapi.com/v1/current.json?key=fa18f4945881479d824160246241406&q=37.91822293084342, 21.745074031336777&aqi=no").then(resp=>resp.json()).then(data=>{
        console.log(data)
        const current = data.current.temp_c
        console.log(current)
        document.getElementById("weatherloc").textContent=current+" C!";
    })


  });

