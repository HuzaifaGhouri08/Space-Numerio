// Grab All Elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header")
const navLink = document.querySelectorAll(".nav-link");
const articles = document.querySelectorAll("article");
const navLinks = document.querySelectorAll(".nav-link");
const Btn2 = document.getElementById("btn2");
const openModalBtn = document.getElementById("started");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const form = document.getElementById("myForm");
const navigation = document.querySelector('.navigation');
const mainpara = document.querySelector('.mainpara');
const hide1 = document.getElementById('hide1');
const hide2 = document.querySelector('.buttonWrapper');

//Hamburger Meny
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hide1.style.display= "none";
    hide2.style.display= "none";
}

// remove menu when clicks on any link
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hide1.style.display= "inline";
    hide2.style.display= "inline";
}
var sticky = navigation.offsetTop;
window.addEventListener('scroll', function() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky');
  }
});

// scroll Active Navigation starts
window.addEventListener("scroll", () => {
  let current = "";

  articles.forEach((article) => {
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;

    if (window.pageYOffset >= articleTop - articleHeight * 0.30) {
      current = article.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// form get started
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  Btn2.style.zIndex = "-1";
  mainpara.style.display ="none";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  Btn2.style.zIndex = "0";
  card.style.display = "block"
  mainpara.style.display = "block"
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // submission 
});

window.addEventListener("DOMContentLoaded", function() {
  var paragraph = document.getElementById("myParagraph");
  var originalText = paragraph.textContent;
  var newText = `"2 Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor labore velit exercitation"`;
  var duration = 200; // Duration in milliseconds

  function fadeOutAndIn() {
    paragraph.style.opacity = '0%';

    setTimeout(function() {
      if (paragraph.textContent === originalText) {
        paragraph.textContent = newText;
        paragraph.style.fontSize = '1.3rem';
        paragraph.style.color="gray";
      } else {
        paragraph.textContent = originalText;
        paragraph.style.fontSize = '1.3rem';
        paragraph.style.color="gray";
      }

      paragraph.style.opacity = "100%";
    }, duration);
  }

  setInterval(fadeOutAndIn, duration * 10);
});


window.addEventListener("DOMContentLoaded", function() {
  var paragraph = document.getElementById("myParagraph1");
  var originalText = paragraph.textContent;
  var newText = `KATHRYN MURPHY`;
  var duration = 200; // Duration in milliseconds

  function fadeOutAndIn() {
    paragraph.style.opacity = '0%';

    setTimeout(function() {
      if (paragraph.textContent === originalText) {
        paragraph.textContent = newText;

      } else {
        paragraph.textContent = originalText;
      }

      paragraph.style.opacity = "100%";
    }, duration);
  }

  setInterval(fadeOutAndIn, duration * 10);
});


window.addEventListener("DOMContentLoaded", function() {
  var paragraph = document.getElementById("myParagraph2");
  var originalText = paragraph.textContent;
  var newText = `Marketing Coordinator`;
  var duration = 200; // Duration in milliseconds

  function fadeOutAndIn() {
    paragraph.style.opacity = '0%';

    setTimeout(function() {
      if (paragraph.textContent === originalText) {
        paragraph.textContent = newText;

      } else {
        paragraph.textContent = originalText;
      }

      paragraph.style.opacity = "100%";
    }, duration);
  }

  setInterval(fadeOutAndIn, duration * 10);
});
