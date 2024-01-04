class Silder {
    constructor(images, parentContainer) {
        this.images = images;
        this.parentContainer = parentContainer;
        this.activeIndex = 0;
    }
    // Images will be provided as paths in sys
    renderImage(index) {
        const img = document.createElement('img');
        img.src = this.images[index];
        img.id = this.images[index];
        img.alt = 'Polska';
        this.parentContainer.append(img);
    }

    next() {
        let previousIndex = this.activeIndex;
        if (this.activeIndex > this.images.length - 1) {
            this.activeIndex = 0
        } else {
            this.activeIndex++
        }
        this.renderImage(this.activeIndex)
    }

    back() {
        if (this.activeIndex < 0) {
            this.activeIndex = this.images.length - 1; // If user comes to an first image and press the back arrow, it will scroll up to last element
        } else {
            this.activeIndex--;
        }
        this.renderImage(this.activeIndex);
    }
}
const container = document.getElementById('parent'); 
const nextBtn = document.getElementById('forward');
const backBtn = document.getElementById("back");
const slider = new Silder(['./images/polska1.jpg', './images/polska2.jpg', './images/polska3.jpg', './images/polska4.jpg', './images/polska5.jpg', './images/polska6.jpg'], container);
slider.renderImage(0);

nextBtn.addEventListener('click', () => {
    slider.next();
})

