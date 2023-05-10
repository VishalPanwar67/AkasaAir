// To Show Different Form

let bookaflight = document.getElementById("bookaflight");
let checkin = document.getElementById("checkin");
let managebooking = document.getElementById("managebooking");

function bookflight() {
  if ((bookaflight.style.display = "block")) {
    checkin.style.display = "none";
    managebooking.style.display = "none";
  } else if (bookaflight.style.display != "block") {
    checkin.style.display = "block";
  } else if ((bookaflight.style.display = "none")) {
    managebooking.style.display = "Block";
  }
}
function check() {
  if ((checkin.style.display = "block")) {
    bookaflight.style.display = "none";
    managebooking.style.display = "none";
  } else if (checkin.style.display != "block") {
    bookaflight.style.display = "block";
  } else if ((checkin.style.display = "none")) {
    managebooking.style.display = "Block";
  }
}
function booking() {
  if ((managebooking.style.display = "block")) {
    bookaflight.style.display = "none";
    checkin.style.display = "none";
  } else if (managebooking.style.display != "block") {
    bookaflight.style.display = "block";
  } else if ((managebooking.style.display = "none")) {
    checkin.style.display = "Block";
  }
}

// To show active Text Color

let hr_1 = document.getElementById("hr_1");
let hr_2 = document.getElementById("hr_2");
let hr_3 = document.getElementById("hr_3");

let color = document.getElementById("sec_1_navbar_bookaflight");
color.addEventListener("click", () => {
  if ((color.style.color = "rgb(255, 99, 0)")) {
    color1.style.color = "black";
    color2.style.color = "black";
    hr_1.style.backgroundColor = "rgb(255, 99, 0)";
    hr_2.style.backgroundColor = "white";
    hr_3.style.backgroundColor = "white";
  }
});
let color1 = document.getElementById("sec_1_navbar_checkin");
color1.addEventListener("click", () => {
  if ((color1.style.color = "rgb(255, 99, 0)")) {
    color.style.color = "black";
    color2.style.color = "black";
    hr_1.style.backgroundColor = "white";
    hr_2.style.backgroundColor = "rgb(255, 99, 0)";
    hr_3.style.backgroundColor = "white";
  }
});
let color2 = document.getElementById("sec_1_navbar_managebooking");
color2.addEventListener("click", () => {
  if ((color2.style.color = "rgb(255, 99, 0)")) {
    color.style.color = "black";
    color1.style.color = "black";
    hr_1.style.backgroundColor = "white";
    hr_2.style.backgroundColor = "white";
    hr_3.style.backgroundColor = "rgb(255, 99, 0)";
  }
});

// Normal Active Form

if ((bookaflight.style.display = "block")) {
  hr_1.style.backgroundColor = "rgb(255, 99, 0)";
  hr_2.style.backgroundColor = "white";
  hr_3.style.backgroundColor = "white";
  color2.style.color = "black";
  color1.style.color = "black";
}

// Radio Buttons and their forms function

let ow = document.getElementById("OW");
let rt = document.getElementById("RT");
let oneWayTrip = document.getElementById("one_way_trip");
let RoundTrip = document.getElementById("round_trip");

function OW() {
  if (
    ((ow.style.color = "rgb(255, 99, 0)"), (oneWayTrip.style.display = "block"))
  ) {
    rt.style.color = "Black";
    RoundTrip.style.display = "none";
  }
}

function RT() {
  if (
    ((rt.style.color = "rgb(255, 99, 0)"), (RoundTrip.style.display = "block"))
  ) {
    ow.style.color = "Black";
    oneWayTrip.style.display = "none";
  }
}

// Section 9
// (Display functionallity and border bottom color)


let Hotel = document.getElementById("sec_9_p1");
let CarRental = document.getElementById("sec_9_p2");
let Experience = document.getElementById("sec_9_p3");
let BaggageDelivery = document.getElementById("sec_9_p4");

let HotelsImg = document.getElementById("sec_9_img_1");
let CarRentalImg = document.getElementById("sec_9_img_2");
let ExperiencesImg = document.getElementById("sec_9_img_3");
let BaggageDeliveryImg = document.getElementById("sec_9_img_4");

let sec_9_hotels = document.getElementById("sec_9_hotels");
let sec_9_car_rental = document.getElementById("sec_9_car_rental");
let sec_9_experiences = document.getElementById("sec_9_experiences");
let sec_9_baggage = document.getElementById("sec_9_baggage");

function Hotels() {
  if (((Hotel.style.display = "block"), (HotelsImg.style.display = "block"))) {
    CarRental.style.display = "none";
    Experience.style.display = "none";
    BaggageDelivery.style.display = "none";
    CarRentalImg.style.display = "none";
    ExperiencesImg.style.display = "none";
    BaggageDeliveryImg.style.display = "none";
    sec_9_hotels.style.borderBottom = "3px solid rgb(255, 99, 0)";
    sec_9_car_rental.style.borderBottom = "none";
    sec_9_experiences.style.borderBottom = "none";
    sec_9_baggage.style.borderBottom = "none";
  }
}
function Car_Rental() {
  if (
    ((CarRental.style.display = "block"),
    (CarRentalImg.style.display = "block"))
  ) {
    Hotel.style.display = "none";
    Experience.style.display = "none";
    BaggageDelivery.style.display = "none";
    HotelsImg.style.display = "none";
    ExperiencesImg.style.display = "none";
    BaggageDeliveryImg.style.display = "none";
    sec_9_car_rental.style.borderBottom = "3px solid rgb(255, 99, 0)";
    sec_9_hotels.style.borderBottom = "none";
    sec_9_experiences.style.borderBottom = "none";
    sec_9_baggage.style.borderBottom = "none";
  }
}
function Experiences() {
  if (
    ((Experience.style.display = "block"),
    (ExperiencesImg.style.display = "block"))
  ) {
    Hotel.style.display = "none";
    CarRental.style.display = "none";
    BaggageDelivery.style.display = "none";
    HotelsImg.style.display = "none";
    CarRentalImg.style.display = "none";
    BaggageDeliveryImg.style.display = "none";
    sec_9_experiences.style.borderBottom = "3px solid rgb(255, 99, 0)";
    sec_9_hotels.style.borderBottom = "none";
    sec_9_car_rental.style.borderBottom = "none";
    sec_9_baggage.style.borderBottom = "none";
  }
}
function Baggage_Delivery() {
  if (
    ((BaggageDelivery.style.display = "block"),
    (BaggageDeliveryImg.style.display = "block"))
  ) {
    Hotel.style.display = "none";
    CarRental.style.display = "none";
    Experience.style.display = "none";
    HotelsImg.style.display = "none";
    CarRentalImg.style.display = "none";
    ExperiencesImg.style.display = "none";
    sec_9_baggage.style.borderBottom = "3px solid rgb(255, 99, 0)";
    sec_9_hotels.style.borderBottom = "none";
    sec_9_car_rental.style.borderBottom = "none";
    sec_9_experiences.style.borderBottom = "none";
  }
}


// Section 9 Ul text color

let sec_9_hotel_2 = document.getElementById("sec_9_hotels_1");
sec_9_hotel_2.addEventListener("click", () => {
  if ((sec_9_hotel_2.style.color = "rgb(255, 99, 0)")) {
    sec_9_car_rental_2.style.color = "black";
    sec_9_experiences_2.style.color = "black";
    sec_9_baggage_2.style.color = "black";
  }
});
let sec_9_car_rental_2 = document.getElementById("sec_9_car_rental_1");
sec_9_car_rental_2.addEventListener("click", () => {
  if ((sec_9_car_rental_2.style.color = "rgb(255, 99, 0)")) {
    sec_9_hotel_2.style.color = "black";
    sec_9_experiences_2.style.color = "black";
    sec_9_baggage_2.style.color = "black";
  }
});

let sec_9_experiences_2 = document.getElementById("sec_9_experiences_1");
sec_9_experiences_2.addEventListener("click", () => {
  if ((sec_9_experiences_2.style.color = "rgb(255, 99, 0)")) {
    sec_9_hotel_2.style.color = "black";
    sec_9_car_rental_2.style.color = "black";
    sec_9_baggage_2.style.color = "black";
  }
});

let sec_9_baggage_2 = document.getElementById("sec_9_baggage_1");
sec_9_baggage_2.addEventListener("click", () => {
  if ((sec_9_baggage_2.style.color = "rgb(255, 99, 0)")) {
    sec_9_hotel_2.style.color = "black";
    sec_9_car_rental_2.style.color = "black";
    sec_9_experiences_2.style.color = "black";
  }
});


// Normal reload page section 9
if ((Hotel.style.display = "block")) {
  sec_9_hotel_2.style.color = "rgb(255, 99, 0)";
  sec_9_hotels.style.borderBottom = "3px solid rgb(255, 99, 0)";
}