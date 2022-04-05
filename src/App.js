import Footer from "./components/footer";
import Header from "./components/header";
import MainRouter from "./router";
import i18n from "i18next";

const App = () => {
  return (
    <div className="App" dir={i18n.dir()}>
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
