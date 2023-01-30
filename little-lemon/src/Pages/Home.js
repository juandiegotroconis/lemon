import React from "react";
import Specials from "./Components/Specials";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import About from "./Components/About";
import Customers from "./Components/Customers";

function Home() {
  const sections = [
    {
      name: "home",
      url: "home",
    },
    {
      name: "about",
      url: "about",
    },
    {
      name: "menu",
      url: "menu",
    },
    {
      name: "reservations",
      url: "reservations",
    },
    {
      name: "order online",
      url: "order-online",
    },
    {
      name: "login",
      url: "login",
    },
  ];
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
  const customers = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Excellent",
    },
    {
      name: "Mike Johnson",
      rating: 4,
      comment: "Great experience",
    },
    {
      name: "Rachel Green",
      rating: 5,
      comment: "Outstanding",
    },
  ];

  return (
    <div className='Home'>
      <Nav sections={sections} />
      <Header />
      <Specials specials={specials} />
      <Customers reviews={customers} />
      <About />
      <Footer sections={sections} />
    </div>
  );
}

export default Home;
