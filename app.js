const spaceContainer = document.getElementById("space-container");
const title = document.createElement("h2");
const planetsContainer = document.createElement("div");
const planetsListTitle = document.createElement("h3");
const planetsList = document.createElement("ul");
const planetsItem = document.createElement("li");

planetsList.innerHTML = `
<li>jupter </li>
<li>Mars </li>
<li>Venus </li>
`;
title.textContent = "The Universe";
title.style.color = "blue";
planetsListTitle.textContent = "Our Planets.";
planetsContainer.setAttribute(
  "style",
  "border:1px solid black; width:355px;background-color:lightgrey;  padding:20px; "
);

const universeImg = document.createElement("img");
universeImg.src =
  "https://www.ejiltalk.org/wp-content/uploads/2021/03/pexels-photo-110854.jpeg";
universeImg.setAttribute("style", "width:400px; height:400px");

spaceContainer.appendChild(title);
spaceContainer.appendChild(universeImg);
spaceContainer.appendChild(planetsContainer);
planetsContainer.appendChild(planetsListTitle);
planetsContainer.appendChild(planetsList);
