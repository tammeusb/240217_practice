const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

const heading = document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!"

const newDiv = document.createElement("div");
newDiv.style = "border: 2px solid black; background-color: pink;";

const childHeading = document.createElement("h1");
childHeading.textContent = "I'm in a div!"
const childPara = document.createElement("p");
childPara.textContent = "ME TOO!"

newDiv.appendChild(childHeading);
newDiv.appendChild(childPara);

container.appendChild(para);
container.appendChild(heading);
container.appendChild(newDiv);

const clickMe = document.querySelector(".click-me");
clickMe.onclick = () => alert("Hello again.");

const eventButton = document.querySelector(".event");
eventButton.addEventListener('click', () => alert("goodbye."));
eventButton.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
