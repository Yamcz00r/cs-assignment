class Slider {
  constructor(images, parentContainer) {
    this.images = images;
    this.parentContainer = parentContainer;
    this.activeIndex = 0;
    this.parentWidth = this.parentContainer.clientWidth;
  }
  // Images will be provided as paths in system
  createSlider() {
    this.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      img.id = index;
      img.alt = "Polska";
      img.classList.add("carousel_img");
      this.parentContainer.append(img);
    });
  }

  updateSlider() {
    this.parentContainer.style.transform = `translateX(-${
      this.parentWidth * this.activeIndex
    }px)`;
  }

  next() {
    if (this.activeIndex >= this.images.length - 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex++;
    }
    console.log(this.activeIndex);
    this.updateSlider();
  }

  back() {
    if (this.activeIndex <= 0) {
      this.activeIndex = this.images.length - 1; // If user comes to an first image and press the back arrow, it will scroll up to last element
    } else {
      this.activeIndex--;
    }
    console.log(this.activeIndex);
    this.updateSlider();
  }
}

const container = document.getElementById("parent");
const counterText = document.getElementById("counter");
const modal = document.getElementById("modal");
const images = document.querySelectorAll(".image");
const nextBtn = document.getElementById("forward");
const backBtn = document.getElementById("back");
const closeBtn = document.getElementById("close");
const slider = new Slider(
  [
    "./images/polska1.jpg",
    "./images/polska2.jpg",
    "./images/polska3.jpg",
    "./images/polska4.jpg",
    "./images/polska5.jpg",
    "./images/polska6.jpg",
  ],
  container
);

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    slider.createSlider();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  modal.classList.add("hidden");
}); //Some work around to get this working i dont know why but its working

nextBtn.addEventListener("click", () => {
  
  slider.next();
  counterText.textContent = `${slider.activeIndex + 1} / ${
    slider.images.length
  }`;
});

backBtn.addEventListener("click", () => {
  
  slider.back();
  counterText.textContent = `${slider.activeIndex + 1} / ${
    slider.images.length
  }`;
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});

counterText.textContent = `${slider.activeIndex + 1} / ${slider.images.length}`;
