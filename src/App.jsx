import "./App.css";
import ContactForm from "./Components/ContactForm";
import Content from "./Components/Content";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Content/>
        <ContactForm/>
      </main>
    </>
  );
}

export default App;
