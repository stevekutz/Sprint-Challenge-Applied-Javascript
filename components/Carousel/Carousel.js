class Carousel {
  constructor( carouselElement ) {
    console.log('###########  inside Carousel constructor');
    this.carouselElement = carouselElement;
    console.log('carouselElement is ', this.carouselElement);

    this.carouselImages = carouselElement.querySelectorAll('img');
    console.log('this carousel images  ', this.carouselImages);


    console.log('length of this.carouseImages is ', this.carouselImages.length);

    this.currentIndex = 0;
    this.length = this.carouselImages.length - 1;
    this.currentImage = this.carouselImages[this.currentIndex];
    this.currentImage.style.display = 'flex';


    // need reference to left & right
    this.left_btn = this.carouselElement.querySelector('.left-button');
    this.right_btn = this.carouselElement.querySelector('.right-button');

    // build event listeners for left & right button divs
    this.left_btn.addEventListener('click', () => this.left() );
    this.right_btn.addEventListener('click', () => this.right() );

  }



  left() {
    this.currentIndex === 0
      ? this.currentIndex = this.carouselImages.length - 1
      : this.currentIndex = this.currentIndex - 1;

    console.log('inside of left, currentIndex changed to ', this.currentIndex);

    this.showImage();

  }

  right() {
    this.currentIndex === this.length
      ? this.currentIndex = 0
      : this.currentIndex = this.currentIndex + 1;

    console.log('inside of right, currentIndex changed to ', this.currentIndex);

    this.showImage();
  }

  showImage() {
    this.currentImage.style.display = 'none';
    this.currentImage = this.carouselImages[this.currentIndex];
    this.currentImage.style.display = 'flex';

    console.log(this.currentImage);
    // this.currentImage.style.transition;
  }

}

let carouselDOM = document.querySelector('.carousel');
//console.log('~~~~~~~~~~~  carousel gives back ', carouselDOM);


let carousel = new Carousel(carouselDOM);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/