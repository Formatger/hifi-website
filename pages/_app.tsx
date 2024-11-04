import "../styles/fonts.css";
import "../styles/core.css";
import "../styles/global.css";
import "../styles/main.css";
// import "../styles/hifipay.css";
import "../styles/about.css";
import "../styles/extra.css";
import React, { useEffect, useState } from 'react';
import type { AppProps } from "next/app";
import TagManager from 'react-gtm-module';

// const tagManagerArgs = {
//   gtmId: 'GTM-XXXXXXX',
// };

export default function App({ Component, pageProps }: AppProps) {
  // const [scriptLoaded, setScriptLoaded] = useState(false);
  
  // useEffect(() => {

  //   const script = document.createElement('script');
  //   script.src = '//fw-cdn.com/10803668/3585004.js';
  //   script.setAttribute('chat', 'true');
  //   document.head.appendChild(script);

  //   return () => {
  //     document.head.removeChild(script);
  //   }

  //   TagManager.initialize(tagManagerArgs);
    
  // }, []);

  return (
      <div className="root">
        <Component {...pageProps} />
      </div>
  );
}
