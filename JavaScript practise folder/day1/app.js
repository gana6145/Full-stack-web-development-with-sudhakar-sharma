



let display = document.getElementsByTagName('h1')[0];

function Submit() {
 
  let val = document.getElementById('status').value;
 if (val === "red") {
    display.innerHTML = "Stop! Signal is RED";
    display.style.color = "red";
  } else if (val === "green") {
    display.innerHTML = "Go! Signal is GREEN";
    display.style.color = "green";
  } else if (val === "yellow") {
    display.innerHTML = "Take precaution! Signal is YELLOW";
    display.style.color = "orange";
  } else {
    display.innerHTML = "Invalid signal!";
    display.style.color = "black";
  }
}
