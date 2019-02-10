class Carousel {
  constructor( c_elem ) {
    console.log('###########  inside Carousel constructor');
    this.c_elem = c_elem;

    this.c_img = c_elem.querySelectorAll('img');

    this.currentIndex = 0;

    this.c_img[this.currentIndex].style.display = 'flex';


    // need reference to left & right
    this.left_btn = this.c_elem.querySelector('.left-button');
    this.right_btn = this.c_elem.querySelector('.right-button');

    // build event listeners for left & right button divs
    this.left_btn.addEventListener('click', () => this.left() );
    this.right_btn.addEventListener('click', () => this.right() );

  }



  left() {
     console.log('inside left, I can see index', this.currentIndex);



  }

  right() {
    console.log('inside right');
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