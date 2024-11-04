import React, { useEffect, useState } from 'react';
import MainHeader from "../components/toolbar/header";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';
import RoundCheck_Icon from '../components/SVG/RoundCheck_Icon';
import Check_Icon from '../components/SVG/Check_Icon';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import AnimationTrigger from '../components/AnimationTrigger';
import useMediaQuery from "../hooks/useMediaQuery";
import { Meta } from '../components/head/Meta';
import { GeneralFaq } from '../components/GeneralFaq';

export default function Hifipay() {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 480px)');
  
  return (
    <main className="Hifipay">
     <AnimationTrigger />
      <div>
       <MainHeader useWhite={false} 
          meta={<Meta 
            title="Embedded Payments" 
            metaTitle="Embedded Payments │ Power your online platform with digital payments." 
            metaImg="https://hifibridge.com/thumb/hifi-embedded.png" 
            description="Introducing the most powerful, fastest, and easiest way 
            to accept digital payments for your online checkout." />} 
            />
      </div>

      {/*  HERO SECTION */}

      <section className="HeroSectionWrap" id="embed-hero">
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
          <span className="Tag">Embedded Payments</span>
            <h2>Power your online platform with digital payments
             </h2>
            <h6>
            Introducing the most powerful, fastest, and easiest way 
            to accept digital payments for your online checkout.
             </h6>
             <div className="AppBtn">
            <Link target="" href="/getstarted"><button>Create an Account<Arrow_Icon /></button></Link>
            </div>
          </div>
        </div>
      </section>

      {/*  POWER SECTION */}

      <section className="SectionWrap" id="power">
        <div className="PowerSection">
          <div className="PowerContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <h3>Blockchain payment rails meet business operations.</h3>
              <p>
              Introducing the easiest way to embed the faste payment rails directly into your checkout page. Designed with precision to increase transactions, convert more sales, and integrate seamlessly into your business.   
              </p>

              <div className="RowListWrap">
  
                <div className="RowList Title">              
                  <div><RoundCheck_Icon /></div>
                  <div className="RowListText">
                    <h6><span className="text-blue">Accept Digital Assets at Checkout</span></h6>
                    <p>
                    Unlock new revenue streams and connect to millions of digital wallets.                    
                    </p>
                  </div>
                </div>

                <div className="RowList Title">              
                  <div><RoundCheck_Icon /></div>
                  <div className="RowListText">
                    <h6><span className="text-blue">Instant Integration, Infinite Flexibility</span></h6>
                    <p>
                    Step into the future with a cutting-edge payments stack sculpted for industry leading businesses.
                    </p>
                  </div>
                </div>

                <div className="RowList Title">              
                  <div><RoundCheck_Icon /></div>
                  <div className="RowListText">
                    <h6><span className="text-blue">Built-In Security at the Core</span></h6>
                    <p>
                    Advanced security measures combined with rigorous compliance reporting to ensure safety in every transaction.                    </p>
                  </div>
                </div>

               </div>

            {/* <div className="AppBtn">
            <Link target="" href="/getstarted"><button>Create an Account<Arrow_Icon /></button></Link>
            </div> */}
            </div>

            <div className="SideImg">
              <div className="ImgGroup">
                <Image className="index-1 animation-up" data-animate="slide-up"  loading="eager" 
                alt="HIFI pay dashboard" src='/img/dash-desktop2.png' 
                sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={2470} height={1706} />

                <Image className="index-2 animation-up delay-2" data-animate="slide-up"  loading="eager" 
                alt="HIFI pay dashboard" src='/img/dash-mobile.png' 
                sizes="(max-width: 480px) 500px, (max-width: 1024px) 700px, 1000px"
                width={2470} height={1706} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*  PAY SECTION */}
 
      <section className="SectionWrap" id="pay">
        <div className="PaySection">
          <div className="PayContent Right animation-up" data-animate="slide-up">

          <div className="SideImg">

            <div className="ImgGroup">
              <Image className="index-1 animation-up" data-animate="slide-up" alt="payments" src='/img/hpay-01.png' 
                sizes="(max-width: 480px) 300px, (max-width: 1024px) 600px, 1200px"
                width={1680} height={1302}  loading="eager"  />

              <Image className="index-1 animation-up delay-2" data-animate="slide-up" alt="payments" src='/img/hpay-02.png' 
                sizes="(max-width: 480px) 300px, (max-width: 1024px) 600px, 1000px"
                width={1680} height={1302}  loading="eager" />

              <Image className="index-1 animation-up delay-4" data-animate="slide-up" alt="payments" src='/img/hpay-03.png' 
                sizes="(max-width: 480px) 300px, (max-width: 1024px) 600px, 1000px"
                width={1680} height={1302}  loading="eager" />
            </div>
          </div>

          <div className="SideTxt">
            <h3>Embedded digital payments engine for your online platform.</h3>
            <p>
            Join the forefront of e-commerce innovation with HIFI’s game-changing crypto payments. 
            </p>
            <p>
            Enhance your online store's capabilities and tap into a world of possibilities that drive increased sales, higher conversions, and a loyal customer base.            
            </p>
          </div>
        </div>

        </div>
      </section>

        <div>

          {/* <Slideshow /> */}
          
        </div>

       {/*  FEATURES SECTION */}

      <section className="SectionWrap" id="features">
          <div className="FeaturesSection">
            <div className="FeaturesSectionContent animation-up" data-animate="slide-up">
            <h3>Explore New Frontiers with the Future of Money.</h3>
            <p> 
            Revolutionize your payment processes and unlock unparalleled speed and efficiency. 
            </p>

              {/* <Features /> */}
              
            </div>
          </div>
        </section>

      {/*  API SECTION */}

        <section className="SectionWrap" id="api">
        <div className="ApiSection">
          <div className="ApiContent Left">
            <div className="SideTxt">
              <h3 className="animation-up" data-animate="slide-up">
                An Advanced API, Built with Simplicity
              </h3>
              <div className="FeatureBox">
                <div className="FeatureWrap animation-up" data-animate="slide-up">
                  <h5>API Versioning & Upgrades</h5>
                  <p>
                  With HIFI’s commitment to backward compatibility and clear versioning, you can rest assured that your integration remains stable even as our APIs evolve. 
                  </p>
                </div>
                <div className="FeatureWrap animation-up delay-1" data-animate="slide-up">
                  <h5>Secure Dev Environment</h5>
                  <p>
                  HIFI follows industry-leading security standards, including PCI-DSS Level 1 certification, to safeguard your customers' data and protect your business from potential risks.                  </p>
                </div>
                <div className="FeatureWrap animation-up delay-2" data-animate="slide-up">
                  <h5>Real-time Webhooks</h5>
                  <p>
                  Receive instant updates on critical payment events, enabling you to respond swiftly to customer actions and improve your user experience.                    </p>
                </div>
                <div className="LineBtn blue animation-up delay-3" data-animate="slide-up">
                    <Link target="blank" href="https://docs.hifibridge.com/v1.0"><button>Read the Docs</button></Link>
                </div>
              </div>

            </div>
            <div className="SideImg animation-left delay-6" data-animate="slide-left">
              <Image alt="api integration" src='/img/hifi-api.png' loading="eager" 
              sizes="(max-width: 480px) 500px, 750px"
                width={750} height={554} />
            </div>
            
          </div>
        </div>
      </section>

        {/*  SUPPORT SECTION */}

      <section className="SectionWrap" id="support">
        <div className="BaseSection">

          <div className="SupportContent animation-up" data-animate="slide-up">
            <h3>Ready to get started?</h3>
              <p>
                We believe in going above and beyond to support your business's success. 
                That's why our dedicated account management team is here to provide personalized assistance and guidance every step of the way. 
                From initial setup to ongoing optimization, our experts are committed to understanding your unique needs and tailoring solutions that align with your goals.              
              </p>
              <div className="ButtonGroup left">
              <div className="AppBtn">
                <Link target="" href="/getstarted"><button>Create an Account<Arrow_Icon /></button></Link>
              </div>
            <div className="LineBtn">
              <div className="ButtonWrap">
                <Link href="/pricing"><button className="">Speak with and Expert</button></Link>
              </div>
            </div>
            </div>
          </div>
    
          <div className="CardGroup">
          
            <div className="CardWrap animation-up" data-animate="slide-up">
              <div className="CardTop"></div>
              <div className="Card">
                <div className="CardTxt">
                  <h6>Seamless Onboarding</h6>
                  <p>
                  Work with our in-house experts to guide you through the setup, integration, and customization to get you up and running quickly and efficiently, ensuring a smooth implementation and ongoing success.
                  </p>
                </div>
              </div>               
            </div>
            <div className="CardWrap animation-up delay-2" data-animate="slide-up">
              <div className="CardTop green"></div>
              <div className="Card">
                <div className="CardTxt">
                <h6>24/7/365 Support</h6>
                  <p>
                  Whether you need assistance with payment flows, subscription management, or any other aspect, our account managers are readily available to address any issues promptly, even during peak times.                        
                  </p>
                </div>
              </div>               
            </div>
            <div className="CardWrap animation-up delay-4" data-animate="slide-up">
              <div className="CardTop yellow"></div>
              <div className="Card">
                <div className="CardTxt">
                <h6>Tailored Solutions</h6>
                  <p>
                  Enjoy personalized support to assist you every step of the way. Our team is ready to  create customized solutions that suit your business perfectly.
                  </p>
                </div>
              </div>               
            </div>
            <div className="CardWrap animation-up delay-6" data-animate="slide-up">
              <div className="CardTop dgreen"></div>
              <div className="Card">
                <div className="CardTxt">
                <h6>Real-time monitoring</h6>
                  <p>
                  We proactively monitor your payment processes and provide valuable insights to optimize performance. We're always one step ahead so you can stay at the forefront of the industry.                        
                  </p>
                </div>
              </div>               
            </div>

          </div>
        </div>
      </section>

        {/* SLOGAN SECTION */}

        <section className="SectionWrap" id="slogan">
        <div className="BaseSection">
            
            <div className="">
              <h2>Open Money. <br />Always On.
              </h2>
            </div>

          </div>
        </section>

      <section className="SectionWrap" id="faq1">
        <div className="AssetsFaqSection animation-up" data-animate="slide-up">

          <h3>Learning Center</h3>
          <p>Discover answers to frequently asked questions. Need some help? Reach out to our team 
            <a href="mailto:contact@hifibridge.com"className="text-blue"> here.</a>
          </p>

          <GeneralFaq />
      
        </div>

      </section>

      <Footer />

    </main>
  );
}




      {/* <section className="BlockSectionWrap">
        <div className="BlockSection">
          <div className="BlockContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <h3><span className="BlueGrad">Limitless Blockchain Payments </span>
              <span>Igniting Unlimited Possibilities</span></h3>

              <p>
              Say goodbye to the complexities of building and scaling native crypto infrastructure from scratch.
              </p>
              <p>
              Leverage blockchains, digital wallets, and custody solutions all bundled into one comprehensive API to supercharge your business.               
              </p>

              <div className="TagWrap first">
                  <div className="LineTag">
                    <div><span className="text-blue">Liquidity </span>for incoming assets</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="text-blue">Payments </span>for online acceptance</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="text-blue">Custody </span>of assets</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="text-blue">Wallet </span>integrations</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="text-blue">KYC/AML </span>risk monitoring</div>
                  </div>
                  <div className="LineTag">
                    <div><span className="text-blue">Bank Payouts </span>ACH/SEPA/Wire</div>
                  </div>
              </div>

            </div>

            <div className="SideImg">
              <div>
                <img className="blocktags" alt="HIFI" src='/img/block-tags.svg' width={819} height={527} />
                <Image className="block" alt="HIFI" src='/img/block-shape.png'  loading="eager" 
                 sizes="(max-width: 480px) 250px, 650px" width={650} height={532} />
                <Image className="blockchain" alt="HIFI" src='/img/block-chain.png' width={819} height={557}  loading="eager" />
              </div>
            </div>

          </div>

        </div>
      </section> */}

            {/* <section className="SuiteSectionWrap">
        <div className="SuiteSection">
          <div className="SuiteContent">
            <div className="SideTxt animation-up" data-animate="slide-up">
              <h3><span className="WarmGrad">A Fully Integrated Suite </span>
              <br />of Crypto Payments Tools</h3>
              <div className="TextGroup">
                <div className="SuiteText">
                  <p>
                  HIFI Pay offers the most powerful and comprehensive platform that allows businesses to flexibly 
                  <span className="text-blue"> track and manage payments, initiate payouts, and manage their customers all-in-one.</span>
                  </p>
                </div>
                <div className="SuiteText">
                  <p>
                  We reduce friction for companies at scale at every step in the customer checkout process. All the essential payment tools come bundled in one unified integration including 
                  <span className="text-blue"> fraud prevention, flexible billing, refund support, </span>
                  and more.                  
                  </p>
                </div>
              </div>

              <div className="AppBtn">
              <Link target="" href="/getstarted"><button>Create an Account<Arrow_Icon /></button></Link>
              </div>
          
            </div>

            <div className="SideImg">
              <div className="ImgGroup">

              <Image className=" animation-up" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-01.png' width={3000} height={2326}  loading="eager" />

              <Image className="animation-up delay-2" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-02.png' width={3000} height={2326}  loading="eager" />

              <Image className=" animation-up delay-3" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-03.png' width={3000} height={2326}  loading="eager" />

              <Image className="animation-up delay-4" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-04.png' width={3000} height={2326}  loading="eager" />

              <Image className="animation-up delay-5" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-05.png' width={3000} height={2326}  loading="eager" />

              <Image className="animation-up delay-6" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-06.png' width={3000} height={2326}  loading="eager" />

              <Image className="animation-up delay-7" data-animate="slide-up" alt="suite crypto payments"
              sizes="(max-width: 480px) 500px, (max-width: 1024px) 1100px, 1500px"
              src='/img/suite-07.png' width={3000} height={2326}  loading="eager" />

              </div>
            </div>
          </div>

        </div>
      </section> */}

        {/* <section className="SectionWrap" id="api">
          <div className="ApiSection animation-up" data-animate="slide-up">
            <div>
              <h2>
              An Advanced API, Built with Simplicity
              </h2>
            </div>

            <div className="SideTxt">
              <div className="FeatureBox">
                <div className="FeatureWrap">
                  <h5>API Versioning & Upgrades</h5>
                  <p>
                  With HIFI’s commitment to backward compatibility and clear versioning, you can rest assured that your integration remains stable even as our APIs evolve. 
                  </p>
                </div>
                <div className="FeatureWrap">
                  <h5>Secure Dev Environment</h5>
                  <p>
                  HIFI follows industry-leading security standards, including PCI-DSS Level 1 certification, to safeguard your customers' data and protect your business from potential risks.                  </p>
                </div>
                <div className="FeatureWrap">
                  <h5>Real-time Webhooks</h5>
                  <p>
                  Receive instant updates on critical payment events, enabling you to respond swiftly to customer actions and improve your user experience.                    </p>
                </div>
              </div>
            </div>

              <div className='SideImg'>
                <Image alt="HIFI" src='/img/dash-1.png'  loading="eager" 
                    sizes="(max-width: 480px) 500px, 1000px"
                    width={1568} height={732} />
              </div>
            

          <div className="LineBtn">
                  <div className="ButtonWrap">
                    <Link href="/hifipay"><button className="">Read the Docs</button></Link>
                  </div>
                </div>
          </div>
        </section> */}

      {/* <section className="ExploreSectionWrap">
        <div className="ExploreSection">
          <div className="ExploreContent Right animation-up" data-animate="slide-up">

            <div className="SideImg">
            {isMobile ? (
            <Image alt="Fast Payments" src='/img/explore-480.png' sizes="(max-width: 480px) 200px, 1000px" width={1000} height={1000} />
            ) : 
              (<Image alt="Fast Payments" src='/img/explore.png' width={1000} height={1000}  loading="eager" />)}
            </div>

            <div className="SideTxt Tagged">
              <div>
                <span className="Tag long">Fast Payments</span>
                <p className="Subtitle">Unlock rapid settlement and lightning fast payments</p>
                <h4>Explore New Frontiers with the Future of Money</h4>
                <p>
                Simplify your business payments, explore new frontiers of money, and unlock unparalleled speed and efficiency. 
                </p>
                <p>
                Revolutionize your payment processes with rapid settlement and near-zero costs. Finally, experience the power of 24/7 settlement and direct access to USDC and other stablecoins.                
                </p>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* <section className="CompSectionWrap">
        <div className="CompSection">
          <div className="CompContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt Tagged">
              <div>
                <span className="Tag blue">Global Compliance</span>
                <p className="Subtitle">Maximize conversions and minimize costs</p>
                <h4>End-to-End North America Compliance</h4>
                <p>
                Secure, propel, and unlock your businesses overall performance with robust fraud protection designed to increase conversion rates and build customer trust. Our platform is battle-tested to navigate the intricacies of any regulatory requirements effortlessly.
                </p>
                <p>
                Embrace the future with confidence with a seamless, efficient, and fully compliant operation to drive sustained growth in the competitive digital landscape.
                </p>
              </div>
            </div>

            <div className="CompList">
              <div className="RowListWrap">
                <div className="RowTitle"><p>U.S & Canada regulatory compliant</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>U.S MTL coverage in 50 states</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>U.S MSB Category: Dealing w/ digital assets</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>Canada MSB Category: Dealing w/ digital assets</p></div>
              </div>

              <div className="RowListWrap">
                <div className="RowTitle"><p>Secure customer approvals</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>Boost authorization rates</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>ACH/EFT/SEPA money movement support</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>Customer chargeback coverage</p></div>
              </div>

              <div className="RowListWrap">
                <div className="RowTitle"><p>Authentication, Validation & Fraud protection</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>Dynamic 3D Secure</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>Industry-leading ML protection</p></div>
                <div className="RowList"><div><RoundCheck_Icon /></div><p>KYC/AML service protection</p></div>
              </div>

            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="DevSectionWrap">
        <div className="DevSection">
          <div className="DevContent Right animation-up" data-animate="slide-up">
          
           <div className="DevSlide">
             <DevSlideshow />
           </div>

            <div className="SideTxt Tagged">
              <div>
                <span className="Tag">Developer First</span>
                <p className="Subtitle">Developer friendly payments solution</p>
                <h4>Developer Centric API’s</h4>
                <p>
                Our APIs are designed with developers in mind, offering clear documentation, comprehensive libraries, and code samples to streamline your integration process.                 </p>
                <p>
                With HIFI, you'll experience a seamless integration journey that accelerates your development cycle and reduces time-to-market.               
                </p>              
                </div>
              <div className="LineBtn">
                <div className="ButtonWrap">
                  <Link target="blank" href="https://docs.hifibridge.com/v1.0"><button>Read the Docs</button></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* <section className="WalletSectionWrap">
        <div className="WalletSection">
          <div className="WalletContent animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <div>
                <h4>Millions of Wallets.<br />
                  One Way to Pay.</h4>
                  <p>
                  HIFI offers powerful account aggregation that enables any business to directly connect to customers from 300+ wallets including Robinhood, Coinbase, Gemini, and more, with 40+ digital assets supported.                
                  </p>
                  <div className="LineBtn">
                    <div className="ButtonWrap">
                      <Link href="/assets"><button className="purple">Supported Assets</button></Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}