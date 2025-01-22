function formatMyDate(value, locale = 'en-GB') {
    return new Date(value).toLocaleDateString(locale);
}

const timestamp = '2021-09-01T15:21:39.862Z';
console.log('Timestamp:', timestamp);
console.log('Formatted date:', formatMyDate(timestamp));

document.querySelectorAll('.carouselContainer').forEach((carouselContainer) => {
    const carousel = carouselContainer.querySelector('.reel');
    const prevBtn = carouselContainer.querySelector('.prevBtn');
    const nextBtn = carouselContainer.querySelector('.nextBtn');
    const items = Array.from(carousel.querySelectorAll('.card'));
    const itemWidth = items[0].offsetWidth;
  
    // Button click event listeners
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: -itemWidth,
        behavior: 'smooth'
      });
      updateFadeClasses();
      updateButtonVisibility();
    });
  
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: itemWidth,
        behavior: 'smooth'
      });
      updateFadeClasses();
      updateButtonVisibility();
    });
  
    // Function to check if an item is fully visible
    function isFullyVisible(item) {
      const rect = item.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <= window.innerWidth &&
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      );
    }
  
    // Function to update the fade classes
    function updateFadeClasses() {
      const scrollLeft = carousel.scrollLeft;
      const containerRect = carousel.getBoundingClientRect();
  
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemLeft = rect.left - containerRect.left + scrollLeft;
        const itemRight = itemLeft + rect.width;
  
        // Check if the item is outside the container on the left side
        if (itemLeft < scrollLeft) {
          item.classList.add('fade');
        } else {
          item.classList.remove('fade');
        }
  
        // Check if the item is outside the container on the right side
        if (itemRight > scrollLeft + containerRect.width) {
          item.classList.add('fade');
        } else {
          item.classList.remove('fade');
        }
      });
    }
  
    // Function to update the button visibility
    function updateButtonVisibility() {
      const scrollLeft = carousel.scrollLeft;
      const containerWidth = carousel.offsetWidth;
      const scrollableWidth = carousel.scrollWidth;
  
      prevBtn.style.display = scrollLeft === 0 ? 'none' : 'inline-block';
      nextBtn.style.display = scrollLeft + containerWidth >= scrollableWidth ? 'none' : 'inline-block';
    }
  
    // Initial setup
    updateFadeClasses();
    updateButtonVisibility();
  
    // Add event listeners for scrolling
    carousel.addEventListener('scroll', () => {
      updateFadeClasses();
      updateButtonVisibility();
    });
  });