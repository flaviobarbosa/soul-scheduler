import {
  RightOutlined,
  LogoutOutlined,
  CalendarOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {Backdrop} from "../Backdrop/Backdrop";
import styles from "./styles.module.css";

export const Drawer = ({open, onClose}) => {
  return (
    <>
      {open && <Backdrop />}
      <div className={`${styles.container} ${open ? styles.open : ""}`} onClick={onClose}>
        <div className={styles.drawer}>
          <header className={styles.drawerHeader}>
            <span className={styles.close} onClick={onClose}>
              <RightOutlined />
            </span>
            <div className={styles.userInfo}>
              <h3 className={styles.userName}>Zeca</h3>
              <span className={styles.useRoom}>2 - 505</span>
              <div className={styles.logout}>
                <span className={styles.logoutIcon}>
                  <LogoutOutlined />
                </span>
                <span>SAIR</span>
              </div>
            </div>
          </header>
          <div className={`${styles.divider} ${styles.transparent}`}></div>
          <nav className={styles.links}>
            <p className={`${styles.link}  ${styles.active}`}>
              <span className={styles.linkIcon}>
                <CalendarOutlined />
              </span>
              Meus agendamentos
            </p>
            <p className={styles.link}>
              <span className={styles.linkIcon}>
                <PlusOutlined />
              </span>
              Novo agendamento
            </p>
          </nav>
        </div>
      </div>
    </>
  );
};
