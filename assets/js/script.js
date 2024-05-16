//nextDate
var nextYear = new Date().getFullYear() + 1;
var currentYear = new Date().getFullYear();
var newYear = new Date(nextYear,0,1,0,0,0,0);
var currNewYear = new Date(currentYear,0,1,0,0,0,0);
var current_date = new Date();

//element
var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

//date
var hariDepan = hari[newYear.getDay()];
var tanggalDepan = newYear.getDate();
var bulanDepan = bulan[newYear.getMonth()];
var tahunDepan = newYear.getFullYear();
var tahunBaru = hariDepan + ", " + tanggalDepan + " " + bulanDepan + " " + tahunDepan;

//new year response
document.getElementById("next-year").innerText = nextYear;
document.getElementById("next-newyear").innerText = tahunBaru;

//countdown
var one_day_ms = 1000 * 60 * 60 * 24;

var pass = (Math.round(current_date.getTime() - currNewYear.getTime()) / (one_day_ms));
var rest = (Math.round(newYear.getTime() - current_date.getTime()) / (one_day_ms));
var PassResult = pass.toFixed (0);
var RestResult = rest.toFixed (0);

document.getElementById("passed").innerText = PassResult;
document.getElementById("remaining").innerText = RestResult;

var passPercentage = ((pass/(pass + rest)) * 100).toFixed(2);
document.getElementById("progress-1").innerText = passPercentage;
document.getElementById("progress-2").innerText = passPercentage;
document.getElementById("p-bar").classList.add("w-["+passPercentage+"%]");