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

for (const i of Array(6).keys()) setContent(`nav a:nth-child(${i+1})`, "nav", `nav-item-${i+1}`);

setContent(".cta h1", "cta", "h1");
setContent(".cta button", "cta", "button");

const mainContent = ["features", "about", "services", "product", "vision"];

mainContent.forEach((part, i) => {
  const parent = i < 2 ? "top" : "bottom";
  const nth = i < 2 ? i : i - 2;
  const selector = `.${parent}-content div:nth-of-type(${nth + 1})`;

  setContent(`${selector} h4`, "main-content", `${part}-h4`);
  setContent(`${selector} p`, "main-content", `${part}-content`);
});

setContent(".contact h4", "contact", "contact-h4");

const contactContent = ["address", "phone", "email"];
contactContent.forEach((part, i) => setContent(`.contact p:nth-of-type(${i+1})`, "contact", part));

setContent("footer p", "footer", "copyright");

const nav = document.querySelector("nav");
const home = document.createElement("a");
home.textContent = "Home";
nav.prepend(home);
const download = document.createElement("a");
download.textContent = "Download";
nav.append(download);

for (const navNode of nav.children) {
  navNode.style.color = "green";
}

document.querySelector(".cta button").addEventListener("click", () => {
  document.querySelector("nav").style.flexDirection = "row-reverse";
});
