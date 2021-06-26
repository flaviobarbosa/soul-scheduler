import {MenuOutlined} from "@ant-design/icons";

import styles from "./styles.module.css";

export const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <h1>Soul</h1>
      <MenuOutlined className={styles.menuIcon} />
    </div>
  );
};
