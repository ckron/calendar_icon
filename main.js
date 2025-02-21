const FONT_MONTH_SIZE = 60;
const FONT_DAY_SIZE = 150;

const DARK_GRAY = "rgb(50, 50, 50)"
const TRANSPARENT = "rgba(0, 0, 0, 0)"

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

function createIcon(ctx)
{
  ctx.fillStyle = TRANSPARENT;
  ctx.fillRect(0, 0, width, height);

  // background outer
  ctx.fillStyle = DARK_GRAY;
  createFillRoundRect(ctx, 10, 10, width-20, height-20, 30);

  // background inner
  ctx.fillStyle = "white";
  createFillRoundRect(ctx, 30, 30, width-60, height-60, 30);

  // text month
  ctx.fillStyle = DARK_GRAY;
  ctx.font = "bold " + FONT_MONTH_SIZE + "px tahoma";
  ctx.textAlign = "center";
  ctx.fillText(("00" + month).slice(-2) + "/", 100, 80, width);

  // text day
  ctx.textAlign = "center";
  ctx.font = "bold " + FONT_DAY_SIZE + "px tahoma";
  ctx.fillText(("00" + day).slice(-2), width/2.0, height-height/5.0, width);
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
createIcon(ctx);

let link = document.createElement("link");
link.type = "image/icon";
link.rel = "custom icon";
link.href = canvas.toDataURL("image/icon");

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