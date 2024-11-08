import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <div className="calendly-inline-widget Calendly"
      data-url="https://calendly.com/zach-walsh/intro-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=6200ff"></div>
  );
};

export default CalendlyWidget;
