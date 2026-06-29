var sidenavbar = document.querySelector(".sidenav-bar")
sidenavbar.style.display = "block"

function shownavbar(){
    sidenavbar.style.left="0%"
}

function closenavbar(){
    sidenavbar.style.left="-60%"
}

var resume = document.querySelector(".resume")

resume.addEventListener("click", () => {
    alert("Resume Downloaded Successfully")
});