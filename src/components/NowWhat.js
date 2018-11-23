import React from "react";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);
const styles = {
  card: {
    margin: "5% 15%"
  }
};

const NowWhat = props => {
  const { classes } = props;
  return (
    <div>
    <Card className={classes.card}>
      <CardHeader title="Assessments" />
      <CardContent>
        <List>
          <ListItem>
           <Link to='/drone'> <ListItemText primary="Dashboard" /></Link>
          </ListItem>
          <ListItem>
           <Link to='/chart'> <ListItemText primary="Chart" /></Link>
          </ListItem>
          <ListItem>
           <Link to='/map'> <ListItemText primary="Map" /></Link>
          </ListItem>
        </List>
      </CardContent>
    </Card>
    </div>
  );
};

export default withStyles(styles)(NowWhat);
