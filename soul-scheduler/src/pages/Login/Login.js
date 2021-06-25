import React from "react";
import {Button, TextField, Typography, makeStyles, Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    minWidth: "100%",
    display: "inline-flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Box mt={5}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        AGENDADOR SOUL
      </Typography>
      <form className={classes.form}>
        <TextField id="email" label="Email" variant="outlined" fullWidth />
        <TextField
          id="email"
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className={classes.button}
        >
          entrar
        </Button>
      </form>
    </Box>
  );
};

export default Login;
