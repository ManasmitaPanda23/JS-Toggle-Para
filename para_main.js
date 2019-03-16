paraFlag = true;

function toggle() {
    paraFlag = !paraFlag;

    if (!paraFlag) {
        document.getElementById("paraID").style.display = "none";
        document.getElementById("caption").innerText = "show";
    }
    else {
        document.getElementById("paraID").style.display = "block";
        document.getElementById("caption").innerText = "hide";
    }
}