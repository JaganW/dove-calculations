window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/app/scripts/service-worker.js", { scope: '/app/'});
  }
});



// Pipe circumference Calculations
//WRAP THIS INTO AN ONLOAD FOR THE PIPE FILE AS TO NOT GENERATE ERRORS

function pipeChart() {
  
}

var pipe = document.getElementById("pipeSize");
var circumference = document.getElementById("circumference");
var ibs = document.getElementById("ibs")
var unicollar = document.getElementById("unicollar");

pipe.addEventListener('input', function() {
  if(isNaN(pipe.innerHTML)) {
    showAlert();
  } else {
    circumference.innerHTML = parseFloat(pipe.innerHTML * Math.PI).toFixed(2);
    ibs.innerHTML = parseFloat(Math.ceil((circumference.innerHTML / 1000) * 100) / 100).toFixed(2);
    unicollar.innerHTML = parseFloat(Math.ceil((circumference.innerHTML / 2250) * 100) / 100).toFixed(2);  
  }
});


function showAlert() {
  if(!document.getElementById('pipeAlert')) {
    document.getElementById('pipeAlertPlace').innerHTML += '<div class="alert alert-warning alert-dismissible p-2 fade show" role="alert" id="pipeAlert"><strong>Note:</strong> Please use only numbers in the cell above.<button type="btn" class="btn-close pb-1" data-bs-dismiss="alert" aria-label="close"></button></div>';
  }
}