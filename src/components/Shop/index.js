import React, { useEffect } from 'react';

//Import Components
import Section from "./Section";
import Collection from "./Collection";
import MostViewedProducts from "./MostViewedProducts";
import TopCategories from "./TopCategories";
import PopularProducts from "./PopularProducts";
import Cta from "./Cta";
import RecentProducts from "./RecentProducts";

const Index = () => {

    useEffect(() => {
        document.body.classList = "";
        window.addEventListener("scroll", scrollNavigation, true);
        return () => {
            window.removeEventListener("scroll", scrollNavigation, true);
        }
    }, []);

    const scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        if(top > 80)
        {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else
        {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    return (
        <>
            {/* import Section */}
            <Section/>

            {/* import Collection */}
            <Collection/>

            <section className="section">

                <MostViewedProducts/>

                <TopCategories/>

                <PopularProducts/>

                <Cta/>

                <RecentProducts/>

            </section>
        </>
    );
}

export default Index;
