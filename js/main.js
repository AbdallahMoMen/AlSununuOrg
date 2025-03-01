// Start Of Elements Varaible

let langSelector = document.querySelector(".nav-container .lang");
let langList = document.querySelector(".lang-list");
let langOptions = document.querySelectorAll(".lang-list li");
let listIcon = document.querySelector("header .container .nav-container .list-icon");
let navList = document.querySelector("header .container .nav-container .nav");
let contactBtn = document.querySelector("li.contact-button");
let pageLang = document.documentElement.lang;
let cardBtn = document.querySelectorAll(".activity .card-button");
let activityClose = document.querySelectorAll(".activity .activity-info .btn");
let contactForm = document.querySelector(".form");
let sendBtn = document.querySelector(".form button");

// Ending Of Elements varaible

// Starting Of Functions

function createContactForm(formlang) {
  if (formlang == "en") {
    let form = document.createElement("form");
    form.id = "contact";
    // Start Of Creating NameInput Div
    let nameCont = document.createElement("div");
    let nameLabel = document.createElement("lable");
    nameLabel.for = "name";
    let nameLabelText = document.createTextNode("Vor-Nachname");
    nameLabel.appendChild(nameLabelText);
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "waiting";
    nameInput.setAttribute("required", "");
    nameCont.appendChild(nameLabel);
    nameCont.appendChild(nameInput);
    // End Of Creating NameInput Div

    // Start Of Creating CityInput Div
    let cityCont = document.createElement("div");
    let cityLabel = document.createElement("lable");
    cityLabel.for = "city";
    let cityLabelText = document.createTextNode("Stadt");
    cityLabel.appendChild(cityLabelText);
    let cityInput = document.createElement("input");
    cityInput.type = "text";
    cityInput.id = "city";
    cityInput.placeholder = "waiting";
    cityInput.setAttribute("required", "");
    cityCont.appendChild(cityLabel);
    cityCont.appendChild(cityInput);
    // End Of Creating CityInput Div

    // Start Of Creating EmailInput Div
    let emailCont = document.createElement("div");
    let emailLabel = document.createElement("lable");
    emailLabel.for = "mail";
    let emailLabelText = document.createTextNode("Email_Adresse");
    emailLabel.appendChild(emailLabelText);
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "mail";
    emailInput.placeholder = "waiting";
    emailInput.setAttribute("required", "");
    emailCont.appendChild(emailLabel);
    emailCont.appendChild(emailInput);
    // End Of Creating EmailInput Div

    // Start Of Creating PhoneInput Div
    let telCont = document.createElement("div");
    let telLabel = document.createElement("lable");
    telLabel.for = "phone";
    let telLabelText = document.createTextNode("Handy_Nummer");
    telLabel.appendChild(telLabelText);
    let telInput = document.createElement("input");
    telInput.type = "tel";
    telInput.id = "phone";
    telInput.placeholder = "waiting";
    telInput.setAttribute("required", "");
    telCont.appendChild(telLabel);
    telCont.appendChild(telInput);
    // End Of Creating PhoneInput Div

    // Start Of Creating TextArea Div
    let txtAreaCont = document.createElement("div");
    let areaLabel = document.createElement("lable");
    areaLabel.for = "toughts";
    let areaLabelText = document.createTextNode("Deine Nachricht");
    areaLabel.appendChild(areaLabelText);
    let areaInput = document.createElement("textarea");
    areaInput.id = "toughts";
    areaInput.placeholder = "waiting";
    txtAreaCont.appendChild(areaLabel);
    txtAreaCont.appendChild(areaInput);
    // End Of Creating TextArea Div

    // Start Of Creating SendButton Div
    let btn = document.createElement("button");
    let btnLable = document.createTextNode("Nachrichten senden");
    btn.appendChild(btnLable);
    // End Of Creating SendButton Div

    form.appendChild(nameCont);
    form.appendChild(cityCont);
    form.appendChild(emailCont);
    form.appendChild(telCont);
    form.appendChild(txtAreaCont);
    form.appendChild(btn);
    document.body.appendChild(form);
  } else {
    let form = document.createElement("form");
    form.id = "contact";
    // Start Of Creating NameInput Div
    let nameCont = document.createElement("div");
    let nameLabel = document.createElement("lable");
    nameLabel.for = "name";
    let nameLabelText = document.createTextNode("الاسم");
    nameLabel.appendChild(nameLabelText);
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.placeholder = "waiting";
    nameInput.setAttribute("required", "");
    nameCont.appendChild(nameLabel);
    nameCont.appendChild(nameInput);
    // End Of Creating NameInput Div

    // Start Of Creating CityInput Div
    let cityCont = document.createElement("div");
    let cityLabel = document.createElement("lable");
    cityLabel.for = "city";
    let cityLabelText = document.createTextNode("المدينة");
    cityLabel.appendChild(cityLabelText);
    let cityInput = document.createElement("input");
    cityInput.type = "text";
    cityInput.id = "city";
    cityInput.placeholder = "waiting";
    cityInput.setAttribute("required", "");
    cityCont.appendChild(cityLabel);
    cityCont.appendChild(cityInput);
    // End Of Creating CityInput Div

    // Start Of Creating EmailInput Div
    let emailCont = document.createElement("div");
    let emailLabel = document.createElement("lable");
    emailLabel.for = "mail";
    let emailLabelText = document.createTextNode("الايميل");
    emailLabel.appendChild(emailLabelText);
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "mail";
    emailInput.placeholder = "waiting";
    emailInput.setAttribute("required", "");
    emailCont.appendChild(emailLabel);
    emailCont.appendChild(emailInput);
    // End Of Creating EmailInput Div

    // Start Of Creating PhoneInput Div
    let telCont = document.createElement("div");
    let telLabel = document.createElement("lable");
    telLabel.for = "phone";
    let telLabelText = document.createTextNode("موبايل");
    telLabel.appendChild(telLabelText);
    let telInput = document.createElement("input");
    telInput.type = "tel";
    telInput.id = "phone";
    telInput.placeholder = "waiting";
    telInput.setAttribute("required", "");
    telCont.appendChild(telLabel);
    telCont.appendChild(telInput);
    // End Of Creating PhoneInput Div

    // Start Of Creating TextArea Div
    let txtAreaCont = document.createElement("div");
    let areaLabel = document.createElement("lable");
    areaLabel.for = "toughts";
    let areaLabelText = document.createTextNode("Deine Nachricht");
    areaLabel.appendChild(areaLabelText);
    let areaInput = document.createElement("textarea");
    areaInput.id = "toughts";
    areaInput.placeholder = "waiting";
    txtAreaCont.appendChild(areaLabel);
    txtAreaCont.appendChild(areaInput);
    // End Of Creating TextArea Div

    // Start Of Creating SendButton Div
    let btn = document.createElement("button");
    let btnLable = document.createTextNode("ارسال");
    btn.appendChild(btnLable);
    // End Of Creating SendButton Div

    form.appendChild(nameCont);
    form.appendChild(cityCont);
    form.appendChild(emailCont);
    form.appendChild(telCont);
    form.appendChild(txtAreaCont);
    form.appendChild(btn);
    document.body.appendChild(form);
  }
}

// Ending Of Functions

// Language Selector Function

langSelector.addEventListener("click", () => {
  if (!langList.classList.contains("visible")) {
    langList.style.display = "block";
    setTimeout(() => {
      langList.classList.toggle("visible");
      langSelector.classList.toggle("shadow");
    }, 100);
  } else {
    setTimeout(() => {
      langList.style.display = "none";
    }, 300);
    langList.classList.toggle("visible");
    langSelector.classList.toggle("shadow");
  }

  // Hide langList on scroll
  document.addEventListener("scroll", () => {
    if (langList.classList.contains("visible")) {
      setTimeout(() => {
        langList.style.display = "none";
      }, 300);
      langList.classList.toggle("visible");
      langSelector.classList.toggle("shadow");
    }
  });
});

// Setting Function For List-Icon PopUp

listIcon.addEventListener("click", () => {
  if (!navList.classList.contains("list-visible")) {
    navList.style.display = "flex";
    setTimeout(() => {
      navList.classList.toggle("list-visible");
      listIcon.classList.toggle("shadow");
    }, 100);
  } else {
    setTimeout(() => {
      navList.style.display = "none";
    }, 300);
    navList.classList.toggle("list-visible");
    listIcon.classList.toggle("shadow");
  }
});

// Setting Activity Buttons
cardBtn.forEach((btn) => {
  btn.addEventListener("click", (ele) => {
    let activityCont = ele.currentTarget.closest(".activity");
    let activityInfo = activityCont.querySelector(".activity-info");
    let closebtn = activityCont.querySelector(".btn");
    activityInfo.classList.toggle("visible");
    setTimeout(() => {
      activityInfo.style.opacity = "1";
    }, 100);
    // Setting Close Button For ACtivity info
    closebtn.onclick = () => {
      setTimeout(() => {
        activityInfo.classList.toggle("visible");
      }, 300);
      activityInfo.style.opacity = "0";
    };
  });
});

// Hide on scroll
document.addEventListener("scroll", () => {
  if (navList.classList.contains("list-visible")) {
    navList.classList.toggle("list-visible");
    listIcon.classList.toggle("shadow");
  }
});

// Setting Form Transmiter

// sendBtn.addEventListener("click", (btn) => {
//   btn.preventDefault();
//   let userName = contactForm.querySelector("#name").value;
//   let userCity = contactForm.querySelector("#city").value;
//   let userMail = contactForm.querySelector("#mail").value;
//   let userPhone = contactForm.querySelector("#phone").value;
//   let userMsg = contactForm.querySelector("#toughts").value;

//   let groupId = "BekiDBx0FCl5SjSsfxEums";
//   let msgForm = `Contact User
//   Name: ${userName}
//   City: ${userCity}
//   Email: ${userMail}
//   Phone: ${userPhone}
//   Message: ${userMsg}`;
//   let whatsappURL = `https://wa.me/?text=${encodeURIComponent(msgForm)}`;
//   window.open(whatsappURL, "_blank");
// });

// Setting Activities Swiper

if (document.querySelector(".swiper")) {
  new Swiper(".swiper", {
    speed: 500,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
