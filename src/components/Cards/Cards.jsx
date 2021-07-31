import React from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { total_values, state_wise } }) => {
  //   if (!data) {
  //     return "loading...";
  //   }
  console.log(state_wise);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center" mx="auto">
        <Grid
          item
          xs={12}
          md={2}
        //   l={3}
          component={Card}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Cases
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                // end={total_values.confirmed}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          component={Card}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                // end={total_values.active}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          component={Card}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Recovered
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                // end={total_values.recovered}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          component={Card}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Deaths
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                // end={total_values.deaths}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
