//nextDate
var nextYear =  new Date().getFullYear() + 1;
var newYear = new Date(nextYear,0,1,0,0,0,0);

//element
var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

var current_date, end_year, new_year;
var one_day_ms = 1000 * 60 * 60 * 24;
current_date = new Date();
end_year = new Date(current_date.getFullYear(), 11, 31);
new_year = new Date(current_date.getFullYear(), 00, 01);
var pass = (Math.round(current_date.getTime() - new_year.getTime()) / (one_day_ms));
console.log(pass);
var res = (Math.round(end_year.getTime() - current_date.getTime()) / (one_day_ms) + 1);  
console.log(res);
var PassResult = pass.toFixed (2);
var FinalResult = res.toFixed (2);
var passPercentage = ((pass/(pass + res)) * 100).toFixed(2);

var tanggal = newYear.getDate();
var _hari = newYear.getDay();
var _bulan = newYear.getMonth();
var hari2 = hari[_hari];
var bulan2 = bulan[_bulan];
var tanggal2 = current_date.getDate();
var _hari2 = current_date.getDay();
var _bulan2 = current_date.getMonth();
var hari2 = hari[_hari2];
var bulan2 = bulan[_bulan2];

//display
document.getElementById("tahunbesok").innerHTML = "Menuju Tahun Baru " + nextYear;
document.getElementById("newYears").innerHTML = "yang akan terjadi pada " + hari2 + ", " + tanggal +" " + bulan2 + " " + nextYear;
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = newYear - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / (1000));
    document.getElementById("demo").innerHTML = days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik";
    document.getElementById("curr_date").innerHTML = "Tanggal Sekarang : " + hari2 + ", " + tanggal2 + " " + bulan2 + " " + end_year.getFullYear();
    document.getElementById("yearProgress").innerHTML = "<div class='progress' role='progressbar' aria-label='Progress'><div class='progress-bar bg-success' style='width:" + passPercentage + "%'></div></div>";
    document.getElementById("persen").innerHTML = "Persentase : " + passPercentage + "%";
    document.getElementById("curr_num").innerHTML = "Tahun " + current_date.getFullYear() + " telah berjalan selama " + PassResult + " hari";
    document.getElementById("end_num").innerHTML = "Tahun " + current_date.getFullYear() + " berakhir dalam " + FinalResult + " hari";
}, 1000);