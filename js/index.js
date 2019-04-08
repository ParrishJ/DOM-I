const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// Images

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Nav

let allATags = document.querySelectorAll("nav a");

allATags[0].textContent = siteContent["nav"]["nav-item-1"];
allATags[1].textContent = siteContent["nav"]["nav-item-2"];
allATags[2].textContent = siteContent["nav"]["nav-item-3"];
allATags[3].textContent = siteContent["nav"]["nav-item-4"];
allATags[4].textContent = siteContent["nav"]["nav-item-5"];
allATags[5].textContent = siteContent["nav"]["nav-item-6"];


//Cta-stuff

let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"]; // Used "innerHTML" instead of, "textContent" here so that the browser will interperet the <br> tags added to the object.

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];


// Top-Content Stuff

let topText = document.querySelectorAll(".top-content .text-content");

topText[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
topText[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
topText[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topText[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

//Bottom-Content Stuff // Organized a little different than Top-Content for Practice

let bottomHeader = document.querySelectorAll(".bottom-content .text-content");

bottomHeader[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomHeader[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomHeader[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];

let bottomText = document.querySelectorAll(".bottom-content .text-content");

bottomText[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
bottomText[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
bottomText[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

//Contact

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactPs = document.querySelectorAll(".contact p");
contactPs[0].textContent = siteContent["contact"]["address"];
contactPs[1].textContent = siteContent["contact"]["phone"];
contactPs[2].textContent = siteContent["contact"]["email"];

//Footer

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];




//Styles

allATags[0].style.color = "green";
allATags[1].style.color = "green";
allATags[2].style.color = "green";
allATags[3].style.color = "green";
allATags[4].style.color = "green";
allATags[5].style.color = "green";

//new HTML

let nav = document.querySelector("nav"); //here, we select the container which will hold the new item

let newA1 = document.createElement("a"); // here we make a the new element for that will be added
newA1.textContent = "Appended";
newA1.style.color = "green";
nav.appendChild(newA1);

let newA2 = document.createElement("a");
newA2.textContent = "Prepended";
newA2.style.color = "green";
nav.prepend(newA2);


//document.querySelectorAll('.jumbotron li')[0-2]