import React from "react";
import Card from "./Components/Card";
import "./Main.css";

function Main() {
  const specials = [
    {
      img: require("../icons_assets/greek salad.jpg"),
      title: "Greek salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      img: require("../icons_assets/bruschetta.png"),
      title: "Bruschetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      img: require("../icons_assets/lemon dessert.jpg"),
      title: "Lemon dessert",
      price: 5.99,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <main className='main'>
      <div className='title'>
        <p className='cta-text'>This weeks specials!</p>
        <button className='button'>Online menu</button>
      </div>
      <div className='content'>
        {specials.map((dish) => {
          return (
            <Card
              img={dish.img}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
