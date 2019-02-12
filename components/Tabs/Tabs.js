//  JUST for FUN

const dateParams = {month: 'long', day: 'numeric', year: 'numeric' };
let getTheDate  = () => new Date().toLocaleDateString( 'en-US', dateParams);


const dateInfo = document.querySelector('.date_ME');
dateInfo.innerHTML = getTheDate().toUpperCase();



class TabLink {
  constructor(tabElement) {
    console.log('!!!!!!!! inside TabLink');

    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log('each tabElement is', this.tabElement);

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    // console.log(`this is tab  ${this.tabData}`);

    // <- Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`  .card[data-tab = '${this.tabData}' ] `);
    }

    // Each data-tab group is now represented !!!
    // console.log('!!!!!!!!!!!! this.cards is   ', this.cards);



    //* <- Delete this comment block when you work on the if statement */

    // Map over the newly converted NodeList we just created in our if statement above.
    // Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => {

      // console.log(`    giving ${card} to TabCard`);    //  NOTE: this doesn't console template literal
      console.log(`$$$$$$  giving this to TabCard`, card);   // nice !!! I see what we pass

      return new TabCard(card);    // WRITE    I will always return something from map   1000x
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab() );
  }

  selectTab(){
    //    console.log('INSIDE selectTab() !!!!!!!!!!   ');

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    console.log('****  tabs NodeList is ', tabs);

    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab') );
    console.log('****  AFTER removal ******     tabs NodeList is ', tabs);

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    console.log('@@@@@    cards NodeList is ', cards);

    // Iterate through the NodeList setting the display style of each one to 'none'
    cards.forEach(card => card.style.display = 'none');

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
    console.log('ACTIVE TAB IS ', this.tabElement);   // sweeet

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class.
    // Just un-comment the code and study what is happening here.
    // we SHOULD just be adding display: flex

    this.cards.forEach(card => card.selectCard() );

    // console.log('$$$$$$$$$$$$     this.cards is NOW', this.cards);
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference

    this.cardElement = cardElement;

    //  console.log(`             *********** TabCard  will take care of that data from `, this.cardElement);

  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // console.log('   !!!!!!!!!!!!  WE ARE INSIDE   selectCard() ');

    this.cardElement.style = 'display: flex';

  }

}


// START HERE:

//- Select all classes named ".tab" and assign that value to the tabs variable

//- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

//- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter


let tabs = document.querySelectorAll('.tab');
[...tabs].forEach(tab => {

    // console.log('the tab we pass to TabLink  will be', tab);
    new TabLink(tab)

  }
);