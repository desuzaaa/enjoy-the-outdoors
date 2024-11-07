const parksTbody = document.querySelector("#parksTbody");

const statesDropdown = document.querySelector("#statesDropdown");

const parkTypeDropdown = document.querySelector("#parkTypeDropdown");

function getStates() {
  for (const state of locationsArray) {
    let option = document.createElement("option");
    option.value = state;
    option.innerText = state;
    statesDropdown.appendChild(option);
  }
}

getStates();

function loadParks() {
  for (const park of nationalParksArray) {
    let tr = parksTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = park.LocationName;

    let td2 = tr.insertCell();
    td2.innerText = park.Address || "N/A";

    let td3 = tr.insertCell();
    td3.innerText = park.City;

    let td4 = tr.insertCell();
    td4.innerText = park.State || "N/A";;

    let td5 = tr.insertCell();
    td5.innerText = park.ZipCode || "N/A";

    let td6 = tr.insertCell();
    td6.innerText = park.Phone || "N/A";

    let td7 = tr.insertCell();
    td7.innerText = park.Fax || "N/A";

    let td8 = tr.insertCell();
    if (park.Visit) {
      let anchor = document.createElement("a");
      anchor.target = "_blank";
      anchor.href = park.Visit;
      anchor.innerText = "Visit Website";
      td8.appendChild(anchor);
    } else {
      td8.innerText = "N/A";
    }
  }
}
loadParks();

function filterByState() {
  let sortedParks = statesDropdown.value;
  let filteredStates = nationalParksArray.filter((park) => park.State === sortedParks);
  parksTbody.innerHTML = "";

  for (const park of filteredStates) {
    let tr = parksTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = park.LocationName || "N/A";

    let td2 = tr.insertCell();
    td2.innerText = park.Address || "N/A";

    let td3 = tr.insertCell();
    td3.innerText = park.City || "N/A";

    let td4 = tr.insertCell();
    td4.innerText = park.State || "N/A";

    let td5 = tr.insertCell();
    td5.innerText = park.ZipCode || "N/A"; //&&(and), ||(or), ! or !!(not)

    let td6 = tr.insertCell();
    td6.innerText = park.Phone || "N/A"; //Turnary (variable ? variable : different Varaible)

    let td7 = tr.insertCell();
    td7.innerText = park.Fax || "N/A";

    let td8 = tr.insertCell();
    if (park.Visit) {
      let anchor = document.createElement("a");
      anchor.target = "_blank";
      anchor.href = park.Visit;
      anchor.innerText = "Visit Website";
      td8.appendChild(anchor);
    } else {
      td8.innerText = "N/A";
    }
  }
}

function getParks() {
  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.value = park;
    option.innerText = park;
    parkTypeDropdown.appendChild(option);
  }
}

getParks();

function filterByParkType() {
  let sortedType = parkTypeDropdown.value;
  let filteredParks = nationalParksArray.filter((park) => park.LocationName.includes(sortedType));

  parksTbody.innerHTML = "";

  for (const park of filteredParks) {
    let tr = parksTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = park.LocationName || "N/A";

    let td2 = tr.insertCell();
    td2.innerText = park.Address || "N/A";

    let td3 = tr.insertCell();
    td3.innerText = park.City || "N/A";

    let td4 = tr.insertCell();
    td4.innerText = park.State || "N/A";

    let td5 = tr.insertCell();
    td5.innerText = park.ZipCode || "N/A";

    let td6 = tr.insertCell();
    td6.innerText = park.Phone || "N/A";

    let td7 = tr.insertCell();
    td7.innerText = park.Fax || "N/A";

    let td8 = tr.insertCell();
    if (park.Visit) {
      let anchor = document.createElement("a");
      anchor.target = "_blank";
      anchor.href = park.Visit;
      anchor.innerText = "Visit Website";
      td8.appendChild(anchor);
    } else {
      td8.innerText = "N/A";
    }
  }
}

const parkLocationRadio = document.querySelector("#parkLocationRadio");
const parkTypesRadio = document.querySelector("#parkTypesRadio");

const stateDrop = document.querySelector("#stateDrop");
const parkTypesDrop = document.querySelector("#parkTypesDrop");

function filterTypeChanged() {
  if (parkLocationRadio.checked) {
    stateDrop.style.display = "block";
  } else {
    stateDrop.style.display = "none";
  }
  console.log(parkLocationRadio);
  
  if (parkTypesRadio.checked) {
    parkTypesDrop.style.display = "block";
  } else {
    parkTypesDrop.style.display = "none";
  }
}

parkLocationRadio.onchange = filterTypeChanged;
parkTypesRadio.onchange = filterTypeChanged;
filterTypeChanged();
