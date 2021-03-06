import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img
        alt="Black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      Example Footer
    </footer>
  );
}
