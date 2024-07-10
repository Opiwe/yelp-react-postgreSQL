import { createBrowserRouter } from 'react-router-dom';

import Root from './components/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import UpdatePage from './pages/UpdatePage';


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
            {
                path: "/restaurant/:id",
                element: <RestaurantDetailPage />,
            },
            {
                path: "/restaurant/:id/update",
                element: <UpdatePage />,
            },
        ],
    },
]);
    
export default router;