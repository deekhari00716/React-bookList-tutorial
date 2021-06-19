import React from 'react'

const Book = ({ image, title, author, price }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);

    alert("Heellooo!! You have clicked");
  };
  const mouseHover = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={image} alt="" />
      <h2 onMouseOver={mouseHover}>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
      <p>${price}</p>
      <button type="button" onClick={clickHandler}>
        Post
      </button>
    </article>
  );
};

export default Book
