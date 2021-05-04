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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
let navServices = document.querySelector('a');
navServices.textContent = siteContent['nav']['nav-item-1'];
let navProduct = navServices.nextElementSibling;
navProduct.textContent = siteContent['nav']['nav-item-2'];
let navVision = navProduct.nextElementSibling;
navVision.textContent = siteContent['nav']['nav-item-3'];
let navFeatures = navVision.nextElementSibling;
navFeatures.textContent = siteContent['nav']['nav-item-4'];
let navAbout = navFeatures.nextElementSibling;
navAbout.textContent = siteContent['nav']['nav-item-5'];
let navContact = navAbout.nextElementSibling;
navContact.textContent = siteContent['nav']['nav-item-6'];

//cta
let bigText = document.querySelector('.cta h1');
bigText.textContent = siteContent['cta']['h1'];
let buttonText = document.querySelector('.cta button');
buttonText.textContent = siteContent['cta']['button'];
let codeImg = document.querySelector('#cta-img');
codeImg.setAttribute('src', siteContent["cta"]["img-src"]);

bigText.innerHTML = "DOM <br>Is<br> Awesome"; 

//main content
//top
let featuresH = document.querySelector('.top-content :nth-child(1) :nth-child(1)');
featuresH.textContent = siteContent["main-content"]["features-h4"];
let featuresP = document.querySelector('.top-content :nth-child(1) :nth-child(2)');
featuresP.textContent = siteContent["main-content"]["features-content"];
let aboutH = document.querySelector('.top-content :nth-child(2) :nth-child(1)');
aboutH.textContent = siteContent["main-content"]["about-h4"];
let aboutP = document.querySelector('.top-content :nth-child(2) :nth-child(2)');
aboutP.textContent = siteContent["main-content"]["about-content"];
//img
let mainContentImg = document.querySelector('#middle-img');
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
//bottom
let servicesH = document.querySelector(".bottom-content :nth-child(1) :nth-child(1)");
servicesH.textContent = siteContent["main-content"]["services-h4"];
let servicesP = document.querySelector(".bottom-content :nth-child(1) :nth-child(2)");
servicesP.textContent = siteContent["main-content"]["services-content"];
let productH = document.querySelector(".bottom-content :nth-child(2) :nth-child(1)");
productH.textContent = siteContent["main-content"]["product-h4"];
let productP = document.querySelector(".bottom-content :nth-child(2) :nth-child(2)");
productP.textContent = siteContent["main-content"]["product-content"];
let visionH = document.querySelector(".bottom-content :nth-child(3) :nth-child(1)");
visionH.textContent = siteContent["main-content"]["vision-h4"];
let visionP = document.querySelector(".bottom-content :nth-child(3) :nth-child(2)");
visionP.textContent = siteContent["main-content"]["vision-content"];

//contact section
let contactH = document.querySelector(".contact :nth-child(1)");
contactH.textContent = siteContent['contact']['contact-h4'];
let address = document.querySelector(".contact :nth-child(2)");
address.textContent = siteContent['contact']['address'];

address.innerHTML = "123 Way 456 Street <br>Somewhere, USA";

let phone = document.querySelector(".contact :nth-child(3)");
phone.textContent = siteContent['contact']['phone'];
let email = document.querySelector(".contact :nth-child(4)");
email.textContent = siteContent['contact']['email'];

//footer
let copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]['copyright'];