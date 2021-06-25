import styles from "./styles.module.css";

export const Button = ({children, ...rest}) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
