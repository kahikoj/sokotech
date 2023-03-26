import React from 'react';

//Homepage
const HomePage = React.lazy(() => import('./components/HomePage'));

const routes = [

    //Shop
    // { path: '/shop-products', component: ShopProducts },
    // { path: '/shop/product-detail/:id', component: ShopProductDetail },
    // { path: '/shop-cart', component: ShopCart },
    // { path: '/shop-checkouts', component: ShopCheckouts },
    // { path: '/shop-myaccount', component: ShopMyAccount },
    
    //Index Main
    { path: '/homepage', element: <HomePage/> },

    //Index root
    
    { path: '/', element: <HomePage/>, exact : true },
    // { component: PageError, isWithoutLayout : true, exact : false },
    
];

export default routes;