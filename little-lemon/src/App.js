import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

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
      Homepage
      <Header />
      <Nav sections={sections} />
      <Main />
      <Footer sections={sections} />
    </div>
  );
}

export default App;
