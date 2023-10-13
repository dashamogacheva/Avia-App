import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./utils/routing";
import {reducer} from "./utils/reducer";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = typeof store.dispatch;

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
