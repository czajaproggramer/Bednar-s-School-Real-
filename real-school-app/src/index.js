import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { HWContextProvider } from './store/hw-context';
import { AuthContextProvider } from './store/auth-context';

ReactDOM.render(<BrowserRouter><HWContextProvider><AuthContextProvider><App /></AuthContextProvider></HWContextProvider></BrowserRouter>, document.getElementById('root'));
