import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";




const useStyles = makeStyles(theme => ({
  "@global": {
    // body: {
    //   backgroundImage: "url(../assets/images/signup.jpg)",
    //   height: "100vh",
    //   padding: "0",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   overflow: "hidden",
     
    // }
  },
  paper: {
    // backgroundColor: "#fff",
    // transform: "translateY(20%)",
    // backgroundColor: "rgba(0,0,0,0.8)",
    backgroundColor: "white",
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    // alignItems: "center",
    borderRadius : "10px",
    // color: "white",
    
  },
  signupcont:{
    minHeight: "80vh" ,
    marginTop: "3rem"

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  f700: {
    fontWeight: 700,
  },

  

}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.signupcont} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.f700}  component="h1" variant="h5">
          Welcome to Cusho
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Remember Me"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#AF8C3E"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
