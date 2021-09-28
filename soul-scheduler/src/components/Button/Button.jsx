import {useEffect, useState} from "react";
import styles from "./styles.module.css";

export const Button = ({children, disabled, ...rest}) => {
  const [buttonStyle, setButtonStyle] = useState();

  useEffect(() => {
    if (disabled) setButtonStyle(styles.button + " " + styles.disabled);
    else setButtonStyle(styles.button);
  }, []);

  return (
    <button className={buttonStyle} style={{...rest}}>
      {children}
    </button>
  );
};
