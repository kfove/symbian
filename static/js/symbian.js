function n() {
    alert("啥都没有")
}
window.addEventListener("click", (e) => {
    let overlib = document.querySelector(".overlib");
    overlib.setAttribute("style", `height: 50px; width:50px; display: block; position: absolute; top: ${e.pageY - 50}px; left: ${e.pageX - 25}px;z-index:100; transition: all 0.3s;`);
    setTimeout(() => { overlib.setAttribute("style", "display: none;transition: all 0.3s;"); }, 2000);


})
document.getElementById("devices_list").onmouseover = function (e) {
    console.log(e);
}