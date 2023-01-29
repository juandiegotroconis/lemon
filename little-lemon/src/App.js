import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Nav from "./Pages/Nav";

function App() {
  const sections = [
    "home",
    "about",
    "menu",
    "reservations",
    "order online",
    "login",
  ];
  return (
    <div className='App'>
      <Nav sections={sections} />
      <Header />
      <Main />
      <Footer sections={sections} />
    </div>
  );
}

export default App;
