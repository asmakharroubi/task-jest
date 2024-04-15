import React from "react";
import AddMovie from "./AddMovie";
import styles from "./NavCom.module.css";

const NavCom: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className={styles.navList}>
          <h1 style={{ marginLeft: "20px" }}>Movie List</h1>
          <li>
            <a>Home</a>
          </li>
          <li>
            <AddMovie />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavCom;
