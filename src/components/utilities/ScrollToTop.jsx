import React, { useEffect, Fragment } from 'react';
import { useLocation } from "react-router-dom";

function ScrollToTop({ history, children }) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        console.log(pathname);
    }, [pathname]);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;