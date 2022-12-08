function n() {
    alert("啥都没有")
}
window.addEventListener("click", (e) => {
    let overlib = document.querySelector(".overlib");
    overlib.setAttribute("style", `height: 50px; width:50px; display: block; position: absolute; top: ${e.pageY - 50}px; left: ${e.pageX - 25}px;z-index:100; transition: all 0.3s;`);
    setTimeout(() => { overlib.setAttribute("style", "display: none;transition: all 0.3s;"); }, 2000);



})
function show_devices() {
    let showd = document.getElementById("devices");
    showd.style.display = "block";
}
function ushow_devices() {
    let showd = document.getElementById("devices");
    showd.style.display = "none";
    

}
document.getElementById("devices_list").addEventListener("mouseover", (e) => {
    show_devices();
    let mout = document.getElementById("devices_list");
    let dlist = document.getElementById("dl");
    dlist.addEventListener("mouseleave", ()=>{
        setTimeout("document.getElementById(\"devices\").style.display = \"none\"")
    })

})