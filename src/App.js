import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignInPage from './pages/signIn';
import SignUpPage from './pages/signUp';
import DashboardPage from './pages/dashboard';
import BalancePage from './pages/balance';
import GoalsPage from './pages/goals';

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/goals",
      element: <GoalsPage />,
    },
  ]);
  
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
