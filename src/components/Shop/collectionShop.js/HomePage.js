import React, { useEffect } from 'react';
import Section from "./Section";
import Collection from "./Collection";
import MostViewedProducts from "./MostViewedProducts";
import TopCategories from "./TopCategories";
import PopularProducts from "./PopularProducts";
import RecentProducts from "./RecentProducts";



const HomePage = () => {

  useEffect(() => {
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
    return () => {
      window.removeEventListener("scroll", scrollNavigation, true);
    };
  }, []);
  
  const scrollNavigation = () => {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    let topnav = document.getElementById('topnav');
    if(topnav) {
      if(top > 80) {
        topnav.classList.add('nav-sticky');
      } else {
        topnav.classList.remove('nav-sticky');
      }
    }
  }
  

  return (
    <>
      <Section />
      <Collection />
      <section className="section">
        <MostViewedProducts />
        <TopCategories />
        <PopularProducts />
        <RecentProducts />        
      </section>
    </>
  );
};

export default HomePage;