let day = "";
let WOD = {};

$(document).ready(function () {
  init();
});

async function init() {
  const d = new Date();
  day = d.getDay();

  let response = await fetch(`/api/${day}`);
  if (response.ok) {
    let json = await response.json();
    const element1 = document.getElementsByClassName("title")[0];
    element1.innerText = json.day;
    let injectedHTML = "";
    for (let i = 0; i < json.WOD.length; i++) {
      injectedHTML += `
                    <div class="row">
                        <div id="${json.WOD[i].dbName}-modal" class="overlay">
                            <a href="javascript:void(0)" class="closebtn" onclick="closeModal('${json.WOD[i].dbName}')">&times;</a>
                            <div class="overlay-content">
                                <h3 style="text-align: center">Enter Weight:</h3>
                                <input 
                                    id="${json.WOD[i].dbName}-input" 
                                    placeholder="0" 
                                    type="number" 
                                    inputmode="numeric" 
                                    pattern="\d*"
                                ><span style="margin-left:-20px;">lb</span><br>
                                <div style="padding-top: 1em;">
                                    <button 
                                        type="submit" 
                                        style="padding: 1em;" 
                                        onclick="saveWeight('${json.WOD[i].dbName}')"
                                    >Submit</button>
                                </div>
                            </div>
                        </div>
                        <button class="workout-button" onclick="openModal('${json.WOD[i].dbName}')">
                            <div class="left">
                                <h3>${json.WOD[i].name}</h3>
                                <p>${json.WOD[i].sets}x${json.WOD[i].reps}</p>
                            </div>
                            <div class="right status-container">
                                <img id="${json.WOD[i].dbName}-status" class="status-image" src="assets/images/incomplete.svg">
                            </div>
                        </button>
                    </div>
                `;
    }
    const buttonContainer1 =
      document.getElementsByClassName("button-container")[0];
    buttonContainer1.innerHTML = injectedHTML;

    checkCompleted(json.WOD);
    WOD = json.WOD;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}

function openModal(dbName) {
  document.getElementById(`${dbName}-modal`).style.width = "100%";
}

function closeModal(dbName) {
  document.getElementById(`${dbName}-modal`).style.width = "0%";
}

function checkCompleted(WOD) {
  let keys = [];
  for (var key in localStorage) {
    keys.push(key);
  }

  for (let x = 0; x < WOD.length; x++) {
    if (keys.includes(WOD[x].dbName)) {
      document.getElementById(`${WOD[x].dbName}-status`).src =
        "assets/images/complete.svg";
    }
  }
}

function saveWeight(dbName) {
  localStorage.setItem(
    dbName,
    document.getElementById(`${dbName}-input`).value
  );
  document.getElementById(`${dbName}-status`).src =
    "assets/images/complete.svg";
  closeModal(dbName);
}

async function submit() {
  let data = {};
  let keys = [];
  for(const key  in localStorage) {
    keys.push(key);
  }

  for(let x=0;x<WOD.length;x++) {
    if (keys.includes(WOD[x].dbName)) {
      const value = localStorage.getItem(WOD[x].dbName);
      data[WOD[x].dbName] = parseInt(value);
    }
  }
  data["date"] = new Date().toISOString().slice(0,10);

  let response = await fetch(`/api/${day}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });

  localStorage.clear();
  window.location.reload();
  console.log(response.body)
}
