window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/app/scripts/service-worker.js", { scope: '/app/'});
  }
});



// Pipe circumference Calculations
function pipeChart() {
  var pipe = document.getElementById("pipeSize");
  var circumference = document.getElementById("circumference");
  var ibs = document.getElementById("ibs")
  var unicollar = document.getElementById("unicollar");
  pipe.addEventListener('input', function() {
    if(isNaN(pipe.innerHTML || pipe.innerHTML !== "")) {
      showAlert('pipeAlert', 'Please use only numbers in the cell above.');
    } else {
      circumference.innerHTML = parseFloat(pipe.innerHTML * Math.PI).toFixed(2);
      ibs.innerHTML = parseFloat(Math.ceil((circumference.innerHTML / 1000) * 100) / 100).toFixed(2);
      unicollar.innerHTML = parseFloat(Math.ceil((circumference.innerHTML / 2250) * 100) / 100).toFixed(2);  
    }
  });  
}

function areaChart() {
  var pipeSize = document.getElementById("pipe-size");
  var pipeAreaMm2 = document.getElementById("pipe-area-mm2");
  var pipeVolumeMm3 = document.getElementById("pipe-volume-mm3");
  var pipeAreaM2 = document.getElementById("pipe-area-m2");
  var pipeVolumeM3 = document.getElementById("pipe-volume-m3");
  pipeSize.addEventListener('input', function() {
    if(isNaN(pipeSize.innerHTML || pipeSize.innerHTML !== "")) {
      showAlert('areaPipeAlert', 'Please use only numbers in the cell above.');
    } else {
      var holdingFloat = parseFloat(Math.PI * Math.pow((pipeSize.innerHTML / 2), 2));
      pipeAreaMm2.innerHTML = Math.round(holdingFloat);
      pipeAreaM2.innerHTML = pipeAreaMm2.innerHTML / 1000000;
      pipeVolumeMm3.innerHTML = Math.round(holdingFloat * 1.7);
      pipeVolumeM3.innerHTML = (((holdingFloat * 1.7)) / 1000000000).toFixed(10);
    }
  });
}


function showAlert(alert, message) {
  if(!document.getElementById(alert)) {
    document.getElementById(alert + 'Place').innerHTML += '<div class="alert alert-warning alert-dismissible p-2 fade fade-in show" role="alert" id="'+ alert +'"><strong>Note: </strong>' + message + '<button type="btn" class="btn-close pb-1" data-bs-dismiss="alert" aria-label="close"></button></div>';
  }
}