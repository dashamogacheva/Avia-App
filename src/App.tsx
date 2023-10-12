import './App.css';
// import {RouterProvider} from "react-router-dom";
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
                {/*<RouterProvider router={Router}/>*/}
                <Router/>
            </Provider>
        </div>
    );
}

export default App;
