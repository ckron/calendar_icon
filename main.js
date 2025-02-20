const FONT_MONTH_SIZE = 60;
const FONT_DAY_SIZE = 150;

const dark_gray = "rgb(50, 50, 50)"

function createFillRoundRect(ctx, x, y, width, height, radius)
{
  const w = width;
  const h = height;
  const r = radius;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arc(x + w - r, y + r, r, Math.PI * (3.0/2.0), 0, false);
  ctx.lineTo(x + w, y + h - r);
  ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * (1.0/2.0), false);
  ctx.lineTo(x + r, y + h);
  ctx.arc(x + r, y + h - r, r, Math.PI * (1.0/2.0), Math.PI, false);
  ctx.lineTo(x, y + r);
  ctx.arc(x + r, y + r, r, Math.PI, Math.PI * (3.0/2.0), false);
  ctx.closePath();
  ctx.fill();
}

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
ctx.fillStyle = dark_gray;
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = "white";
createFillRoundRect(ctx, 30, 30, width-60, height-60, 30);

ctx.fillStyle = dark_gray;
ctx.font = "bold " + FONT_MONTH_SIZE + "px tahoma";
ctx.textAlign = "center";
ctx.fillText(("00" + month).slice(-2) + "/", 100, 80, width);

ctx.textAlign = "center";
ctx.font = "bold " + FONT_DAY_SIZE + "px tahoma";
ctx.fillText(("00" + day).slice(-2), width/2.0, height-height/5.0, width);

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