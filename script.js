   let cart = [];
   
    const themeToggle = document.querySelector('#theme-toggle');
    themeToggle.onclick = () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.classList.toggle('fa-sun');
    };

    const loginForm = document.querySelector('.login-form-container');
    document.querySelector('#login-btn').onclick = () => loginForm.classList.add('active');
    document.querySelector('#close-login').onclick = () => loginForm.classList.remove('active');
    let currentLang = 'en';
    document.querySelector('#lang-toggle').onclick = () => {
        currentLang = currentLang === 'en' ? 'ur' : 'en';
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute(`data-${currentLang}`);
        });
    };

    
    const homeContainer = document.getElementById('home-slides');

const books = [
  { name: "Atomic Habits", price: 15.99, img: "https://covers.openlibrary.org/b/isbn/9781847941831-M.jpg" },
  { name: "Rich Dad Poor Dad", price: 12.50, img: "https://covers.openlibrary.org/b/isbn/9781612680170-M.jpg" },
  { name: "The Alchemist", price: 10.99, img: "https://covers.openlibrary.org/b/isbn/9780061122415-M.jpg" },
  { name: "Think and Grow Rich", price: 14.20, img: "https://covers.openlibrary.org/b/isbn/9780525483496-M.jpg" },
];


books.forEach((book) => {
  homeContainer.innerHTML += `
    <div class="swiper-slide">
        <img src="${book.img}" alt="${book.name}">
        <h3 style="margin-top:10px">${book.name}</h3>
        <div class="h-price">$${book.price}</div>
        <button class="btn" style="margin-top:1rem">Add to Cart</button>
    </div>
  `;
});
    new Swiper(".reviews-slider", {
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });
    const featContainer = document.getElementById('featured-items');

[
  ["Atomic Habits","9780735211292",15.99],
  ["Rich Dad Poor Dad","9781612680194",12.50],
  ["The Alchemist","9780062315007",10.99],
  ["Deep Work","9781455586691",18.00],
  ["Ikigai","9780143130727",11.75]
].forEach(b => {
  featContainer.innerHTML += `
    <div class="swiper-slide box">
      <img src="https://covers.openlibrary.org/b/isbn/${b[1]}-L.jpg">
      <h3>${b[0]}</h3>
      <div class="price" style="font-size:2.5rem; font-weight:bold; color:var(--primary);">$${b[2]}</div>
      <button class="btn">Buy Now</button>
    </div>
  `;
});

    
    const arrivalGrid = document.getElementById('all-arrivals');

[
  ["Atomic Habits","9780735211292"],
  ["Rich Dad Poor Dad","9781612680194"],
  ["The Alchemist","9780062315007"],
  ["Deep Work","9781455586691"],
  ["Ikigai","9780143130727"],
  ["Zero to One","9780804139298"],
  ["The 5 AM Club","9798371878083"],
  ["Psychology of Money","9780857197689"],
  ["Think Like a Monk","9780008386597"],
  ["Start With Why","9781591846444"],
  ["Think and Grow Rich","9780525483496"],
  ["The Subtle Art of Not Giving a F*ck","9780062457714"],
  ["Can't Hurt Me","9781544512280"],
  ["Atomic Focus","9781909410299"],
  ["Good Vibes Good Life","9781788171823"],
  ["The Power of Habit","9781847941831"],
  ["Make Your Bed","0816743568"],
  ["Start Now","9780099563983"],
  ["The Monk Who Sold His Ferrari","9788179921623"],
  ["Educated","9780399590504"]
].forEach(b => {
  arrivalGrid.innerHTML += `
    <div class="box">
      <img src="https://covers.openlibrary.org/b/isbn/${b[1]}-L.jpg" alt="">
      <h3>${b[0]}</h3>
      <div class="price">$14.99</div>
      <button class="btn" style="padding:0.8rem 1.5rem; font-size:1.4rem">Add to Cart</button>
    </div>
  `;
});

  
    new Swiper(".home-slider", {
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        effect: "coverflow",
    });

    new Swiper(".featured-slider", {
        loop: true,
        spaceBetween: 20,
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }
    });