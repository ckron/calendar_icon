
let url = new URL(window.location.href);

let params = url.searchParams;

let yotei = params.get("yotei");
let month = params.get("month");
let day = params.get("day");
let note = params.get("note");

if(yotei !== null) {
  document.title = yotei;
}
document.getElementById("icon-link").href = "icon/icon_" + month + "_" + day + ".jpg";
document.getElementById("memo-area").value = note;