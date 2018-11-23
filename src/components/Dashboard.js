import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

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
    margin: "5% 25%"
  },
  dashboardContent: {
    margin: "20px"
  },
  dashboardCard: {
    width: "35%",
    marginTop: "2%",
    marginLeft: "5%"
  }
};

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.onMetricDataLoad();
  };

  render() {
    const { classes } = this.props;
    if (!this.props.data.data) {
      return (
        <div className="loader">
          <LinearProgress />
        </div>
      );
    }
    const droneData = this.props.data.data[this.props.data.data.length - 1];
    return (
      <div>
        <Card className={classes.dashboardCard}>
          <CardHeader title="Dashboard VisualiZation" />
          <CardContent>
            <div className={classes.dashboardContent}>
              <p>
                Temperature: {droneData.metric}
                <br />
                Latitude : {droneData.latitude}
                <br />
                Longitude : {droneData.longitude}
                <br />
                Last Received :4 Seconds Ago
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  onMetricDataLoad: () =>
    dispatch({
      type: actions.FETCH_METRICDATA
    })
});

const mapStateTOProps = state => ({
  data: state.metric.data
});

export default withStyles(styles)(
  connect(
    mapStateTOProps,
    mapDispatch
  )(Dashboard)
);
