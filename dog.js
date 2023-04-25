class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  dogLikedHtml() {
    const liked = `<img src="./images/badge-like.png" alt="" class="like-dislike-badge">`;
    const disliked = `<img src="./images/badge-nope.png" alt="" class="like-dislike-badge">`;

    if (this.hasBeenSwiped && this.hasBeenLiked) {
      return liked;
    } else if (this.hasBeenSwiped && !this.hasBeenLiked) {
      return disliked;
    } else {
      return '';
    }
  }

  getDogInnerHtml() {
    const { name, avatar, age, bio } = this;
    let badge = this.dogLikedHtml();
    return `
      <img src=${avatar} alt="">
${badge}
      <div class="text">
          <h1>${name},${age}</h1>
          <p>${bio}</p>
      </div>`;
  }
}
export default Dog;
