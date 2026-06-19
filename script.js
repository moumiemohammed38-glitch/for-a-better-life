document.addEventListener('DOMContentLoaded', () => {
  
  const menuBtn = document.getElementById('menuBtn');
  const searchBtn = document.getElementById('searchBtn');
  const tagPills = document.querySelectorAll('.tag-pill');
  const productCards = document.querySelectorAll('.product-card');
  const localImages = document.querySelectorAll('.local-img');

  localImages.forEach(img => {
    img.addEventListener('error', function() {
      console.warn(`[Asset Warning]: Failed to load local image at: ${this.src}. Reverting to low-fi wireframe placeholder.`);
      
      const container = this.parentElement;
      
      this.remove();
      
      const placeholder = document.createElement('div');
      placeholder.className = 'cross-lines';
      container.appendChild(placeholder);
    });
  });

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('[System Context]: Open Main Side Draw-Navigation Panel.');
  });

  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('[System Context]: Focus Universal Application Search Interface.');
  });

  tagPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const tagId = pill.getAttribute('data-tag');
      
      tagPills.forEach(t => t.classList.remove('active'));
      pill.classList.add('active');
      
      console.log(`[Data Query]: Filtering view maps via Tag ID: ${tagId}`);
    });
  });

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const productId = card.getAttribute('data-product-id');
      console.log(`[Navigation Routing]: Routing layout context to Detail View for Product Key: ${productId}`);
    });
  });

});