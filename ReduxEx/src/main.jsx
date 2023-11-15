import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App.jsx';
import './index.css';
import store from './services/Redux/reduxStorage.js';
/**
 *  To use the stored value of redux store
 *  we have to use react-redux
 *  and to use it any where in the application we have to provide it
 *  using Provider
 */
ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App/>
    </Provider>

)
