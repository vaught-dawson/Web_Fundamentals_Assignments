function declineConnection(element) {
  var connectionRequestRow = element.parentElement.parentElement;
  connectionRequestRow.remove();

  var connectionRequestSpan = document.querySelector(
    ".requests-notifications span"
  );
  var connectionRequestCount = parseInt(
    connectionRequestSpan.innerText.split(" ")[0]
  );
  connectionRequestSpan.innerText = --connectionRequestCount;
}

function acceptConnection(element) {
  var connectionRequestRow = element.parentElement.parentElement;
  connectionRequestRow.remove();

  var connectionRequestSpan = document.querySelector(
    ".requests-notifications span"
  );
  var connectionRequestCount = parseInt(
    connectionRequestSpan.innerText.split(" ")[0]
  );
  connectionRequestSpan.innerText = --connectionRequestCount;

  var connectionsSpan = document.querySelector(
    ".connection-notifications span"
  );

  var connectionsCount = parseInt(connectionsSpan.innerText.split(" ")[0]);
  connectionsSpan.innerText = ++connectionsCount;
}

function editProfileName() {
  var profileName = document.querySelector(".profile-name");
  profileName.innerText = "Any Other Name";
}
