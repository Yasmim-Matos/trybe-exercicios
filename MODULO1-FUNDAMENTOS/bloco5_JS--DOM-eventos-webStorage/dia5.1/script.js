document.querySelector("header").style.background = "grey";

document.querySelector("section").style.background = "red";
document.getElementsByClassName("no-emergency-tasks")[0].style.background = "blue";

let corTituloh3 = document.getElementsByTagName("h3");

for (let i = 0; i < corTituloh3.length; i += 1){
    corTituloh3[i].style.color = "black";
}

document.querySelector("footer").style.background = "green";

document.getElementsByTagName("h3")[0].style.background = "grey";
document.getElementsByTagName("h3")[1].style.background = "pink";
document.getElementsByTagName("h3")[2].style.background = "yellow";
document.getElementsByTagName("h3")[3].style.background = "green";