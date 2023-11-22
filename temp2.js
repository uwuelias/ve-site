const cats = document.getElementById('cats');
const blackcats = document.getElementById('black-cats');
const bluecats = document.getElementById('blue-cats');
const mintcats = document.getElementById('mint-cats');
const pinkcats = document.getElementById('pink-cats');
const purplecats = document.getElementById('purple-cats');
const whitecats = document.getElementById('white-cats');
const yellowcats = document.getElementById('yellow-cats');

blackcats.addEventListener('click', function() {
    cats.src='cats/blackcats.png'
})
bluecats.addEventListener('click', function() {
    cats.src='cats/bluecats.png'
})
mintcats.addEventListener('click', function() {
    cats.src='cats/mintcats.png'
})
pinkcats.addEventListener('click', function() {
    cats.src='cats/pinkcats.png'
})
purplecats.addEventListener('click', function() {
    cats.src='cats/purplecats.png'
})
whitecats.addEventListener('click', function() {
    cats.src='cats/whitecats.png'
})
yellowcats.addEventListener('click', function() {
    cats.src='cats/yellowcats.png'
})