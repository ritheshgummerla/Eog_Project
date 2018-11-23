import * as actions from "../actions";

const initialState = {
  loading: false,
  uom:"",
  metric:null,
  latitude: null,
  longitude: null,
  timsstamp:null,
  accuracy:null,
  data: {}
};


const startLoading = (state, action) => {
    return { ...state, loading: true };
};

const metricDataRecevied = (state, action) => {
    console.log('reducer')
             return {
               ...state,
               loading: false,
               data:action.data
             };
  }

const handlers = {
    [actions.FETCH_WEATHER]: startLoading,
    [actions.METRIC_DATA_RECEIVED]: metricDataRecevied
};
  
export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
  