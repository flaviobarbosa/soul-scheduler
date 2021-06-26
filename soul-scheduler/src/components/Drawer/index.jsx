import {RightOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import styles from "./styles.module.css";

export const Drawer = ({open, onClose}) => {
  return (
    <div className={`${styles.container} ${open ? styles.open : styles.close}`}>
      <div className={styles.left} onClick={onClose}></div>
      <div className={styles.content}>
        <header>
          <RightOutlined className={styles.closeIcon} onClick={onClose} />
          <p>Zeca</p>
        </header>
      </div>
    </div>
  );
};
