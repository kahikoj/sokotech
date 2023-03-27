import React from 'react';

//Homepage
const HomePage = React.lazy(() => import('./components/Shop/collectionShop.js/HomePage'));

const routes = [

    
    //Index Main
    { path: '/homepage', element: HomePage },

    //Index root
    
    { path: '/', element: HomePage, exact : true },
    // { component: PageError, isWithoutLayout : true, exact : false },
    
];

export default routes;

/*
// Root Include
const Root = React.lazy(() => import('./pages/Home/indexRoot'));

//Main Index
const Main = React.lazy(() => import('./pages/Home/indexMain'));

//Shop component//
const Shop = React.lazy(() => import('./pages/Shop/index'));

//Shop
const ShopProducts = React.lazy(() => import('./pages/Pages/Shop/ShopProducts'));
const ShopProductDetail = React.lazy(() => import('./pages/Pages/Shop/ShopProductDetail'));
const ShopCart = React.lazy(() => import('./pages/Pages/Shop/ShopCart'));
const ShopCheckouts = React.lazy(() => import('./pages/Pages/Shop/ShopCheckouts'));
const ShopMyAccount = React.lazy(() => import('./pages/Pages/Shop/ShopMyAccount'));

const routes = [
    //routes without Layout
    // Landings
    { path: '/index-shop', component: Shop },

    { path: '/page-aboutus', component: PageAboutUs },
    { path: '/page-pricing', component: PagePricing },
    { path: '/page-services', component: PageServices },
      //Shop
      { path: '/shop-products', component: ShopProducts },
      { path: '/shop-product-detail', component: ShopProductDetail },
      { path: '/shop-cart', component: ShopCart },
      { path: '/shop-checkouts', component: ShopCheckouts },
      { path: '/shop-myaccount', component: ShopMyAccount },

          //Page Contact
    { path: '/page-contact-one', component: PageContactOne },

          //Index Main
    { path: '/index', component: Main },

    //Index root

    { path: '/', component: Root, isWithoutLayout : true, exact : true }, 
    { component: PageError, isWithoutLayout : true, exact : false },

];

export default routes;

*/