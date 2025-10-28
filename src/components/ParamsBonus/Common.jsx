import { useParams } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const Common = () => {
  const { page, showBtn: btn } = useParams();   
  return (
    <div>
      {page === "about" && <About></About>}
      {page === "contact" && <Contact></Contact>}

      {btn && <button className="btn">Subscribe us</button>}
    </div>
  );
};

export default Common;
