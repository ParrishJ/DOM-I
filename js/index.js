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
    "h1": "DOM Is Awesome",
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


//Cta-stuff

let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

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





//document.querySelectorAll('.jumbotron li')[0-2]