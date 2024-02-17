const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.setAttribute("class", "highlight");
link.href = "https://developer.mozilla.org"

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    "--- the premiere source for web dev knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//sect.appendChild(linkPara);

const deleteButton = document.querySelector(".remove");
deleteButton.addEventListener("click", () => {
    linkPara.remove();
});

const defaultStyle = document.querySelector(".default-style");
defaultStyle.addEventListener("click", () => {
    para.style.color = "black";
    para.style.backgroundColor = "white";
    para.style.padding = "10px";
    para.style.width = "250px";
    para.style.textAlign = "center";
});

const darkStyle = document.querySelector(".dark-style");
darkStyle.addEventListener("click", () => {
    para.style.color = "white";
    para.style.backgroundColor = "black";
    para.style.padding = "10px";
    para.style.width = "250px";
    para.style.textAlign = "center";
});


