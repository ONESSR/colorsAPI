// get the seed color from picker
// default applied for initial generation
let seedColor = document.getElementById("colorInput").value;
let seedColorClean = seedColor.slice(1, seedColor.length);

// get the scheme selection value
// default applied for initial generation
let select = document.getElementById("schemeSelect");
let selectValue = select.value.toLowerCase();

function getInitialData(seedColorClean, selectValue) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColorClean}&format=json&mode=${selectValue}&count=4`,
    {
      method: "GET"
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      displayInitalData(data);
      return data;
    });
}
getInitialData(seedColorClean, selectValue);

/*
DISPLAYING DATA
*/

function displayInitalData(data) {
  document.getElementById("seed").style.backgroundColor = seedColor;
  const seedText = (document.getElementById("seedText").textContent =
    seedColor);

  const hex1 = data.colors[0].hex.value;
  document.getElementById("hex1").style.backgroundColor = hex1;
  const hex1Text = (document.getElementById("hex1Text").textContent = hex1);

  const hex2 = data.colors[1].hex.value;
  document.getElementById("hex2").style.backgroundColor = hex2;
  const hex2Text = (document.getElementById("hex2Text").textContent = hex2);

  const hex3 = data.colors[2].hex.value;
  document.getElementById("hex3").style.backgroundColor = hex3;
  const hex3Text = (document.getElementById("hex3Text").textContent = hex3);

  const hex4 = data.colors[3].hex.value;
  document.getElementById("hex4").style.backgroundColor = hex4;
  const hex4Text = (document.getElementById("hex4Text").textContent = hex4);
}

/*
DISPLAYING NEW DATA
*/

document.getElementById("formId").addEventListener("submit", (event) => {
  event.preventDefault();

  seedColor = document.getElementById("colorInput").value;
  seedColorClean = seedColor.slice(1, seedColor.length);
  selectValue = select.value;
  getInitialData(seedColorClean, selectValue);
});
