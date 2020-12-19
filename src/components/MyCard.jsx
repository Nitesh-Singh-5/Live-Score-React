import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  img,
} from "@material-ui/core";
import React from "react";

const MyCard = () => {
  const getMatchCard = () => {
    return (
      <Card>
        <CardContent>
          <Grid container justify="center" spacing={4} alignItems="center">
            <Grid item>
              <Typography>First Team</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src={require("../Img/vs_image.png")}
                alt="vs image"
              />
            </Grid>
            <Grid item>
              <Typography>Second Team</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Button color="primary" variant="contained">
              Show Detail
            </Button>
            <Button color="primary" variant="contained">
              {new Date().toString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };
  return getMatchCard();
};

export default MyCard;
