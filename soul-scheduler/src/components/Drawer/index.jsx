import {RightOutlined} from "@ant-design/icons";
import styles from "./styles.module.css";

export const Drawer = ({open, onClose}) => {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.content}>
        <header>
          <RightOutlined className={styles.closeIcon} onClick={onClose} />
          <p>Zeca</p>
        </header>
      </div>
    </div>
  );
};
