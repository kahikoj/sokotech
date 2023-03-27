import React, { useEffect } from 'react';

function ScrollspyNav(props) {
    const scrollTargetIds = props.scrollTargetIds;
    const activeNavClass = props.activeNavClass;
    const scrollDuration = Number(props.scrollDuration) || 1000;
    const headerBackground = props.headerBackground === "true" ? true : false;
    const router = props.router;

    const homeDefaultLink = router && router === "HashRouter" ? "#/" : "/";
    const hashIdentifier = "#";

    const easeInOutQuad = (current_time, start, change, duration) => {
        current_time /= duration / 2;
        if (current_time < 1) return change / 2 * current_time * current_time + start;
        current_time--;
        return -change / 2 * (current_time * (current_time - 2) - 1) + start;
    };

    const scrollTo = (start, to, duration) => {
        let change = to - start,
            currentTime = 0,
            increment = 10;

        let animateScroll = () => {
            currentTime += increment;
            let val = easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    }

    const getNavLinkElement = (sectionID) => {
        return document.querySelector(`a[href='${hashIdentifier}${sectionID}']`);
    }

    const getNavToSectionID = (navHref) => {
        return navHref.includes(hashIdentifier) ? navHref.replace(hashIdentifier, "") : "";
    }

    useEffect(() => {
        if (document.querySelector(`a[href='${homeDefaultLink}']`)) {
            document.querySelector(`a[href='${homeDefaultLink}']`).addEventListener("click", (event) => {
                event.preventDefault();
                scrollTo(window.pageYOffset, 0, scrollDuration);
                window.location.hash = "";
            });
        }

        document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((navLink) => {
            navLink.addEventListener("click", (event) => {
                event.preventDefault();
                let sectionID = getNavToSectionID(navLink.getAttribute("href"));

                if (sectionID) {
                    let scrollTargetPosition = document.getElementById(sectionID).offsetTop - (headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
                    scrollTo(window.pageYOffset, scrollTargetPosition, scrollDuration);
                } else {
                    scrollTo(window.pageYOffset, 0, scrollDuration);
                }
            });
        })

        window.addEventListener("scroll", scrollSection, true );

        return () => {
            window.removeEventListener("scroll", scrollSection, true );
        }
    }, []);

    const scrollSection = () => {
        let scrollSectionOffsetTop;
        scrollTargetIds.forEach((sectionID, index) => {
          const section = document.getElementById(sectionID);
          if (!section) {
            return;
          }
          scrollSectionOffsetTop = section.offsetTop - (headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
      
          if (window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + section.scrollHeight) {
            getNavLinkElement(sectionID).classList.add(activeNavClass);
            getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
            clearOtherNavLinkActiveStyle(sectionID)
          } else {
            getNavLinkElement(sectionID).classList.remove(activeNavClass);
            getNavLinkElement(sectionID).parentNode.classList.remove(activeNavClass);
          }
      
          if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight && index === scrollTargetIds.length - 1) {
            getNavLinkElement(sectionID).classList.add(activeNavClass);
            getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
            clearOtherNavLinkActiveStyle(sectionID);
          }
        });
      }
      
        
          function clearOtherNavLinkActiveStyle(excludeSectionID) {
            scrollTargetIds.forEach((sectionID, index) => {
              if (sectionID !== excludeSectionID) {
                getNavLinkElement(sectionID).classList.remove(activeNavClass);
                getNavLinkElement(sectionID).parentNode.classList.remove(activeNavClass);
              }
            });
          }
        
          useEffect(() => {
            window.addEventListener('scroll', scrollSection);
            return () => {
              window.removeEventListener('scroll', scrollSection);
            };
          });
        
          return (
            <div data-nav="list" className={props.className}>
              {props.children}
            </div>
          );
        }
        
        export default ScrollspyNav;