import dogs from './data.js';
import Dog from './dog.js';

let dog = new Dog(dogs[0]);
let count = 0;

function dogToDisplay() {
  if (count < dogs.length) {
    return new Dog(dogs[count]);
  } else if (count >= dogs.length) {
    return (document.querySelector(
      '#dog'
    ).innerHTML = `<div class='no-more-dogs'>
                  <h1 >Sorry, there are no more dogs in your area.</h1>
                   </div>`);
  }
}

function likeOrDislike(userChoice) {
  count++;
  dog.hasBeenSwiped = true;
  dog.hasBeenLiked = userChoice === 'like' ? true : false;
  render();
  setTimeout(() => {
    dog = dogToDisplay();
    render();
  }, 800);
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

render();
