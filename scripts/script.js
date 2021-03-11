window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/app/scripts/service-worker.js", { scope: '/app/'});
  }
});

function pipeChart() {
  var pipe = document.getElementById("pipeSize");
  var circumference = document.getElementById("circumference");
  var ibs = document.getElementById("ibs")
  var unicollar = document.getElementById("unicollar");
  pipe.addEventListener('input', function() {
    if(isNaN(pipe.value || pipe.value !== "")) {
      showAlert('pipeAlert', 'Please use only numbers in the cell above.');
    } else {
      circumference.innerHTML = parseFloat(pipe.value* Math.PI).toFixed(2);
      ibs.innerHTML = parseFloat(Math.ceil((circumference.innerHTML / 1000) * 100) / 100).toFixed(2);
      unicollar.innerHTML = parseFloat(Math.ceil((circumference.innerHTML / 2250) * 100) / 100).toFixed(2);  
    }
  });  
}

function intubatt() {
  var penoSize = document.getElementsByClassName("intubattInput")
  var length = document.getElementById("length");
  var width = document.getElementById("width");
  var area = document.getElementById("area");
  var number = document.getElementById("number");
  var noPer = document.getElementById("noPer");
  var noTotal = document.getElementById("noTotal");
  var pricePer = document.getElementById("pricePer");
  var priceTotal = document.getElementById("priceTotal");

  for(var i = 0; i < penoSize.length; i++) {
    penoSize[i].addEventListener('input', function() {
      area.value = (length.value * width.value).toFixed(4);
      noPer.value = (area.value / 0.72).toFixed(4);
      noTotal.value = ((area.value / 0.72) * number.value).toFixed(4);
      pricePer.value = '$' + parseFloat(noPer.value * 68);
      priceTotal.value = '$' + parseFloat((noPer.value * 68) * number.value);
    })
  }
}

function mortar() {
  var mortarCalc = document.getElementsByClassName("mortarCalc");
  var penoLength = document.getElementById("penoLength");
  var penoWidth = document.getElementById("penoWidth");
  var penoDepth = document.getElementById("penoDepth");
  var penoVolume = document.getElementById("penoVolume");
  var serviceLength = document.getElementById("serviceLength");
  var serviceWidth = document.getElementById("serviceWidth");
  var serviceDepth = document.getElementById("serviceDepth");
  var serviceVolume = document.getElementById("serviceVolume");
  var zBrac = document.getElementById("zBrac");
  var zBracTotal = document.getElementById("zBracTotal");
  var number = document.getElementById("number");
  number.value = 1;
  var blackRod = document.getElementById("blackRod");
  var bagsPer = document.getElementById("bagsPer");
  var totalBags = document.getElementById("totalBags");
  var pricePer = document.getElementById("pricePer");
  var priceTotal = document.getElementById("priceTotal");
  for(var i = 0; i < mortarCalc.length; i++) {
    mortarCalc[i].addEventListener('input', function() {
      serviceVolume.value = (serviceLength.value * serviceDepth.value * serviceWidth.value).toFixed(4);
      penoVolume.value = ((penoLength.value * penoDepth.value * penoWidth.value) - serviceVolume.value).toFixed(4);
      zBrac.value = Math.ceil(((penoLength.value * 2) + (penoWidth.value * 2)) / 0.3)
      zBracTotal.value = number.value * Math.ceil(((penoLength.value * 2) + (penoWidth.value * 2)) / 0.3)
      bagsPer.value = ((penoVolume.value * 30) * 1.1).toFixed(4);
      totalBags.value = (bagsPer.value * number.value).toFixed(4);
      pricePer.value = '$' + parseFloat((bagsPer.value * 64.35).toFixed(4));
      priceTotal.value = '$' + parseFloat((totalBags.value * 64.35).toFixed(4));
    })
  }
}

function areaChart() {
  var pipeSize = document.getElementById("pipe-size");
  var pipeAreaMm2 = document.getElementById("pipe-area-mm2");
  var pipeVolumeMm3 = document.getElementById("pipe-volume-mm3");
  var pipeAreaM2 = document.getElementById("pipe-area-m2"); 
  var pipeVolumeM3 = document.getElementById("pipe-volume-m3");
  pipeSize.addEventListener('input', function() {
    if(isNaN(pipeSize.value || pipeSize.value !== "")) {
      showAlert('areaPipeAlert', 'Please use only numbers in the cell above.');
    } else {
      var holdingFloat = parseFloat(Math.PI * Math.pow((pipeSize.value / 2), 2));
      pipeAreaMm2.innerHTML = Math.round(holdingFloat);
      pipeAreaM2.innerHTML = pipeAreaMm2.innerHTML / 1000000;
      pipeVolumeMm3.innerHTML = Math.round(holdingFloat * 1.7);
      pipeVolumeM3.innerHTML = (((holdingFloat * 1.7)) / 1000000000).toFixed(10);
    }
  });

  var traySize = document.getElementsByClassName('tray-size')
  var trayLength = document.getElementById("tray-length");
  var trayWidth = document.getElementById("tray-width")
  var areaMm2 = document.getElementById("area-mm2");
  var VolumeMm3 = document.getElementById("volume-mm3");
  var AreaM2 = document.getElementById("area-m2"); 
  var VolumeM3 = document.getElementById("volume-m3");
  for(var i = 0; i < traySize.length; i++) {
    traySize[i].addEventListener('input', function() {
      if(isNaN(trayLength.value || trayWidth.value || trayLength.value !== "" || trayWidth.value !== "")) {
        //showAlert('areaPipeAlert', 'Please use only numbers in the cell above.');
      } else {
        areaMm2.innerHTML = trayLength.value * trayWidth.value;
        VolumeMm3.innerHTML = Math.round(areaMm2.innerHTML * 1.7);
        AreaM2.innerHTML = areaMm2.innerHTML / 1000000;
        VolumeM3.innerHTML = (VolumeMm3.innerHTML / 1000000000).toFixed(10);
      }
    }); 
  }
}


function showAlert(alert, message) {
  if(!document.getElementById(alert)) {
    document.getElementById(alert + 'Place').innerHTML += '<div class="alert alert-warning alert-dismissible p-2  pr-4 fade fade-in show" role="alert" id="'+ alert +'"><strong>Note: </strong>' + message + '<button type="btn" class="btn-close pb-1" data-bs-dismiss="alert" aria-label="close"></button></div>';
  }
}

function board() {
  var div = document.createElement('div');
  div.setAttribute("class", "accordion-item");

  var addSteel = document.getElementById("addSteel");
  var steelType = document.getElementById("steelType");
  var steelList = document.getElementById("steelList");
  addSteel.onclick = function () {
    for(i = 0; i < steelType.options.length; i++) {
      if(steelType.selectedIndex == i) {
        div.innerHTML = `<div class="accordion-item">
                           <h2 class="accordian-header" id="headingThree">
                           <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">${steelType[i].text}</button>
                           </h2>
                           <div id="collapseThree" class="accordion-collapse collapse hide" aria-labelledby="headingThree" data-bs-toggle="#steelList">
                             <div class="accordion-body">
                             </div>
                           </div>
                         </div>`
        steelList.append(div);
      }
  
    }
  }
}



/*
function createOption(text, value) {
  var option = document.createElement("option");
  option.appendChild(text);
  option.style.Id = value;
  return option;
}
*/