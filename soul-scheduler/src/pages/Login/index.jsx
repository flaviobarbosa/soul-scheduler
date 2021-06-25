import React, {useState} from "react";
import {Button} from "../../components/Button/Button";
import {Input} from "../../components/Input";
import {useAuth} from "../../hooks/useAuth";

import styles from "./styles.module.css";

export const Login = () => {
  const {signIn} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    signIn(email, password);
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Agendador</h2>
        <h2>Soul</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="email"
          title="Email"
          placeholder="youremail@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          title="Password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};
