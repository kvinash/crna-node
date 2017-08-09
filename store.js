import { createStore, applyMiddleware } from "redux";
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise11 from 'redux-promise';
import promise from "redux-promise-middleware";

/**To initiate the react dev tool in chrome */
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = applyMiddleware( promise(),thunk, logger);
var initia_store = [{'_id':123243,'name':'product123','price':'89'}]
var store = createStore(reducers,{},composeWithDevTools(
  middleware,
  // other store enhancers if any
));

export default store; 
