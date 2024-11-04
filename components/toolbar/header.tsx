import React, { useRef, useState, useEffect } from "react";
import { Toolbar } from "./Toolbar";
import { useElementOnScreen } from "../../hooks/useElementOnScreen"
import Link from "next/link";
// import { Banner } from "../carousel/Banner";
import ProductsDropdown from "./ProductsDropdown";
// import ResourcesDropdown from "./ResourcesDropdown";

export default function MainHeader(props: any) {
  const [ bannerRef, isVisible ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });

  // const isMobile = useMediaQuery('(max-width: 480px)');

  const headerClass = "header-top";
  const headerScrolledClass = "header-scrolled";
  
  return (
    <>
    {props.meta}
    
     {/* <Head>

        {props.title && <title>{props.title}</title>}
        {props.description && <meta name="description" content={props.description} key="desc" />}
        {props.title && <meta property="og:title" content={props.title} />}
        {props.description && <meta property="og:description" content={props.description} />}
        {props.image && <meta property="og:image" content={props.image} />}

        {props.preloadImage && <link rel="preload" as="image" href={props.preloadImage} />}
        <link rel="preload" as="image" href="https://www.hifibridge.com/_next/static/media/waves-main-430w.jpg" />
        <link rel="preload" as="image" href="https://www.hifibridge.com/_next/static/media/waves-hpay-430w.jpg" />
      
      </Head> */}

      {/* <div ref={bannerRef}><Banner  /></div> */}
        <div className={isVisible ? headerClass : headerScrolledClass}>
          
        <Toolbar useWhite={props.useWhite} {...props}>
          <div className="MenuLinks">
            <ProductsDropdown />
            {/* <ResourcesDropdown /> */}
            <Link className="dropdown-toggle" href="/about">Company</Link>
            <Link className="dropdown-toggle" target="blank" href="https://docs.hifibridge.com/v1.0">Documentation</Link>


          </div>
        </Toolbar>

        </div>
        
    </>
  );
}
