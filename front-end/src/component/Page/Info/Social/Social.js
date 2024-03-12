import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import CV from "./CV";
import "./Social.css"

const Social = () => {
  return (
    <div className="social">
      <div class="social-buttons">
        <Link
          to="/#"
          class="social-button social-button--facebook"
          aria-label="Facebook"
        >
          <i class="fab fa-facebook-f"></i>
        </Link>
        <a
          href="#"
          class="social-button social-button--github"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
      <CV />
    </div>
  );
};

export default Social;
