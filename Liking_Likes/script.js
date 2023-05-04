function like(element) {
  var likeSpan = element.parentElement.children[0];
  var likes = parseInt(likeSpan.innerText.split(" ")[0]);
  likeSpan.innerText = `${++likes} like(s)`;
}
