class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  dogLikedHtml() {
    return;
  }

  getDogInnerHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <img src=${avatar} alt="">
      <div class="text">
          <h1>${name},${age}</h1>
          <p>${bio}</p>
      </div>`;
  }
}
export default Dog;
