import Footer from "../footer";
import Header from "../header";
import "./style.scss";

function PageWrapper({ children, className }) {
  return (
    <div className={`page-wrapper ${className}`}>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
