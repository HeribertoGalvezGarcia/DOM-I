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

function setImg(id, part, src) {
  const node = document.getElementById(id);
  node.setAttribute("src", siteContent[part][src]);
}

function setContent(selector, part, content) {
  const node = document.querySelector(selector);
  node.textContent = siteContent[part][content];
}

setImg("logo-img", "nav", "img-src");
setImg("cta-img", "cta", "img-src");
setImg("middle-img", "main-content", "middle-img-src");

setContent("nav a:nth-child(1)", "nav", "nav-item-1");
setContent("nav a:nth-child(2)", "nav", "nav-item-2");
setContent("nav a:nth-child(3)", "nav", "nav-item-3");
setContent("nav a:nth-child(4)", "nav", "nav-item-4");
setContent("nav a:nth-child(5)", "nav", "nav-item-5");
setContent("nav a:nth-child(6)", "nav", "nav-item-6");
setContent(".cta h1", "cta", "h1");
setContent(".cta button", "cta", "button");

setContent(".top-content div:nth-of-type(1) h4", "main-content", "features-h4");
setContent(".top-content div:nth-of-type(1) p", "main-content", "features-content");
setContent(".top-content div:nth-of-type(2) h4", "main-content", "about-h4");
setContent(".top-content div:nth-of-type(2) p", "main-content", "about-content");
setContent(".bottom-content div:nth-of-type(1) h4", "main-content", "services-h4");
setContent(".bottom-content div:nth-of-type(1) p", "main-content", "services-content");
setContent(".bottom-content div:nth-of-type(2) h4", "main-content", "product-h4");
setContent(".bottom-content div:nth-of-type(2) p", "main-content", "product-content");
setContent(".bottom-content div:nth-of-type(3) h4", "main-content", "vision-h4");
setContent(".bottom-content div:nth-of-type(3) p", "main-content", "vision-content");

setContent(".contact h4", "contact", "contact-h4");
setContent(".contact p:nth-of-type(1)", "contact", "address");
setContent(".contact p:nth-of-type(2)", "contact", "phone");
setContent(".contact p:nth-of-type(3)", "contact", "email");

setContent("footer p", "footer", "copyright");
