import { createBrowserRouter } from 'react-router-dom';

import Root from './components/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
            path: "/",
            element: <HomePage />,
            },
        ],
        },
    ]);
    
export default router;