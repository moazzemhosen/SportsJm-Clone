import { useNavigate } from "react-router-dom";

import styles from "./orderplace.module.css";

export const Orderplace = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };
  return (

      <div className={styles.card}>
        <div className={styles.gap}></div>
        <div className={styles.title}> Thank you for your order! </div>
        <div>
          {" "}
          <button className={styles.btn} onClick={returnHome}>
            {" "}
            Go To Home{" "}
          </button>
        </div>
      </div>

  );
};
