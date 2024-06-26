import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import appStore from './config/appStore';
import Cart from './components/Cart';


const About=lazy(()=>import('./components/About'));





const App=()=>{
   
    return(
        <Provider store={appStore}>
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<Suspense><About/></Suspense>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            
            {
                path:'/cart',
                element:<Suspense><Cart/></Suspense>

            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    

]);



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);