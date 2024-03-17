import './App.css';
import Head from './components/Head';
import Body from './components/Body'; 
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import { Children } from 'react';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Signup from './components/Signup';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Body/>,
      children : [
        {
        path : '/',
        element : <MainContainer/>
        },
        {
          path : '/watch',
          element : <WatchPage/>
        },
        {
          path : '/signup',
          element : <Signup/>
        },
        {
          path : '/login',
          element : <Login/>
        }
    ]
  }
  ])

  return (
    <div className="">
      <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
