import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 200,
    margin: "10px",
    textAlign: "center",
    background: "#B2BEB5",
  },
  pos: {
    margin: 5,
    marginBottom: 12
  }
});

const OutlinedCard = ({title}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        <h3>{title}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link</Button>
      </CardActions>
    </Card>
  );
}

export default OutlinedCard;