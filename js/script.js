var writeUsButton = document.querySelector(".widget-button");
var writeUsPopup = document.querySelector(".modal");
var writeUsСlose = writeUsPopup.querySelector(".modal-close");
var writeUsForm = writeUsPopup.querySelector(".modal-contacts-form");
var writeUsNameFocus = writeUsPopup.querySelector("[name=name]");
var writeUsEmailFocus = writeUsPopup.querySelector("[name=email]");
var writeUsTextFocus = writeUsPopup.querySelector("[name=text]");
var writeUsNameStorage = localStorage.getItem("name");
var writeUsEmailStorage = localStorage.getItem("email");
var catalogItemTitles = document.querySelectorAll(".item-title");
var catalogItemPrice = document.querySelectorAll(".catalog-item-button");

writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-popup");
  if (writeUsNameStorage) {
    writeUsNameFocus.value = writeUsNameStorage;
    writeUsEmailFocus.focus();
    if (writeUsEmailStorage) {
      writeUsEmailFocus.value = writeUsEmailStorage;
      writeUsTextFocus.focus();
    }
  } else {
    writeUsNameFocus.focus();
  }
}
);

writeUsСlose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-popup");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsNameFocus.value || !writeUsEmailFocus.value || !writeUsTextFocus.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", writeUsNameFocus.value);
    localStorage.setItem("email", writeUsEmailFocus.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-popup")) {
    writeUsPopup.classList.remove("modal-popup");
    writeUsPopup.classList.remove("modal-error");
    }
  }
});

for ( i = 0; i < catalogItemTitles.length; i++ ) {
  catalogItemTitles[i].onfocus = function() {
    this.parentNode.parentNode.parentNode.style.borderTopColor = "#4d4d4d";
    this.parentNode.parentNode.parentNode.style.boxShadow = "0 6px 15px #bfbfbf";
    this.parentNode.parentNode.style.zIndex = "0";
  }
  catalogItemTitles[i].onblur = function() {
    this.parentNode.parentNode.parentNode.removeAttribute("style");
    this.parentNode.parentNode.removeAttribute("style");
  }
}

for ( i = 0; i < catalogItemPrice.length; i++ ) {
  catalogItemPrice[i].onfocus = function() {
    this.parentNode.parentNode.style.borderTopColor = "#4d4d4d";
    this.parentNode.parentNode.style.boxShadow = "0 6px 15px #bfbfbf";
    this.parentNode.style.zIndex = "0";
  }
  catalogItemPrice[i].onblur = function() {
    this.parentNode.parentNode.removeAttribute("style");
    this.parentNode.removeAttribute("style");
  }
}

function initMap() {
  var nerds = {lat: 59.938730, lng: 30.323110};
  var center = {lat: 59.9391120, lng: 30.321520};
  var map = new google.maps.Map(document.querySelector('.contacts-map'), {
    zoom: 17,
    center: center
  });
  var marker = new google.maps.Marker({
    position: nerds,
    map: map,
    icon: 'img/map-marker.png'
  });
}
