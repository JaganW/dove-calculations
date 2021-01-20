window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/app/scripts/service-worker.js", { scope: '/app/'});
  }
});



// Pipe circumference Calculations

var pipeSize = 300;
var circumference;
var ibs;
var unicollar;

circumference = circumference * Math.PI

