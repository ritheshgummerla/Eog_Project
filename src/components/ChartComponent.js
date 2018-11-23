import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import "../app.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
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
  }
};

class ChartComponent extends Component {
  componentDidMount() {
    this.props.onMetricDataLoad();
  }

  render() {
    if (!this.props.chartList.data) {
      return (
        <div className="loader">
          <LinearProgress />
        </div>
      );
    }
    const chartList = this.props.chartList.data;
    let Data = [];
    chartList.filter((item)=>{
      const date = new Date(item.timestamp);
      const hour = date.getHours(date);
      const minutes = date.getMinutes(date);
      const time = hour + ":" + minutes;
      Data.push({ name: time, uv: item.metric });
    })

    const data = Data;
    return (
      <div>
        <Card className="chartCard">
          <CardHeader title="Chart Visualization" />
          <CardContent>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" dy="5" interval={100} />
              <YAxis domain={["240", "auto"]} />
              <Tooltip />
            </LineChart>
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

const mapStateToProps = state => ({
  chartList: state.metric.data
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatch
  )(ChartComponent)
);
