const menuData = [
  { category: "Breakfast", items: [
    item("Egg White Spinach & Feta Cheese Omelette", "Breakfast goodness.", 520, ["breakfast", "veg"]),
    item("Egg to Order", "Breakfast eggs prepared to order.", 475, ["breakfast"]),
    item("Smoked Ham and Cheese Omelette", "Ham and cheese omelette.", 550, ["breakfast", "non-veg"]),
    item("Egg Benedict", "Breakfast favourite.", 520, ["breakfast"]),
    item("Egg Florentine", "Breakfast favourite.", 520, ["breakfast", "veg"]),
    item("Berry and Chia Yoghurt Bowl", "Berry, chia and yoghurt bowl.", 650, ["breakfast", "veg"]),
    item("French Toast", "Classic breakfast sweet plate.", 520, ["breakfast", "veg"]),
    item("Chocolate Granola", "Breakfast granola.", 520, ["breakfast", "veg"]),
    item("Fruit Platter", "Fresh fruit platter.", 350, ["breakfast", "vegan", "veg"]),
    item("Shakshouka", "Breakfast goodness.", 500, ["breakfast", "veg"]),
    item("Classic Waffle", "Classic breakfast waffle.", 550, ["breakfast", "veg"]),
    item("Classic Pancake", "Classic breakfast pancake.", 550, ["breakfast", "veg"])
  ]},
  { category: "Soups", items: [
    item("Veg Soup of the Day", "A different soup featured daily; prepared from original recipes and served with bread sticks.", 395, ["veg", "lunch", "dinner"]),
    item("Non Veg Soup of the Day", "A different soup featured daily; ask for the non-veg selection.", 395, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Salads", items: [
    item("Veg Salad - Small / Regular", "Chef's creative recipes with fresh ingredients tossed in olive oil.", "430 / 560", ["veg", "lunch", "dinner"]),
    item("Non Veg Salad - Small / Regular", "Chef's creative recipes with fresh ingredients tossed in olive oil.", "530 / 660", ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Hot Dishes", items: [
    item("Veg Hot Dish", "Main dish with rice and vegetables.", 685, ["veg", "lunch", "dinner"]),
    item("Non-Veg Hot Dish", "Main dish with rice and vegetables.", 825, ["non-veg", "lunch", "dinner"]),
    item("Roast Chicken - Quarter", "Roast chicken.", 685, ["non-veg", "lunch", "dinner"]),
    item("Roast Chicken - Half / Whole", "Roast chicken.", "950 / 1650", ["non-veg", "lunch", "dinner"]),
    item("Pan Seared Norwegian Salmon", "Pan seared salmon.", 1650, ["non-veg", "dinner"]),
    item("Tandoori Rawas", "Tandoori fish.", 980, ["non-veg", "dinner"])
  ]},
  { category: "Breads", items: [
    item("Garlic Bread Plain / With Cheese", "All breads are eggless.", "350 / 425", ["veg", "eggless"]),
    item("Korean Bun", "Eggless bread.", 390, ["veg", "eggless"]),
    item("Focaccia", "Eggless bread.", 110, ["veg", "eggless"])
  ]},
  { category: "Burgers", items: [
    item("Crispy Peri Peri Paneer", "Available with multigrain or sesame buns.", 500, ["veg", "lunch", "dinner"]),
    item("Mushroom Avocado Burger", "Available with multigrain or sesame buns.", 630, ["veg", "lunch", "dinner"]),
    item("Crumb Fried Mixed Vegetables Patty", "Available with multigrain or sesame buns.", 500, ["veg", "lunch", "dinner"]),
    item("Crispy Chicken", "Available with multigrain or sesame buns.", 600, ["non-veg", "lunch", "dinner"]),
    item("Grilled Chicken Mince Patty", "With crisp lettuce, tomato and relish.", 580, ["non-veg", "lunch", "dinner"]),
    item("Piri-Piri Chicken", "Available with multigrain or sesame buns.", 580, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Appetizers", items: [
    item("Guacamole on Toast", "Guacamole toast.", 550, ["veg", "lunch", "dinner"]),
    item("Hummus on Toast", "Hummus toast.", 550, ["vegan", "veg", "lunch", "dinner"]),
    item("Indonesian Chicken Satay", "Chicken satay.", 580, ["non-veg", "lunch", "dinner"]),
    item("Crispy Chicken Tender's", "Crispy chicken tenders.", 580, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Wraps", items: [
    item("Falafel Basil Hummus Wrap", "Available in plain, whole wheat or multigrain wrap.", 490, ["vegan", "veg", "lunch", "dinner"]),
    item("Caesar Chicken Wrap", "Available in plain, whole wheat or multigrain wrap.", 520, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Sandwiches", items: [
    item("Mushroom and Cheddar with Focaccia Bread", "Made with eggless mayonnaise where used.", 490, ["veg", "lunch", "dinner"]),
    item("EATC Signature Pesto Panini Bread", "Signature pesto panini.", 610, ["veg", "lunch", "dinner"]),
    item("Healthy Roasted Vegetables with Greek Feta Cheese", "Roasted vegetables and feta.", 470, ["veg", "lunch", "dinner"]),
    item("Avocado Croissanwich", "Avocado croissanwich.", 670, ["veg", "lunch", "dinner"]),
    item("Paneer and Roasted Vegetables", "Paneer and vegetables.", 470, ["veg", "lunch", "dinner"]),
    item("Fried Chicken Mozzarella with Focaccia Bread", "Fried chicken and mozzarella.", 650, ["non-veg", "lunch", "dinner"]),
    item("Chicken Avocado", "Chicken avocado sandwich.", 650, ["non-veg", "lunch", "dinner"]),
    item("Chicken Tandoori", "Chicken tandoori sandwich.", 520, ["non-veg", "lunch", "dinner"]),
    item("Brioche Club", "Roast chicken, bacon, ham, egg, lettuce and tomato.", 680, ["non-veg", "lunch", "dinner"]),
    item("Chicken Jungli", "Onion, bell pepper, gherkin and mayo.", 520, ["non-veg", "lunch", "dinner"]),
    item("Chicken Afghani", "Chicken Afghani sandwich.", 520, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Pizzas", items: [
    item("Classic Margherita", "10 inch pizza.", 840, ["veg", "lunch", "dinner"]),
    item("Farmer Feast", "10 inch pizza.", 840, ["veg", "lunch", "dinner"]),
    item("Pesto and Burrata", "10 inch pizza.", 840, ["veg", "lunch", "dinner"]),
    item("Paneer Peri Peri", "10 inch pizza.", 840, ["veg", "lunch", "dinner"]),
    item("BBQ Chicken", "10 inch pizza.", 940, ["non-veg", "lunch", "dinner"]),
    item("Pepperoni", "10 inch pizza.", 940, ["non-veg", "lunch", "dinner"]),
    item("Tandoori Chicken", "10 inch pizza.", 940, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Pasta", items: [
    item("Veg Pasta", "Penne or spaghetti with your choice of sauce.", 685, ["veg", "lunch", "dinner"]),
    item("Chicken Pasta", "Penne or spaghetti with your choice of sauce.", 825, ["non-veg", "lunch", "dinner"]),
    item("Spaghetti Carbonara", "Classic spaghetti carbonara.", 825, ["non-veg", "lunch", "dinner"]),
    item("Gluten Free Add On", "Add on for pasta.", 115, ["gluten-free"]),
    item("Shrimp Extra Topping", "Extra topping.", 230, ["non-veg"])
  ]},
  { category: "Khao Suey", items: [
    item("Veg Khao Suey", "Khao Suey.", 685, ["veg", "lunch", "dinner"]),
    item("Non-Veg Khao Suey", "Khao Suey.", 825, ["non-veg", "lunch", "dinner"])
  ]},
  { category: "Sides", items: [
    item("Fries with Cheese Sauce", "Side order.", 350, ["veg"]),
    item("Potato Wedges", "Side order.", 295, ["vegan", "veg"]),
    item("Peri Peri Fries", "Side order.", 350, ["vegan", "veg"]),
    item("French Fries", "Side order.", 295, ["vegan", "veg"]),
    item("Creamy Mashed Potato", "Side order.", 240, ["veg"]),
    item("Hash Brown Potatoes", "Breakfast side.", 220, ["breakfast", "veg"]),
    item("Baked Beans", "Breakfast side.", 240, ["breakfast", "veg"]),
    item("Sauteed Mushrooms", "Breakfast side.", 320, ["breakfast", "veg"]),
    item("Chicken Or Pork Sausages", "Breakfast side.", 180, ["breakfast", "non-veg"]),
    item("Crisp Bacon Rashers", "Breakfast side.", 315, ["breakfast", "non-veg"]),
    item("Sliced Or Toasted Bread", "Breakfast side.", 70, ["breakfast", "veg", "eggless"])
  ]},
  { category: "Desserts", items: [
    item("Chocolate Marquise", "Gluten free dessert.", 550, ["desserts", "gluten-free", "veg"]),
    item("Banana Coconut Cake", "Dessert.", 320, ["desserts", "veg"]),
    item("Banana Walnut Cake", "Dessert.", 310, ["desserts", "veg"]),
    item("Biscoff Cheesecake", "Dessert.", 500, ["desserts", "veg"]),
    item("Brookie", "Dessert.", 280, ["desserts", "veg"]),
    item("Caramel Custard", "Dessert.", 320, ["desserts", "veg"]),
    item("Classic Tiramisu", "Dessert.", 460, ["desserts", "veg"]),
    item("Dark Chocolate Mousse", "Dessert.", 440, ["desserts", "veg"]),
    item("Ragi Cocao Bliss", "Gluten free dessert.", 470, ["desserts", "gluten-free", "veg"]),
    item("New York Chocolate", "Dessert.", 400, ["desserts", "veg"]),
    item("Apple Upside Down", "Dessert.", 320, ["desserts", "veg"]),
    item("Tres Leches", "Dessert.", 380, ["desserts", "veg"]),
    item("Double Chocolate Muffin", "Muffin.", 150, ["desserts", "veg"]),
    item("Blueberry Muffin", "Muffin.", 210, ["desserts", "veg"]),
    item("Peanut Butter Cookie", "Cookie.", 115, ["desserts", "veg"]),
    item("Oatmeal Cookie", "Cookie.", 115, ["desserts", "veg"]),
    item("Chocolate Chip Cookie", "Cookie.", 115, ["desserts", "veg"])
  ]},
  { category: "Coffee", items: [
    item("Cappuccino", "Coffee.", 295, ["coffee"]),
    item("Caffe Latte", "Coffee.", 305, ["coffee"]),
    item("Caffe Mocha", "Coffee.", 315, ["coffee"]),
    item("Decaf", "Coffee.", 285, ["coffee"]),
    item("Americano", "Coffee.", 265, ["coffee"]),
    item("Espresso / Double", "Coffee.", "210 / 260", ["coffee"]),
    item("Flat White", "Coffee.", 340, ["coffee"]),
    item("Cortado", "Coffee.", 335, ["coffee"]),
    item("Affogato", "Coffee.", 335, ["coffee"]),
    item("Iced Americano", "Coffee.", 265, ["coffee"]),
    item("Cold Coffee", "Coffee.", 315, ["coffee"]),
    item("Cold Coffee Frappe", "Coffee.", 340, ["coffee"]),
    item("Iced Mocha", "Coffee.", 315, ["coffee"]),
    item("Vietnamese Cold Coffee", "Coffee.", 335, ["coffee"]),
    item("Spanish Latte", "Coffee.", 349, ["coffee"]),
    item("Sea Salt Caramel Latte", "Coffee.", 349, ["coffee"]),
    item("Vanilla Cookies Latte", "Coffee.", 349, ["coffee"])
  ]},
  { category: "Tea", items: [
    item("Classic Assam", "Tea.", 210, []),
    item("Darjeeling", "Tea.", 210, []),
    item("Earl Grey", "Tea.", 210, []),
    item("English Breakfast", "Tea.", 210, []),
    item("Masala", "Tea.", 210, []),
    item("Green", "Plain, lemon grass or Moroccan mint.", 210, []),
    item("Lime and Lemon", "Tea.", 210, []),
    item("Chamomile", "Tea.", 210, []),
    item("Jasmine", "Tea.", 210, [])
  ]},
  { category: "Smoothies", items: [
    item("Avocado Dates and Banana", "Smoothie.", 520, ["vegan"]),
    item("Banana, Papaya and Honey", "Smoothie.", 370, []),
    item("Apple, Granola, Peanut Butter and Cinnamon", "Smoothie.", 370, []),
    item("Cashew Nuts, Dates, Berry", "Smoothie.", 370, []),
    item("Kale, Baby Spinach, Banana and Pineapple", "Smoothie.", 370, ["vegan"]),
    item("Pistachio, Vanilla Almond Milk, Banana & Spinach", "Smoothie.", 540, ["vegan"])
  ]},
  { category: "Milkshakes", items: [
    item("Avocado and Banana", "Milkshake.", 520, []),
    item("Vanilla, Strawberry and Mix Berries", "Milkshake.", 350, []),
    item("Caramel Banana / Nutella Banana", "Milkshake.", 350, []),
    item("Oreo / Chocolate Brownie", "Milkshake.", 350, []),
    item("Apple, Musk Melon and Dates", "Milkshake.", 350, [])
  ]},
  { category: "Matcha", items: [
    item("Dirty Matcha", "Matcha.", 399, []),
    item("Matcha Iced Latte", "Matcha.", 380, []),
    item("Matcha Iced Mocha", "Matcha.", 410, [])
  ]}
];

const signatureDishes = [
  ["Roast Chicken", "Roast chicken from the hot dishes menu.", "685", "NON-VEG", "assets/images/gallery-7.jpg"],
  ["EATC Signature Pesto Panini", "A signature pesto panini bread sandwich.", "610", "VEG", "assets/images/EATC-SMLPIC-1.jpg"],
  ["Mushroom Avocado Burger", "Available with multigrain or sesame buns.", "630", "VEG", "assets/images/banner-burger.jpg"],
  ["Chicken Avocado Sandwich", "Chicken avocado sandwich.", "650", "NON-VEG", "assets/images/gallery-11.jpg"],
  ["Chicken Jungli Sandwich", "Onion, bell pepper, gherkin and mayo.", "520", "NON-VEG", "assets/images/gallery-12.jpg"],
  ["Falafel Basil Hummus Wrap", "Falafel basil hummus wrap.", "490", "VEGAN", "assets/images/gallery-9.jpg"],
  ["Biscoff Cheesecake", "Dessert favourite.", "500", "VEG", "assets/images/dessert.jpg"],
  ["Classic Tiramisu", "Dessert classic.", "460", "VEG", "assets/images/gallery-18.jpg"],
  ["Cappuccino", "Coffee, any time.", "295", "", "assets/images/gallery-3.jpg"]
];

const galleryImages = Array.from({ length: 24 }, (_, index) => {
  const categories = [
    "interiors", "food", "coffee", "desserts", "outdoor", "people",
    "food", "interiors", "food", "desserts", "food", "food",
    "interiors", "outdoor", "food", "people", "desserts", "desserts",
    "coffee", "food", "interiors", "food", "outdoor", "desserts"
  ];
  return {
    src: `assets/images/gallery-${index + 1}.jpg`,
    category: categories[index],
    alt: `Eat Around The Corner ${categories[index]} photograph ${index + 1}`
  };
});

function item(name, description, price, tags = []) {
  return { name, description, price: String(price), tags };
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const header = document.querySelector("[data-header]");
const drawer = document.querySelector("[data-drawer]");
const toggle = document.querySelector("[data-menu-toggle]");
const menuBoard = document.querySelector("[data-menu-board]");
const categoryNav = document.querySelector("[data-category-nav]");
const searchInput = document.querySelector("[data-menu-search]");
const filterWrap = document.querySelector("[data-menu-filters]");
let activeFilter = "all";

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

toggle.addEventListener("click", () => {
  const open = !drawer.classList.contains("open");
  drawer.classList.toggle("open", open);
  document.body.classList.toggle("drawer-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  drawer.setAttribute("aria-hidden", String(!open));
});

drawer.addEventListener("click", event => {
  if (event.target.matches("a")) {
    drawer.classList.remove("open");
    document.body.classList.remove("drawer-open");
    toggle.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
  }
});

function renderMenu() {
  categoryNav.innerHTML = menuData.map(section => `<a href="#${slug(section.category)}">${section.category}</a>`).join("");
  menuBoard.innerHTML = menuData.map(section => `
    <section class="menu-category" id="${slug(section.category)}" data-category="${section.category.toLowerCase()}">
      <h3>${section.category}</h3>
      <div class="menu-items">
        ${section.items.map(renderMenuItem).join("")}
      </div>
    </section>
  `).join("");
  filterMenu();
}

function renderMenuItem(dish) {
  const tags = dish.tags.map(tag => `<span>${tag.replace("-", " ")}</span>`).join("");
  return `
    <article class="menu-item" data-name="${dish.name.toLowerCase()}" data-desc="${dish.description.toLowerCase()}" data-tags="${dish.tags.join(" ")}">
      <div>
        <h4>${dish.name}</h4>
        <p>${dish.description}</p>
      </div>
      <strong>₹${dish.price}</strong>
      ${tags ? `<div class="diet-tags">${tags}</div>` : ""}
    </article>
  `;
}

function filterMenu() {
  const query = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".menu-category").forEach(section => {
    let visibleInSection = 0;
    section.querySelectorAll(".menu-item").forEach(card => {
      const haystack = `${card.dataset.name} ${card.dataset.desc} ${card.dataset.tags}`;
      const matchesText = !query || haystack.includes(query);
      const matchesFilter = activeFilter === "all" || card.dataset.tags.split(" ").includes(activeFilter);
      const show = matchesText && matchesFilter;
      card.hidden = !show;
      if (show) visibleInSection += 1;
    });
    section.hidden = visibleInSection === 0;
  });
}

filterWrap.addEventListener("click", event => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;
  activeFilter = chip.dataset.filter;
  filterWrap.querySelectorAll(".chip").forEach(button => button.classList.toggle("active", button === chip));
  filterMenu();
});

document.querySelectorAll("[data-filter-link]").forEach(link => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.filterLink;
    filterWrap.querySelectorAll(".chip").forEach(button => button.classList.toggle("active", button.dataset.filter === activeFilter));
    filterMenu();
  });
});

searchInput.addEventListener("input", filterMenu);

function renderSignatures() {
  document.querySelector("[data-signatures]").innerHTML = signatureDishes.map(([name, description, price, tag, image]) => `
    <article class="dish-card reveal">
      <img src="${image}" alt="${name}" loading="lazy">
      <div>
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price-row"><strong>₹${price}</strong>${tag ? `<span class="tag">${tag}</span>` : ""}</div>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  document.querySelector("[data-gallery]").innerHTML = galleryImages.map((image, index) => `
    <button class="gallery-item reveal" type="button" data-gallery-index="${index}" data-gallery-category="${image.category}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
    </button>
  `).join("");
}

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox.querySelector("img");
let currentGalleryIndex = 0;

function openLightbox(index) {
  currentGalleryIndex = index;
  const image = galleryImages[currentGalleryIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

function shiftLightbox(direction) {
  currentGalleryIndex = (currentGalleryIndex + direction + galleryImages.length) % galleryImages.length;
  openLightbox(currentGalleryIndex);
}

document.addEventListener("click", event => {
  const galleryButton = event.target.closest("[data-gallery-index]");
  if (galleryButton) openLightbox(Number(galleryButton.dataset.galleryIndex));
});
document.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
document.querySelector("[data-lightbox-prev]").addEventListener("click", () => shiftLightbox(-1));
document.querySelector("[data-lightbox-next]").addEventListener("click", () => shiftLightbox(1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") shiftLightbox(-1);
  if (event.key === "ArrowRight") shiftLightbox(1);
});

document.querySelector("[data-gallery-filters]").addEventListener("click", event => {
  const chip = event.target.closest("[data-gallery-filter]");
  if (!chip) return;
  const filter = chip.dataset.galleryFilter;
  document.querySelectorAll("[data-gallery-filter]").forEach(button => button.classList.toggle("active", button === chip));
  document.querySelectorAll("[data-gallery-category]").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.galleryCategory !== filter;
  });
});

document.querySelectorAll("[data-demo-form]").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) status.textContent = "Thanks. This form is ready for backend integration; no booking or request has been completed yet.";
    form.reset();
  });
});

function initRevealObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}

renderSignatures();
renderMenu();
renderGallery();
initRevealObserver();
