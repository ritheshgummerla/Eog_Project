import React from "react";
import createStore from "./store";
import "./app.css"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import NowWhat from "./components/NowWhat";
import Dashboard from "./components/Dashboard";
import Chart from "./components/ChartComponent";
import "font-awesome/css/font-awesome.min.css";
import Map from "./components/MapComponent"
import Grid from '@material-ui/core/Grid';
import SideMenu from "./components/SideMenu"

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

const App = props => (
  <Router>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Wrapper>
        <Header />
    <Grid container style={{height:'100%'}}>
    <Grid item md={2}>
    <SideMenu/>
    </Grid>
    <Grid item md={10}>
        <Route exact path="/" component={NowWhat} />
        <Route exact path="/" component={ToastContainer} />
        <Route exact path="/drone" component={Dashboard} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/map" component={Map} />
        </Grid>
    </Grid>
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
  </Router>
);

export default App;



