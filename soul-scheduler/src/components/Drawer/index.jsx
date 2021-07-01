import {RightOutlined} from "@ant-design/icons";
import {Backdrop} from "../Backdrop/Backdrop";
import styles from "./styles.module.css";

export const Drawer = ({open, onClose}) => {
  return (
    <>
      {open && <Backdrop />}
      <div className={`${styles.container} ${open ? styles.open : ""}`} onClick={onClose}>
        <nav className={styles.sideDrawer}>
          <span>
            <RightOutlined />
          </span>
        </nav>
      </div>
    </>
  );
};
