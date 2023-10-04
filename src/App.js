import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./utils/routing";
import {reducer} from "./utils/reducer";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
}

export default App;
