/* ==========================================================================
   CAFE ROO - PREMIUM ROOFTOP SPECIALTY COFFEE & LOUNGE
   Complete Official Food & Drinks Showcase Logic
   ========================================================================== */

// --- Official Food & Drink Menu Data (from foodmenu.txt & drinks.txt) ---
const MENU_ITEMS = [
  // --- SIGNATURE DRINKS ---
  {
    id: 'sig-1',
    name: 'Lotus Latte',
    category: 'signatures',
    categoryLabel: 'SIGNATURE DRINK',
    priceSymbol: '₱',
    price: 290,
    rating: 4.95,
    description: 'A rich and creamy latte infused with the delicate unique flavors of lotus, offering a smooth sweet blend (Hot or Cold).',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    tag: 'Signature',
    highlights: ['Infused Lotus Flavor', 'Hot or Cold Choice', 'Velvet Smoothness']
  },
  {
    id: 'sig-2',
    name: 'Dirty Chocolate',
    category: 'signatures',
    categoryLabel: 'SIGNATURE DRINK',
    priceSymbol: '₱',
    price: 260,
    rating: 4.9,
    description: 'A bold and indulgent combination of rich choco powder and thick choco sauce, creating a perfect cocoa harmony.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller',
    highlights: ['Rich Choco Powder', 'Thick Choco Sauce', 'Indulgent Cocoa']
  },
  {
    id: 'sig-3',
    name: 'Crispy Crunch Latte',
    category: 'signatures',
    categoryLabel: 'SIGNATURE DRINK',
    priceSymbol: '₱',
    price: 260,
    rating: 4.85,
    description: 'A rich creamy latte topped with crispy, crunchy toppings that add a delightful texture and fruity strawberry depth.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    highlights: ['Crispy Crunch Topping', 'Fruity Strawberry Depth', 'Rich Creamy Latte']
  },
  {
    id: 'sig-4',
    name: 'Sakura Matcha Latte',
    category: 'signatures',
    categoryLabel: 'SIGNATURE DRINK',
    priceSymbol: '₱',
    price: 260,
    rating: 4.9,
    description: 'Beautifully crafted latte combining earthy premium Uji matcha with delicate floral notes of Japanese sakura.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular',
    highlights: ['Premium Uji Matcha', 'Japanese Sakura Blossom', 'Aromatic & Floral']
  },
  {
    id: 'sig-5',
    name: 'White Berry Yogurt',
    category: 'signatures',
    categoryLabel: 'SIGNATURE DRINK',
    priceSymbol: '₱',
    price: 260,
    rating: 4.85,
    description: 'Creamy and tangy yogurt-based beverage blended with fresh blueberries, offering a sweet antioxidant refreshment.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    highlights: ['Creamy Tangy Yogurt', 'Fresh Blueberries', 'Antioxidant Rich']
  },
  {
    id: 'sig-6',
    name: 'Jungle Lemon Mint Ade',
    category: 'signatures',
    categoryLabel: 'SIGNATURE ADE',
    priceSymbol: '₱',
    price: 260,
    rating: 4.9,
    description: 'Revitalizing tropical citrus drink infused with fresh lime, crushed ice, and cooling mint leaves.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    tag: 'Refreshing',
    highlights: ['Fresh Lime Juice', 'Crushed Cooling Mint', 'Tropical Fizz']
  },

  // --- COFFEE & ESPRESSO ---
  {
    id: 'cof-1',
    name: 'Peanut Butter Mocha Latte',
    category: 'coffee',
    categoryLabel: 'ESPRESSO',
    priceSymbol: '₱',
    price: 200,
    rating: 4.9,
    description: 'Espresso shot, rich chocolate, creamy peanut butter swirl, and velvety steamed or iced milk.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    tag: 'Chef Special',
    highlights: ['Creamy Peanut Butter', 'Rich Espresso', 'Chocolate Drizzle']
  },
  {
    id: 'cof-2',
    name: 'Oat Milk Latte',
    category: 'coffee',
    categoryLabel: 'ESPRESSO',
    priceSymbol: '₱',
    price: 190,
    rating: 4.85,
    description: 'Double shot roasted Arabica espresso balanced with smooth, naturally sweet organic oat milk.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    highlights: ['Organic Oat Milk', 'Double Arabica Shot', 'Dairy Free Option']
  },
  {
    id: 'cof-3',
    name: 'Iced Einspänner',
    category: 'coffee',
    categoryLabel: 'ESPRESSO',
    priceSymbol: '₱',
    price: 180,
    rating: 4.95,
    description: 'Chilled milk, espresso, and chocolate layer topped with a thick float of cold whipped sweet cream.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular',
    highlights: ['Thick Sweet Cream Float', 'Espresso & Chocolate', 'Vienna Classic']
  },
  {
    id: 'cof-4',
    name: 'Sea Salt Latte',
    category: 'coffee',
    categoryLabel: 'ESPRESSO',
    priceSymbol: '₱',
    price: 180,
    rating: 4.88,
    description: 'Espresso infused with house sea salt caramel, velvety milk, and sea salt cream foam.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    highlights: ['Sea Salt Caramel', 'Cream Foam', 'Sweet & Savory']
  },
  {
    id: 'cof-5',
    name: 'Caramel Macchiato',
    category: 'coffee',
    categoryLabel: 'ESPRESSO',
    priceSymbol: '₱',
    price: 180,
    rating: 4.8,
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    highlights: ['Caramel Drizzle', 'Vanilla Syrup', 'Espresso Mark']
  },

  // --- FRAPPES & SHAKES ---
  {
    id: 'frp-1',
    name: 'White Choco Java Chips',
    category: 'frappes',
    categoryLabel: 'FRAPPE',
    priceSymbol: '₱',
    price: 190,
    rating: 4.9,
    description: 'Blended white chocolate, dark chocolate chips, vanilla bean, milk, ice, and mountain of whipped cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller',
    highlights: ['White & Dark Choco Chips', 'Blended Vanilla', 'Whipped Cream']
  },
  {
    id: 'frp-2',
    name: 'Coffee Jelly Frappe',
    category: 'frappes',
    categoryLabel: 'FRAPPE',
    priceSymbol: '₱',
    price: 200,
    rating: 4.85,
    description: 'Blended coffee frappe layered with chewy homemade coffee jelly cubes and whipped cream.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    highlights: ['Chewy Coffee Jelly', 'Blended Roast Coffee', 'Whipped Topping']
  },
  {
    id: 'frp-3',
    name: 'Jeju Oat Milk Matcha Latte',
    category: 'frappes',
    categoryLabel: 'NON-COFFEE',
    priceSymbol: '₱',
    price: 230,
    rating: 4.9,
    description: 'Authentic green tea matcha from Jeju Island blended with creamy oat milk.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    tag: 'Premium',
    highlights: ['Jeju Island Matcha', 'Organic Oat Milk', 'Antioxidant Rich']
  },
  {
    id: 'frp-4',
    name: 'Fresh Mango Fruit Shake',
    category: 'frappes',
    categoryLabel: 'SHAKE',
    priceSymbol: '₱',
    price: 250,
    rating: 4.88,
    description: 'Sweet ripe Philippine mangoes blended fresh with ice and milk for a refreshing tropical treat.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
    highlights: ['Fresh Philippine Mango', '100% Real Fruit', 'Tropical Delight']
  },

  // --- ALL DAY BREAKFAST ---
  {
    id: 'brk-1',
    name: 'Cafe Roo Brunch',
    category: 'breakfast',
    categoryLabel: 'BREAKFAST',
    priceSymbol: '₱',
    price: 540,
    rating: 4.95,
    description: 'Signature rooftop breakfast platter featuring eggs, premium sausages, bacon, toasted brioche & grilled tomatoes.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    tag: 'Signature',
    highlights: ['Signature Platter', 'Eggs & Bacon', 'Toasted Brioche']
  },
  {
    id: 'brk-2',
    name: 'Beef Tapa Rice Bowl',
    category: 'breakfast',
    categoryLabel: 'BREAKFAST',
    priceSymbol: '₱',
    price: 380,
    rating: 4.9,
    description: 'Tender marinated garlic beef tapa served with fragrant garlic rice and sunny-side-up egg.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80',
    highlights: ['Marinated Beef Tapa', 'Garlic Fried Rice', 'Sunny Egg']
  },
  {
    id: 'brk-3',
    name: 'Butter Garlic Shrimp Rice Bowl',
    category: 'breakfast',
    categoryLabel: 'BREAKFAST',
    priceSymbol: '₱',
    price: 400,
    rating: 4.85,
    description: 'Plump succulent shrimp sauteed in rich garlic butter glaze served over steaming warm rice.',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80',
    highlights: ['Garlic Butter Glaze', 'Fresh Shrimp', 'Warm Rice Bowl']
  },

  // --- PIZZA & PASTA ---
  {
    id: 'piz-1',
    name: 'Combination Pizza',
    category: 'pizza',
    categoryLabel: 'PIZZA',
    priceSymbol: '₱',
    price: 675,
    rating: 4.9,
    description: 'Loaded rooftop classic pizza with pepperoni, Italian sausage, bell peppers, olives & mozzarella (S ₱675 / M ₱880).',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller',
    highlights: ['Loaded Meats & Veggies', 'Mozzarella Cheese', 'Add Cheese Crust S+₱100 / M+₱150']
  },
  {
    id: 'piz-3',
    name: 'Bulgogi Pizza',
    category: 'pizza',
    categoryLabel: 'PIZZA',
    priceSymbol: '₱',
    price: 575,
    rating: 4.9,
    description: 'Sweet and savory Korean beef bulgogi, caramelized onions, sesame glaze and melted cheese (S ₱575 / M ₱690).',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80',
    highlights: ['Korean Beef Bulgogi', 'Caramelized Onions', 'Sesame Glaze']
  },
  {
    id: 'pas-1',
    name: 'Cream Truffle Mushroom Pasta',
    category: 'pizza',
    categoryLabel: 'PASTA',
    priceSymbol: '₱',
    price: 580,
    rating: 4.95,
    description: 'Earthy black truffle cream sauce, sauteed wild mushrooms, fettuccine & parmesan (Solo ₱580 / Sharing ₱1,100).',
    image: 'https://images.unsplash.com/photo-1770820819179-3b4214e142e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JlYW0lMjB0cnVmZmxlfGVufDB8fDB8fHww',
    tag: 'Chef Special',
    highlights: ['Black Truffle Cream', 'Wild Mushrooms', 'Solo ₱580 / Sharing ₱1100']
  },
  {
    id: 'pas-2',
    name: 'Seafood Crab Paste Pasta',
    category: 'pizza',
    categoryLabel: 'PASTA',
    priceSymbol: '₱',
    price: 460,
    rating: 4.9,
    description: 'Rich savory aligue (crab paste) sauce with sauteed shrimp, calamari and chili garlic oil (Solo ₱460 / Sharing ₱900).',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    highlights: ['Rich Crab Aligue', 'Shrimp & Calamari', 'Chili Garlic Touch']
  },

  // --- MAINS & PLATTERS ---
  {
    id: 'main-1',
    name: 'Crispy Pata',
    category: 'mains',
    categoryLabel: 'MAIN',
    priceSymbol: '₱',
    price: 900,
    rating: 4.95,
    description: 'Golden deep-fried pork leg with crackling crispy skin and tender juicy meat, served with soy-vinegar dip.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller',
    highlights: ['Crackling Skin', 'Juicy Pork Leg', 'Spicy Vinegar Dip']
  },
  {
    id: 'main-2',
    name: 'Beef Salpicao',
    category: 'mains',
    categoryLabel: 'MAIN',
    priceSymbol: '₱',
    price: 550,
    rating: 4.9,
    description: 'Tender beef tenderloin cubes sauteed in garlic, butter, Worcestershire sauce & toasted garlic chips.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
    highlights: ['Beef Tenderloin', 'Garlic Butter Glaze', 'Garlic Chips']
  },
  {
    id: 'plt-1',
    name: 'Cheese Platter',
    category: 'mains',
    categoryLabel: 'PLATTER',
    priceSymbol: '₱',
    price: 1060,
    rating: 4.95,
    description: 'Luxury artisanal cheese board featuring Brie, Gouda, Cheddar, cured meats, nuts, crackers & honey.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    highlights: ['Assorted Fine Cheeses', 'Cured Charcuterie', 'Crackers & Honey']
  },

  // --- BAR CHOW ---
  {
    id: 'bar-1',
    name: 'Buffalo Wings',
    category: 'barchow',
    categoryLabel: 'BAR CHOW',
    priceSymbol: '₱',
    price: 560,
    rating: 4.9,
    description: 'Crispy fried chicken wings tossed in tangy spicy cayenne buffalo glaze served with dip.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller',
    highlights: ['Crispy Wings', 'Spicy Buffalo Glaze', 'Ranch Dip']
  },
  {
    id: 'bar-2',
    name: 'Mojos con Nachos',
    category: 'barchow',
    categoryLabel: 'BAR CHOW',
    priceSymbol: '₱',
    price: 460,
    rating: 4.8,
    description: 'Crispy potato mojos layered with tortilla chips, melted cheese, beef & jalapeños.',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80',
    highlights: ['Potato Mojos & Nachos', 'Melted Cheese', 'Jalapeño Crunch']
  },
  {
    id: 'bar-4',
    name: 'Truffle Fries',
    category: 'barchow',
    categoryLabel: 'BAR CHOW',
    priceSymbol: '₱',
    price: 300,
    rating: 4.9,
    description: 'Shoestring french fries tossed in white truffle oil, sea salt and grated parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1639744091981-2f826321fae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1ZmZsZSUyMGZyaWVzfGVufDB8fDB8fHww',
    highlights: ['White Truffle Oil', 'Grated Parmesan', 'Crispy Shoestring']
  }
];

// --- Authentic Gallery Photos ---
const GALLERY_ITEMS = [
  { id: 1, src: 'public/gallery/p1.jpg', title: 'Rooftop Lounge Seating & Ambiance', category: 'lounge' },
  { id: 2, src: 'public/gallery/p2.jpg', title: 'Sunset Views & Cozy Corners', category: 'views' },
  { id: 3, src: 'public/gallery/p3.jpg', title: 'Handcrafted Latte Art Bar', category: 'coffee' },
  { id: 4, src: 'public/gallery/p4.jpg', title: 'Artisanal Brewing Station', category: 'coffee' },
  { id: 5, src: 'public/gallery/p5.jpg', title: 'Sage Tile Decor & Neon Vibe', category: 'lounge' },
  { id: 6, src: 'public/gallery/p6.jpg', title: 'Fresh Baked Pastry Display', category: 'coffee' },
  { id: 7, src: 'public/gallery/p7.jpg', title: 'Rooftop Sunset Gathering', category: 'views' },
  { id: 8, src: 'public/gallery/p8.jpg', title: 'Evening Ambient Glow', category: 'lounge' },
  { id: 9, src: 'public/gallery/p9.jpg', title: 'Signature Drink Tasting', category: 'coffee' }
];

let currentLightboxIndex = 0;

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initScrollSpy();
  initMobileNav();
  renderMenuItems('all');
  initCategoryTabs();
  initSearch();
  renderGallery('all');
  initGalleryTabs();
  initDetailsModal();
  initLightboxModal();
  initReservationForm();
});

/* --- Header Scroll & ScrollSpy --- */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggleBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

/* --- Menu Render & Filter --- */
function renderMenuItems(category = 'all', searchQuery = '') {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  grid.classList.add('fade-out');

  setTimeout(() => {
    let filtered = MENU_ITEMS;

    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--clr-gray-500);">
          <i class="fas fa-mug-hot" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
          <p>No coffee, drinks or dishes match your search. Try another query or category!</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map((item, idx) => `
        <div class="menu-card" onclick="openDetailsModal('${item.id}')" style="animation-delay: ${idx * 0.04}s;">
          <img src="${item.image}" alt="${item.name}" class="card-bg-img" loading="lazy">
          <span class="card-category-badge">${item.categoryLabel}</span>
          <span class="card-price-badge">${item.priceSymbol}${item.price.toLocaleString()}</span>
          <div class="card-gradient-overlay">
            <h3 class="card-title-serif">${item.name}</h3>
            <p class="card-short-desc">${item.description}</p>
            <div class="card-notes-action">
              <span><i class="fas fa-star" style="color: #f59e0b;"></i> ${item.rating}</span>
              <span>View Details <i class="fas fa-arrow-right"></i></span>
            </div>
          </div>
        </div>
      `).join('');
    }

    grid.classList.remove('fade-out');
  }, 180);
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.dataset.category;
      const searchVal = document.getElementById('menu-search-input')?.value || '';
      renderMenuItems(category, searchVal);
    });
  });
}

function initSearch() {
  const input = document.getElementById('menu-search-input');
  if (input) {
    input.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.tab-btn.active');
      const category = activeTab ? activeTab.dataset.category : 'all';
      renderMenuItems(category, e.target.value);
    });
  }
}

/* --- Menu Item Details Modal --- */
function openDetailsModal(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const modalImg = document.getElementById('details-item-img');
  const modalTitle = document.getElementById('details-item-title');
  const modalPrice = document.getElementById('details-item-price');
  const modalDesc = document.getElementById('details-item-desc');
  const highlightsContainer = document.getElementById('details-item-highlights');

  if (modalImg) modalImg.src = item.image;
  if (modalTitle) modalTitle.textContent = item.name;
  if (modalPrice) modalPrice.textContent = `${item.priceSymbol}${item.price.toLocaleString()}`;
  if (modalDesc) modalDesc.textContent = item.description;

  if (highlightsContainer && item.highlights) {
    highlightsContainer.innerHTML = item.highlights.map(h => `
      <span class="chip-btn selected" style="cursor: default; font-size: 0.8rem;">
        <i class="fas fa-check-circle"></i> ${h}
      </span>
    `).join('');
  }

  const modal = document.getElementById('item-details-modal');
  if (modal) modal.classList.add('open');
}

function closeDetailsModal() {
  const modal = document.getElementById('item-details-modal');
  if (modal) modal.classList.remove('open');
}

function initDetailsModal() {
  const modal = document.getElementById('item-details-modal');
  const closeBtn = document.getElementById('details-modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeDetailsModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDetailsModal();
    });
  }
}

/* --- Authentic Photo Gallery & Lightbox --- */
function renderGallery(filter = 'all') {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.classList.add('fade-out');

  setTimeout(() => {
    let filtered = GALLERY_ITEMS;
    if (filter !== 'all') {
      filtered = filtered.filter(item => item.category === filter);
    }

    grid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item" onclick="openLightbox(${item.id - 1})" style="animation-delay: ${idx * 0.05}s;">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <h4 class="gallery-title">${item.title}</h4>
          <span class="gallery-category">${item.category}</span>
        </div>
      </div>
    `).join('');

    grid.classList.remove('fade-out');
  }, 180);
}

function initGalleryTabs() {
  const tabs = document.querySelectorAll('.gallery-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGallery(tab.dataset.galleryFilter);
    });
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('open');
}

function updateLightboxContent() {
  const item = GALLERY_ITEMS[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  if (img) img.src = item.src;
  if (caption) caption.textContent = `${item.title} (${currentLightboxIndex + 1} of ${GALLERY_ITEMS.length})`;
}

function initLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      updateLightboxContent();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_ITEMS.length;
      updateLightboxContent();
    });
  }
}

/* --- Table Reservation Form Handling --- */
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('res-guests').value;
    const area = document.getElementById('res-area').value;

    const resId = 'ROO-' + Math.floor(100000 + Math.random() * 900000);

    alert(`✨ Table Reserved Successfully!\n\nConfirmation ID: ${resId}\nGuest: ${name}\nDate: ${date} at ${time}\nParty Size: ${guests} Guests\nSeating: ${area}\n\nWe look forward to welcoming you at CAFE ROO Rooftop Lounge!`);

    form.reset();
  });
}
