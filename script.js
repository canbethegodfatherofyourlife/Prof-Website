let publications = document.getElementById("publications");
let aboutme = document.getElementById("aboutme");
let contact = document.getElementById('contact')
let footer = document.getElementById('footer')

let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");
let nav4 = document.getElementById("nav4");
let nav5 = document.getElementById("nav5");

let view_more = document.getElementById("view_more");
let scientific_articles = document.getElementById("scientific_articles");

let view_more_content = document.getElementById("view_more_content");
let scientific_articles_content = document.getElementById(
  "scientific_articles_content"
);

nav3.addEventListener("click", function () {
  publications.style.display = "block";
  aboutme.style.display = "none";
  contact.style.display = "none";
  scientific_articles_content.style.display = "block";
});

nav1.addEventListener("click", function () {
  publications.style.display = "none";
  contact.style.display = "none";
  aboutme.style.display = "block";
});

nav5.addEventListener("click", function () {
  publications.style.display = "none";
  contact.style.display = "block";
  aboutme.style.display = "none";
});

view_more.addEventListener("click", function () {
  view_more_content.style.display = "block";
  scientific_articles_content.style.display = "none";
});

scientific_articles.addEventListener("click", function () {
  scientific_articles_content.style.display = "block";
  view_more_content.style.display = "none";
});

