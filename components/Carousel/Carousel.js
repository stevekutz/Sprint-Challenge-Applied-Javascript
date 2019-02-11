class Carousel {
  constructor( carouselElement ) {
    console.log('###########  inside Carousel constructor');
    this.carouselElement = carouselElement;
    console.log('carouselElement is ', this.carouselElement);

    this.carouselImages = carouselElement.querySelectorAll('img');
    console.log('this carousel images  ', this.carouselImages);

    // create object for each radio button
    this.inputs = document.querySelectorAll('input');
    console.log('inputs NodeList is  ', this.inputs);
    this.inputs.forEach(input => {
      console.log('input is ', input);
      new CarouselRadioButton(input);


    } );


    console.log('length of this.carouseImages is ', this.carouselImages.length);

    this.currentIndex = 0;
    this.maxIndex = this.carouselImages.length - 1;
    this.currentImage = this.carouselImages[this.currentIndex];
    this.currentImage.style.display = 'flex';



    // need reference to left & right
    this.left_btn = this.carouselElement.querySelector('.left-button');
    this.right_btn = this.carouselElement.querySelector('.right-button');

    // build event listeners for left & right button divs
    this.left_btn.addEventListener('click', () => this.left() );
    this.right_btn.addEventListener('click', () => this.right() );




    this.selectedRadioButton();


   // this.inputs.forEach(input => console.log (`the value of image ${input.dataset.img} is`, input.checked ));


  }



  left() {
     this.currentIndex === 0
             ? this.currentIndex = this.maxIndex
             : this.currentIndex = this.currentIndex - 1;

    console.log('inside of left, currentIndex changed to ', this.currentIndex);

    this.showImage();

  }

  right() {
      this.currentIndex === this.maxIndex
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
    // this.currentImage.style.transition = 'opacity 2s';
  }


  selectedRadioButton() {
    // get NodeList of all input elements
    this.inputs = document.querySelectorAll('input');

    // have to build logic to ony select one radio button, this is fun!
    // but may be easier with classes?




    // find checked
    this.inputs.forEach(input => {
      if(input.checked) {
        console.log(input.dataset.img);
        this.currentIndex = input.dataset.img;
      }

    });

    // toggle all other radio buttons

    this.showImage();

  }

}

class CarouselRadioButton {
  constructor(button) {

    this.radioButton = button;
    console.log('button passed in is ', this.radioButton);

    this.data = this.radioButton.dataset.img;
    console.log('this.data is img ', this.data );

    this.radioButton.addEventListener('click', () => this.checked() );
  }
   checked() {
      console.log(`radio button ${this.data} was clicked`);
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