import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import Link from 'next/link';
import MainHeader from "../components/toolbar/header";
import {Footer} from '../components/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import { Meta } from '../components/head/Meta';

export default function Home() {
  // const isMobile = useMediaQuery('(max-width: 480px)');
  // const isDesktop = useMediaQuery('(min-width: 481px)');

  return (
    <main id="Main">
     <AnimationTrigger />
      <div>
        <MainHeader useWhite={false}
          meta={<Meta 
          title="HIFI" 
          metaTitle="HIFI │ Fast and Borderless Business Payments" 
          metaImg="https://hifibridge.com/thumb/thumb-main.png" 
          description="The next-generation payments and API platform for global businesses to move money at the speed of the internet." />} 
          />
      </div>

      {/*  HERO SECTION */}

        <section className="HeroCenterSectionWrap" id="main-hero">
          <div className="HeroCenterSection" >
            <div className="HeroCenter animation-up" data-animate="slide-up">
                {/* <h1 className='text-center'>
                  <span>Pay anyone, anywhere</span>
                  <span className="MainGrad">across the globe</span>
                </h1> */}
                <img id="heading" alt="Digital" src='/img/heading.svg' width={1000} height={500} />
                <h6 className='description'>
                The next-generation payments and API platform for global businesses to move money at the speed of the internet.
                </h6>
                <div className="ButtonGroup mt-7">
                  <div className="AppBtn">
                    <Link href="/getstarted"><button>Start a Payment <Arrow_Icon /></button></Link>
                  </div>
                </div>
            </div>
          </div>
        </section>
      
       {/* STACK SECTION */}

      <section className="SectionWrap" id="stack">
         <div className="StackSection">
            <div className="animation-up" data-animate="slide-up">
              <div className='CenterHeading'>
              <h6 className='subtitle'>Our platform</h6>
              <div className='CenterWrap'>
                <h2><span>Move money at light speed</span>
                <br />
                <span className='MainGrad'>for global businesses</span>
                </h2>
                <h6 className='description'>
                Automate and streamline your payment processes and workflows from one central platform, with the fastest payments technology built by humans.
                </h6>
              </div>
              </div>
            </div>

            <div className="StackCardGroup">
          
              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCard">
                  <div className="StackCardTxt">
                    <div>
                      <h4>API's for instant global money movement</h4>
                      <p>
                      Global payments in seconds. Instantly send money to suppliers, contractors, and partners from around the world.
                      </p>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="vendors" alt="Pay" src='/img/graph-vendor.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>
                <div className="StackCardVert">
                  <div className="StackCardVertTxt">
                    <div>
                      <h4>Virtual Accounts</h4>
                      <p>
                      Setup a digital account to manage operations in USDC or any stablecoin.                      </p>
                    </div>
                  </div>
                  <div className="StackCardVertImg">
                    <div>
                    <img id="digital" alt="Digital" src='/img/graph-digital.svg' width={400} height={400} />
                    </div>
                  </div>
                </div>               
              </div>
              

              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCardFull">
                  <div className="StackCardTxt">
                    <div>
                      <h4>Connect your company to decentralized ledger technology</h4>
                      <p>
                      Get started with the fastest payment rails to speed up every aspect of your business - from cash flow to settlement. 
                      </p>
                      <div className="ButtonGroup mt-6">
                  <div className="AppBtn">
                    <Link href="/getstarted"><button>Explore more <Arrow_Icon /></button></Link>
                  </div>
                </div>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="business" alt="Pay" src='/img/graph-business.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>              
              </div>

              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCard">
                  <div className="StackCardTxt">
                    <div>
                      <h4>Integrate with your existing finance stack</h4>
                      <p>
                      Integrate with popular accounting solutions to auto-sync bill pay transactions and pull-in purchase orders and amortization schedules, accelerating your AP workflow.
                      </p>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="logos" alt="Pay" src='/img/graph-logos.png' width={500} height={500} />
                    </div>
                  </div>
                </div>  

                <div className="StackCardVert">
                  <div className="StackCardVertTxt">
                    <div>
                      <h4>Instant bank transfers</h4>
                      <p>
                      Accelerate your payments experience with stablecoins, Instant ACH, and RTP to get paid faster.                      </p>
                    </div>
                  </div>
                  <div className="StackCardVertImg">
                    <div>
                    <img id="instant" alt="Digital" src='/img/graph-instant.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>               
              </div>
          </div>
              <div className='CenterWrap mt-4 animation-up' data-animate="slide-up">
                <div className="ButtonGroup mt-5">
                  <div className="AppBtn">
                    <Link href="/getstarted"><button>Start a Payment <Arrow_Icon /></button></Link>
                  </div>
                </div>
              </div>
        </div>
      </section>

        {/* PRODUCT SECTION */}

        <section className="CoalSectionWrap" id="customers">
          <div className="CenterSection">
            <div className="LineHeading animation-up" data-animate="slide-up">
              <h6 className='subtitle'>Customers</h6>
              <h1>
                  <span>See why our</span>
                  <Image alt="HIFI" src='/icons/hifi-arrow-white.svg' width={80} height={80} />
              </h1>
              <h1>
                <span className="MainGrad">customers love us</span>
              </h1>
            </div>
            <div className='line-wrap'>
              <img className="line-svg" alt="HIFI" src='/img/line-angle.svg' width={1000} height={1000} />
            </div>

            <div>
              <div className="CustomerBox">
                <div className="CustomerCard yellow animation-up " data-animate="slide-up">
                  <h6>Multi-Currency Agnostic</h6>
                  <p>
                  Gain access to stablecoins like USDC and USDT directly to your digital account.                  
                  </p>
                </div>
                <div className="CustomerCard blue animation-up delay-1" data-animate="slide-up">
                  <h6>Near-Zero Cost</h6>
                  <p>
                    No minimums. No annual contracts. No Integration fees.
                  </p>
                </div>
                <div className="CustomerCard animation-up delay-2" data-animate="slide-up">
                  <h6>Hyper-Speed Settlement</h6>
                  <p>
                  Never wait weeks for payments, move money across the world in seconds.                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="SectionWrap" id="build">
          <div className="BaseSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                <h6 className='subtitle'>Why HIFI</h6>
                <div>
                <h2><span>The future of business is</span>
                <br />
                <span className='MainGrad'>default global</span>
                </h2>
              </div>
            </div>

            <div className='BuildCardWrap mt-5 animation-up' data-animate="slide-up">
              <div className='BuildCardTop'>
                <h4><span>The fastest way to pay, receive,</span>
                <br />
                <span className='MainGrad'>and process global payments.</span>
                </h4>
                <div className="ButtonGroup">
                  <div className="AppBtn white">
                    <Link href="/getstarted"><button>Start a Payment <Arrow_Icon /></button></Link>
                  </div>
                </div>
              </div>

              <div className='BuildCard'>
                <div className="FeaturesCards">
                  <div className="FeaturesCardWrap animation-up" data-animate="slide-up">
                      <div className="FeaturesCardInner">
                        <div className="FeaturesCardImg">                  
                          <img alt="HIFI" src='/icons/arrows.svg' width={40} height={40} />
                        </div>
                        <div className="FeaturesCardTxt">
                        <h6>No Delays</h6>
                          <p>
                          Reduce settlement time from days to seconds. Experience
                        <span className="text-orange"> faster access to funds</span> and improved cash flow.</p>
                        </div>
                      </div>
                  </div>
                  <div className="FeaturesCardWrap animation-up delay-1" data-animate="slide-up">
                      <div className="FeaturesCardInner">
                        <div className="FeaturesCardImg">                  
                        <img alt="HIFI" src='/icons/spinner.svg' width={40} height={40} />
                        </div>
                        <div className="FeaturesCardTxt">
                        <h6>Reduce Costs</h6>
                          <p> Benefit from 
                            <span className="text-orange"> near zero cost transactions</span>, reducing overhead expenses and optimizing your financial operations.
                          </p>
                        </div>
                      </div>
                  </div>
                  <div className="FeaturesCardWrap animation-up delay-2" data-animate="slide-up">
                      <div className="FeaturesCardInner">
                        <div className="FeaturesCardImg">                  
                        <img alt="HIFI" src='/icons/global.svg' width={40} height={40} />
                        </div>
                        <div className="FeaturesCardTxt">
                        <h6>Global Payments</h6>
                          <p>Seamlessly execute
                          <span className="text-orange"> cross-border payments</span>, to reach suppliers, partners, and customers around the world.
                          </p>
                        </div>
                      </div>
                  </div>
                  <div className="FeaturesCardWrap animation-up delay-3" data-animate="slide-up">
                      <div className="FeaturesCardInner">
                        <div className="FeaturesCardImg">                  
                        <img alt="HIFI" src='/icons/stop.svg' width={40} height={40} />
                        </div>
                        <div className="FeaturesCardTxt">
                        <h6>Minimize Fraud</h6>
                          <p>Leverage
                          <span className="text-orange"> real time monitoring</span> to prevent fraudulent activity before it can impact your operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL SECTION */}

        <section className="SectionWrap" id="globalpay">
          <div className="SideSection Left animation-up" data-animate="slide-up">

            <div className="SideTxt">
              <div>
                <h6 className='subtitle'>How it Works</h6>
                <h2><span>Global payments</span>
                <br />
                <span className='MainGrad'>Engineered for Speed</span>
                </h2>
              </div>
              
              <div className="GlobalBox">

                <div className="GlobalCard animation-right" data-animate="slide-right">
                  <div className='imageline-wrap'>     
                    <div className='line-border'></div>              
                    <img alt="HIFI" src='/icons/dollar.svg' width={80} height={80} />
                  </div>
                  <div>
                    <h5>Connect bank account</h5>
                    <p>
                    Create a HIFI account and connect your business bank account.
                    </p>
                  </div>                     
                </div>

                <div className="GlobalCard animation-right delay-1" data-animate="slide-right">
                  <div className='imageline-wrap'>  
                    <div className='line-border'></div>                 
                    <img id="arrow" alt="HIFI" src='/icons/hifi-arrow.svg' width={80} height={80} />
                  </div>
                  <div>
                    <h5>Send USD payment</h5>
                    <p>
                    The transaction is moved in stablecoin and processed instantly.               
                    </p>
                  </div>                     
                </div>

                <div className="GlobalCard animation-right delay-2" data-animate="slide-right">
                  <div className='imageline-wrap'>     
                    <div className='line-border'></div>              
                    <img id="pound" alt="HIFI" src='/icons/pound.svg' width={80} height={80} />
                  </div>
                  <div>
                    <h5>Settle in seconds</h5>
                    <p>
                    Payment is settled in recipients desired currency, in seconds.               
                    </p>
                  </div>                     
                </div>
              </div>
            </div>

            <div className="SideImg">
              <div className="ImgGroup">
                <Image className="image-1" alt="algo" src='/img/howitworks.jpg' width={500} height={500} loading="eager"/>
                <img className="image-2" alt="algo" src='/img/howitworks.svg' width={500} height={500} loading="eager"/>
              </div>
            </div>

          </div>
      </section>

      <section className="SectionWrap" id="slogan">
        <div className="CenterSection">
            <p>Get started in minutes</p>
            <div>
              <h2><span>Built to take your business</span>
              <br />
              <span className='MainGrad'>further, faster.</span>
              </h2>
            </div>
            <div className="ButtonGroup mt-5">
              <div className="AppBtn white">
                <Link href="/getstarted"><button>Start a Payment <Arrow_Icon /></button></Link>
              </div>
            </div>

          </div>
        </section>

      <Footer />

    </main>
  );
}
