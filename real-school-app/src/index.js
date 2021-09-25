import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { HWContextProvider } from './store/hw-context';

ReactDOM.render(<HWContextProvider><App /></HWContextProvider>, document.getElementById('root'));
