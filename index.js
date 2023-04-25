import dogs from './data.js';
import Dog from './dog.js';

console.log(dogs);

const rex = new Dog(dogs[0]);
const bella = new Dog(dogs[1]);
const teddy = new Dog(dogs[2]);

let dogArray = ['rex', 'bella', 'teddy'];

let count = 0;

function dogToDisplay() {
  console.log(count);
  let dog = new Dog(dogs[count]);
  return (dog = new Dog(dogs[count]));
  //   return dog.getDogInnerHtml();
}
function like() {
  count++;
  dog.hasBeenSwiped = true;
  dog.hasbeenLiked = true;
  render();
  dog.dog = dogToDisplay();
}
let dog = dogToDisplay();
function render() {
  document.querySelector('#dog').innerHTML = dog.getDogInnerHtml();
}

document.querySelector('.like').addEventListener('click', like);

// rex.getDogInnerHtml()
render();
