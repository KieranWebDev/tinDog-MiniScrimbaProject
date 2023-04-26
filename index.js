import dogs from './data.js';
import Dog from './dog.js';

console.log(dogs);

// const rex = new Dog(dogs[0]);
// const bella = new Dog(dogs[1]);
// const teddy = new Dog(dogs[2]);

let dog = new Dog(dogs[0]);
// let dogArray = ['rex', 'bella', 'teddy'];

let count = 0;

function dogToDisplay() {
  if (count >= dogs.length) {
    console.log('no more dogs');
    return (document.querySelector(
      '#dog'
    ).innerHTML = `<div class='no-more-dogs'><h1 >Sorry, there are no more dogs in your area.</h1></div>`);
  } else {
    return new Dog(dogs[count]);
  }

  // let dog = new Dog(dogs[count]);
  // return (dog = new Dog(dogs[count]));
  //   return dog.getDogInnerHtml();
}
function likeOrDislike(userChoice) {
  count++;
  dog.hasBeenSwiped = true;
  dog.hasBeenLiked = userChoice === 'like' ? true : false;
  render();
  setTimeout(() => {
    dog = dogToDisplay();
    render();
  }, 1000);
}

function render() {
  document.querySelector('#dog').innerHTML = dog.getDogInnerHtml();
}

document
  .querySelector('.like')
  .addEventListener('click', () => likeOrDislike('like'));
document
  .querySelector('.dislike')
  .addEventListener('click', () => likeOrDislike('dislike'));

// rex.getDogInnerHtml()
render();
