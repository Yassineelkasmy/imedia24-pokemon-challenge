import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/rootReducer";
import { rootSaga } from "../redux/rootSaga";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);


interface WrapperProps {
    children: ReactNode;
}
const TestWrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}


export default TestWrapper;