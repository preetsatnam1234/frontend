import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import Container from "@material-ui/core/Container";

function Home() {
  return (
    <Box className="wrapper">
      <Container>
        <Grid>
          <Typography className="title">Dashboard</Typography>

          <Grid className="box-wrapper">
            <Grid item lg={4} sm={12}>
              <Box className="first-box"></Box>
            </Grid>

            <Grid item lg={4} sm={12} xs={12}>
              <Box className="second-box"></Box>
            </Grid>
            <Grid item lg={4} sm={12} xs={12}>
              <Box className="third-box"></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="box2-wrapper">
          <Grid item lg={6} xs={12} className="fourth-box"></Grid>
          <Grid item lg={6} xs={12} className="fifth-box"></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
