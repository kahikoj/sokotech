import React from 'react';

//Homepage
const HomePage = React.lazy(() => import('./components/Shop/collectionShop.js/HomePage'));


//Shop
const ProductsList = React.lazy(() => import('./components/Shop/ProductsList'));
const ProductDetail = React.lazy(() => import('./components/Shop/ProductDetail'));


// Pages
const Service = React.lazy(() => import('./components/Shared/Services'));
const Contacts = React.lazy(() => import('./components/Shared/Contacts'));
const About = React.lazy(() => import('./components/Shared/About'));





const routes = [

    
    //Index Main
    { path: '/homepage', element: HomePage },


    //Shop List
    { path: '/product', element: ProductsList},
    { path: '/productDetail', element: ProductDetail },


    //Shared List
    { path: '/about', element: About },
    { path: '/contact', element: Contacts},
    { path: '/services', element: Service },

    //Index root
    
    { path: '/', element: HomePage, exact : true },
    // { component: PageError, isWithoutLayout : true, exact : false },
    
];

export default routes;
