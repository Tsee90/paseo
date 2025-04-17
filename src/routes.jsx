import App from './App';
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    element: <App></App>,
    children: [{ path: '', element: <Home></Home> }],
  },
];

export default routes;
