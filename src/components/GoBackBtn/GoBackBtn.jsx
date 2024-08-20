import { useNavigate } from "react-router-dom";
import css from "./GoBackBtn.module.css";

const GoBackBtn = ({ path, children }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (path) {
      navigate(path);
    } else {
      navigate("/movies");
    }
  };

  return (
    <button onClick={handleGoBack} className={css.link}>
      {children}
    </button>
  );
};

export default GoBackBtn;
