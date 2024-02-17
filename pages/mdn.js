const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
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

sect.appendChild(linkPara);

const deleteButton = document.querySelector(".remove");
deleteButton.addEventListener("click", () => {
    linkPara.remove();
});

