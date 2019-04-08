const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

// Navigation Menu // 

// For Loop
// const navBar = document.querySelectorAll('nav a'); // Grab all the selector of nav a
// for (let i = 0; i < navBar.length; i++) { // now we want it to start from the index of 0 and loop over it.
// navBar[i].textContent = Object.values(siteContent.nav)[i]; // we have to call object because its an Object.vlaue to grab the items.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values


// const navLinks = document.querySelectorAll('nav a');
// navLinks.forEach(a => (a.style.color = 'green'));

const services = document.getElementsByTagName('a')[0];
services.append(siteContent['nav']['nav-item-1']);
services.style.color = 'Green';

const product = document.getElementsByTagName('a')[1];
product.append(siteContent['nav']['nav-item-2']);
product.style.color = 'Green';

const vision = document.getElementsByTagName('a')[2];
vision.append(siteContent['nav']['nav-item-3']);
vision.style.color = 'Green';

const features = document.getElementsByTagName('a')[3];
features.append(siteContent['nav']['nav-item-4']);
features.style.color = 'Green';

const about = document.getElementsByTagName('a')[4];
about.append(siteContent['nav']['nav-item-5']);
about.style.color = 'Green';

const contact = document.getElementsByTagName('a')[5];
contact.append(siteContent['nav']['nav-item-6']);
contact.style.color = 'Green';

// CTA Section //

// # Note: you can wirte HTML tags in a string :o # //
const h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = 'DOM Is <br> Awesome';
 
const button = document.getElementsByTagName('button')[0];
button.innerHTML = 'Get Started';

const ctaIMG = document.getElementById('cta-img');
ctaIMG.setAttribute('src', siteContent['cta']['img-src']);
 
// Main Content Section // 

//////////////// Features

const featureH4 = document.getElementsByTagName('h4')[0];
featureH4.append(siteContent['main-content']['features-h4']);

const featureP = document.getElementsByTagName('p')[0];
featureP.append(siteContent['main-content']['about-content'])

//////////////// About

const aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.append(siteContent['main-content']['about-h4']);

const aboutP = document.getElementsByTagName('p')[1];
aboutP.append(siteContent['main-content']['about-content']);

//////////////// Middle Image

const middleIMG = document.getElementById('middle-img');
middleIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);

//////////////// Services

const servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.append(siteContent['main-content']['services-h4']);

const servicesP = document.getElementsByTagName('p')[2];
servicesP.append(siteContent['main-content']['services-content']);

//////////////// Product

const productH4 = document.getElementsByTagName('h4')[3];
productH4.append(siteContent['main-content']['product-h4']);

const productP = document.getElementsByTagName('p')[3];
productP.append(siteContent['main-content']['product-content']);

//////////////// Vision

const visionH4 = document.getElementsByTagName('h4')[4];
visionH4.append(siteContent['main-content']['vision-h4']);

const visionP = document.getElementsByTagName('p')[4];
visionP.append(siteContent['main-content']['vision-content']);

// Contact Section //

const contactH4 = document.getElementsByTagName('h4')[5];
contactH4.append(siteContent['contact']['contact-h4']);

const address = document.getElementsByTagName('p')[5];
address.append(siteContent['contact']['address']);

const phone = document.getElementsByTagName('p')[6];
phone.append(siteContent['contact']['phone']);

const email = document.getElementsByTagName('p')[7];
email.append(siteContent['contact']['email']);

// Footer Section // 

const footer = document.getElementsByTagName('p')[8];
footer.append(siteContent['footer']['copyright']);