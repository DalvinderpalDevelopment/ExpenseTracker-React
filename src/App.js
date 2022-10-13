import "./assets/css/App.css";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  return (
    <>
      <Header />
      <Expenses />
      <Footer />
    </>
  );
};

export default App;
