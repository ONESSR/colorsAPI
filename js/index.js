// get the seed color from picker
// default applied for initial generation
let seedColor = document.getElementById("colorInput").value;
let seedColorClean = seedColor.slice(1, seedColor.length);
console.log("seedColor", seedColor);
console.log("seedColorClean", seedColorClean);

// get the scheme selection value
// default applied for initial generation
let select = document.getElementById("schemeSelect");
let selectValue = select.value.toLowerCase();
console.log("selectValue", selectValue);

// let text = select.options[select.selectedIndex].text;
// console.log("text", text);

// get data from api using the default values

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
  console.log("hex1", hex1);
  document.getElementById("hex1").style.backgroundColor = hex1;
  const hex1Text = (document.getElementById("hex1Text").textContent = hex1);

  const hex2 = data.colors[1].hex.value;
  console.log("hex1", hex1);
  document.getElementById("hex2").style.backgroundColor = hex2;
  const hex2Text = (document.getElementById("hex2Text").textContent = hex2);

  const hex3 = data.colors[2].hex.value;
  console.log("hex3", hex1);
  document.getElementById("hex3").style.backgroundColor = hex3;
  const hex3Text = (document.getElementById("hex3Text").textContent = hex3);

  const hex4 = data.colors[3].hex.value;
  console.log("hex4", hex4);
  document.getElementById("hex4").style.backgroundColor = hex4;
  const hex4Text = (document.getElementById("hex4Text").textContent = hex4);
}

/*
DISPLAYING NEW DATA
*/

document.getElementById("formId").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitClicked");

  seedColor = document.getElementById("colorInput").value;
  seedColorClean = seedColor.slice(1, seedColor.length);
  console.log("seedColor", seedColor);
  console.log("seedColorClean", seedColorClean);
  selectValue = select.value;
  console.log("selectValue", selectValue);
  getInitialData(seedColorClean, selectValue);
});

/*
COPY TO CLIPBOARD: INCOMPLETE

const copyButton = document.getElementById("seedText");

copyButton.addEventListener("click", () => {
  console.log("clicked");
  const content = document.getElementById("seedText").textContent;
  console.log("content", content);
  navigator.clipboard.writeText(content);

  document.getElementById("seedText").textContent = "copied";
});

*/
