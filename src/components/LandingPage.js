import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@material-ui/core/styles";
import animationData from "../animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import customSoftwareIcon from "../assets/CustomSoftwareIcon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import revolutionBackground from "../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "2em",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  softwareIcon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  servicesBlock: {
    marginTop: "16em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repret",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: 10,
    height: "15rem",
    width: "40rem",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        {/* ----Hero Block---- */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* Custom Software Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.servicesBlock}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              style={{ marginBottom: matchesSM ? "2em" : undefined }}
            >
              Learn More
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.softwareIcon}
              alt="custom software icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* iOS/Android Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.servicesBlock}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              style={{ marginBottom: matchesSM ? "2em" : undefined }}
            >
              Learn More
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.softwareIcon}
              alt="mobile app icon"
              src={mobileIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Custom Software Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.servicesBlock}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              style={{ marginBottom: matchesSM ? "2em" : undefined }}
            >
              Learn More
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.softwareIcon}
              alt="website icon"
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "60em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with bla bla bla bla bla bla
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    style={{ marginBottom: matchesSM ? "2em" : undefined }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
}
