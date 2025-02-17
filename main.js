const FONT_SIZE = 60;

let url = new URL(window.location.href);

let params = url.searchParams;

let yotei = params.get("yotei");
let month = params.get("month");
let day = params.get("day");
let note = params.get("note");

const canvas = document.querySelector("canvas");
let width = canvas.width;
let height = canvas.height;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.font = "bold " + FONT_SIZE + "px tahoma";
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "white";
ctx.fillRect(20, 20, width-40, height-40);

ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText(("00" + month).slice(-2) + "/" + ("00" + day).slice(-2),
            width/2.0,
            height/2.0,
            width);

let link = document.createElement("link");
link.type = "image/icon";
link.rel = "custom icon";
link.href = canvas.toDataURL("image/icon");

console.log(link.href);

if(yotei !== null) {
  document.title = yotei;
}
if(month !== null && day !== null) {
  document.getElementById("icon-link").href = link.href;
}
document.getElementById("yotei-area").value = yotei;
document.getElementById("month-area").value = month;
document.getElementById("day-area").value = day;
document.getElementById("memo-area").value = note;