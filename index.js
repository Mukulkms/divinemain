const imageContainer = document.getElementById('imageContainer');
    const textHeading = document.getElementById('textHeading');
    const textContent = document.getElementById('textContent');

    const imageContent = [
      { heading: 'YouTube', content: 'Mukul' },
      { heading: 'Ironman', content: 'Utkarsh' },
      { heading: 'Name', content: 'Content' }
    ];

    imageContainer.addEventListener('scroll', function() {
      const currentImageIndex = Math.floor(this.scrollTop / this.clientHeight);
      textHeading.innerHTML = `<p>${imageContent[currentImageIndex].heading}</p>`;
      textContent.innerHTML = `<p>${imageContent[currentImageIndex].content}</p>`;
    });

    document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonal-main");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let scrollAmount = 0;
  const scrollStep = 300; // Adjust this value to control the scroll step

  // Function to scroll the slider to the left
  function scrollLeft() {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  // Function to scroll the slider to the right
  function scrollRight() {
    scrollAmount += scrollStep;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0; // Reset scrollAmount to 0 when reaching the end
    }
    slider.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth"
    });

    // Adjust scrollAmount to ensure last slider item is fully visible
    if (scrollAmount === 0) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
      slider.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }

  // Event listeners for the previous and next buttons
  prevButton.addEventListener("click", scrollLeft);
  nextButton.addEventListener("click", scrollRight);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonal-main");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let scrollAmount = 0;
  const scrollStep = 900; // Adjust this value to control the scroll step

  // Function to scroll the slider to the left
  function scrollLeft() {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  // Function to scroll the slider to the right
  function scrollRight() {
    scrollAmount += scrollStep;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0; // Reset scrollAmount to 0 when reaching the end
    }
    slider.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: "smooth"
    });

    // Adjust scrollAmount to ensure last slider item is fully visible
    if (scrollAmount === 0) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
      slider.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }

  // Event listeners for the previous and next buttons
  prevButton.addEventListener("click", scrollLeft);
  nextButton.addEventListener("click", scrollRight);
});





    