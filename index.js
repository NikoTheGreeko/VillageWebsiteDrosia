const btn = document.querySelector('button');

btn.onclick = () => {
    alert('This Button Works!')
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded")
    fetch("http://api.weatherapi.com/v1/current.json?key=f21c22a7558242f0ac7151418240506&q=37.91822293084342, 21.745074031336777&aqi=no").then(resp=>resp.json()).then(data=>{
        console.log(data)
        const current = data.current.temp_c
        console.log(current)
        document.getElementById("weatherloc").textContent=current+" C!";
    })


  });

