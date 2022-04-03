import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainRouter from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

//https://coolors.co/palette/000000-14213d-fca311-e5e5e5-ffffff
