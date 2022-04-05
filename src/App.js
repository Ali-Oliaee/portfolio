import Footer from "./components/footer";
import Header from "./components/header";
import MainRouter from "./router";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
