import Link from "next/link";
import Image from "next/image";
import Twitter_Icon from "./SVG/Twitter_Icon";
import Linkedin_Icon from "./SVG/Linkedin_Icon";
import Telegram_Icon from "./SVG/Telegram_Icon";
import Hifibridge_Icon from "./SVG/hifibridge_icon";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="FooterContent">
          <div className="FooterNavWrap">
            <div className="FooterColumn">
              <h6>Products</h6>
              <ul>
                <li>
                  <Link href="/globalpay" className="">
                    Global Payments
                  </Link>
                </li>
                <li className="ComingSoon">
                  <Link href="/accounts">Virtual Accounts</Link>
                </li>
                <li className="ComingSoon">
                  <p>
                    Embedded Payments{" "}
                    <span className="SmallTag">Coming Soon</span>
                  </p>
                </li>
              </ul>
            </div>

            <div className="FooterColumn">
              <h6>Developers</h6>
              <ul>
                <li>
                  <Link
                    target="blank"
                    href="https://docs.hifibridge.com/v1.0"
                    className=""
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="mailto:techsupport@hifibridge.com" className="">
                    Support
                  </Link>
                </li>
                {/* <li>
              <a href="https://portal.hifibridge.com/auth/signup" className="">Sign Up</a>
              </li> */}
                <li>
                  <a href="https://dashboard.hifibridge.com" className="">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>

            <div className="FooterColumn">
              <h6>Company</h6>
              <ul>
                <li>
                  <Link href="/about" className="">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@hifibridge.com" className="">
                    Careers
                  </Link>
                </li>
                {/* <li>
                <Link href="/assets" className="">Supported Assets</Link>
              </li> */}
                {/* <li>
                <Link href="/blog" className="">Blog</Link>
              </li> */}
                {/* <li>
                <Link href="/pricing" className="">Pricing</Link>
              </li> */}
              </ul>
            </div>

            <div className="FooterColumn">
              <h6>Contact</h6>
              <ul>
                <li>
                  <Link href="mailto:contact@hifibridge.com" className="Email">
                    General Inquiries
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@hifibridge.com" className="Email">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@hifibridge.com" className="Email">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@hifibridge.com" className="Email">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@hifibridge.com" className="Email">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="SubscriptionWrap">
              <div className="SubContent">
                <div className="SubTxt">
                  {/* <h6>Stay up to date.</h6> */}
                  <h5>
                    <span className="WarmGrad2">Stay Connected.</span>
                  </h5>
                </div>

                <div className="SubmitWrap">
                  <div className="SubInput">
                    <input type="email" placeholder="Enter your email" />
                  </div>

                  <div className="AppBtn Submit">
                    <Link href="/">
                      <button>Submit</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="FooterSocialWrap">

             <div className="CompanyWrap">
              <div className="AppName">
               <Hifibridge_Icon />
              </div>

              <div className="SocialIcons">
                <div className="RoundIcon">
                    <a href="https://twitter.com/hifibridge" target="_blank" arial-label=" HIFI Twitter" className="gtm_section_outbound_link_Twitter">
                        <Twitter_Icon />
                    </a>
                </div>
                
                <div className="RoundIcon">
                  <a href="https://instagram.com/hifi.bridge" target="_blank" className="gtm_section_outbound_link_Instagram">
                  <svg className="instagram-svg-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                  </a>
                </div>
                <div className="RoundIcon">
                  <a href="https://www.linkedin.com/company/hifibridge/" target="_blank" arial-label="HIFI Linked In" className="gtm_section_outbound_link_LinkedIn">
                  <Linkedin_Icon />
                  </a>
                </div>
              </div>
            </div> 
          </div>*/}

          <div className="FooterInfoWrap">
            <div className="Legal">
              <div>
                <p> © 2024 Hifi Bridge™. All Rights Reserved.</p>
              </div>
              <div className="LegalLinks">
                <Link href="/terms">Terms of Service </Link>-&nbsp;
                <Link href="/privacypolicy">Privacy Policy</Link>
              </div>
            </div>
            <div className="Disclaimer">
              <p>
                HIFI Bridge Inc, is a financial technology company and not a
                bank. The material published on this website is for
                informational purposes only and is not intended to, and should
                not be taken to, constitute investment, tax, legal or other
                advice by HIFI Bridge, Inc or its affiliates.{" "}
              </p>
            </div>
          </div>

          {/* <div className="PoweredBy">
                <div className="PoweredByInner">
                  <span>Website by</span>yarn dev
                  
                  <a target="_blank" href="">
                  </a>
                  <Link href="mailto:artblackstorm@gmail.com">&nbsp;Artemis Black</Link>
                </div>
              </div> */}
        </div>
      </div>
    </>
  );
};

export { Footer };
