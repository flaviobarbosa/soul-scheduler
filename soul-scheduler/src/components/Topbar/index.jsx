import {useState} from "react";

import {MenuOutlined} from "@ant-design/icons";
import {Drawer} from "../Drawer";

import styles from "./styles.module.css";

export const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.topbar}>
      <h1>Soul</h1>
      <MenuOutlined className={styles.menuIcon} onClick={handleOpenMenu} />
      <Drawer open={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
};
