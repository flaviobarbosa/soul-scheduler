import styles from "./styles.module.css";

export const Input = ({id, title, ...rest}) => {
  return (
    <div className={styles.wrapper}>
      <label for={id}>{title}</label>
      <input id={id} {...rest} />
    </div>
  );
};
