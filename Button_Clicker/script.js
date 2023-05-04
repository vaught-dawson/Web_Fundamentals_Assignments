function login(element) {
  if (element.innerText == "Logout") {
    return (element.innerText = "Login");
  }
  element.innerText = "Logout";
}

function hide(element) {
  element.style.opacity = 0;
}

function like(element) {
  alert("Ninja was liked");
  var likes = parseInt(element.innerText.split(" ")[0]);
  element.innerText = `${++likes} likes`;
}
