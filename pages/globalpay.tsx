import React, { useEffect, useState } from 'react';
import MainHeader from "../components/toolbar/header";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import AnimationTrigger from '../components/AnimationTrigger';
import useMediaQuery from "../hooks/useMediaQuery";
import { Meta } from '../components/head/Meta';

export default function Hifipay() {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 480px)');
  
  return (
    <main className="Hifipay">
     <AnimationTrigger />
      <div>
       <MainHeader useWhite={false} 
          meta={<Meta 
            title="Global Payments" 
            metaTitle="Global Payments │ HIFI" 
            metaImg="https://hifibridge.com/thumb/thumb-globalpay.png" 
            description="Send funds directly to global vendors and individuals directly from your bank account —with instant settlement, in seconds." />} 
            />
      </div>

      {/*  HERO SECTION */}

      <section className="HeroSectionWrap" id="global-hero">
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
          <div className="SideTxt">
            <div>
              <h6 className='subtitle'>Global Payments</h6>
              <h2><span>Send payments to</span>
              <br />
              <span className='MainGrad'>anyone, anywhere</span>
              </h2>
            </div>
              <h6 className='hero-subtitle'>
              Send funds directly to global vendors and individuals directly from your bank account 
              &#8212;with instant settlement, in seconds.
             </h6>
             <div className="AppBtn mt-7">
            <Link target="" href="/getstarted"><button>Start a Payment<Arrow_Icon /></button></Link>
            </div>
          </div>
          <div className="SideImg">
              <div className="ImgGroup">
                <img alt="algo" src='/img/globalpay.svg' width={500} height={500} loading="eager"/>
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* MAIN FEATURES SECTION */}       

         <section className="SectionWrap" id="software">
          <div className="SquareSection">
            <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                {/* <h6 className='subtitle'>Why HIFI</h6> */}
                <div>
                  <h2><span>Move money across borders</span>
                  <br />
                  <span className='MainGrad'>for global businesses</span>
                  </h2>
                  <h6>
                  Process payments, initiate payouts, and transfer funds arounds the world - at the speed of light.
                  </h6>
                </div>
              </div>
            </div>
      
            <div className="CardGroup">
            
              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                  <img src="/img/features-1.svg" alt="Logo" />
                </div>
                <div className="CardTxt">
                  <h6>Boost your revenue</h6>
                  <p>
                  Built to maximize cost-savings and allow businesses to secure more cash per transaction.                  
                  </p>
                </div>
              </div>      

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                  <img src="/img/features-2.svg" alt="Logo" />
                </div>
                <div className="CardTxt">
                  <h6>Smart transaction routing</h6>
                  <p>
                  Transact with precision and speed across multiple payment chains to identify the fastest and most cost-effective rail.                  </p>
                </div>
              </div>       

              <div className="CardWrap animation-up" data-animate="slide-up">
                <div className="CardImg">
                  <img src="/img/features-3.svg" alt="Logo" />
                </div>
                <div className="CardTxt">
                  <h6>Hyper-speed settlement</h6>
                  <p>
                  Never wait weeks for payments, move money in seconds.                  
                  </p>
                </div>
              </div>              
      
            </div>

         <div className='LongCardWrap'>
            <div className="LongCard animation-up" data-animate="slide-up">
              <div className="row-wrap-between">
                <h3>100x</h3>
                <div className='icon-wrap'>
                  <img src="/icons/star.svg" alt="HIFI" />
                </div>
              </div>
              <div>
                <p>
                Gain access to the fastest payments rails to accelerate settlement to seconds.                </p>
              </div>
            </div> 

            <div className="LongCard animation-up" data-animate="slide-up">
              <div className="row-wrap-between">
                <h3>24/7/365</h3>
                <div className='icon-wrap'>
                  <img id="calendar" src="/icons/calendar.svg" alt="HIFI" />
                </div>
              </div>
              <div>
                <p>
                No weekends. No bank holidays. No downtime. Move money freely whenever you do business.                </p>
              </div>
            </div> 

          </div>

          <div className='CenterWrap mt-4'>
                <div className="ButtonGroup mt-5">
                  <div className="AppBtn">
                    <Link href="/getstarted"><button>Start a Payment <Arrow_Icon /></button></Link>
                  </div>
                </div>
              </div>

          </div>
        </section>

       {/*  FEATURES SECTION */}

       <section className="CoalSectionWrap">
          <div className="CenterSection">
            <div className="LineHeading animation-up" data-animate="slide-up">
              <h6 className='subtitle'>The challenge</h6>
              <h1>
                  <span>What problem</span>
              </h1>
              <h1>
                <span className="MainGrad">does HIFI solve?</span>
              </h1>
            </div>
            <div className='line-wrap'>
              <img className="line-svg" alt="HIFI" src='/img/line-angle.svg' width={1000} height={1000} />
            </div>

            <div>
              <div className="SolutionBox">
                <div className="SolutionCard animation-up" data-animate="slide-up">
                  <h4>30 days</h4>
                  <h6>
                  Average time to complete a global supplier payment                
                  </h6>
                </div>
                <div className="SolutionCard animation-up" data-animate="slide-up">
                  <h4>1 in 5</h4>
                  <h6>
                    People experience payments fraud
                  </h6>
                </div>
                <div className="SolutionCard animation-up" data-animate="slide-up">
                  <h4>$8</h4>
                  <h6>
                  Average cost of a single vendor payment                  
                  </h6>
                </div>
                <div className="SolutionCard animation-up" data-animate="slide-up">
                  <h4>47%</h4>
                  <h6>
                  Nearly half experience payment delays               
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="SectionWrap" id="stack">
         <div className="StackSection">

            <div className="">
          
              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCardWide">
                  <div className="StackCardTxt">
                    <div>
                    <h6 className='subtitle'>The solution</h6>

                      <h3><span>An introduction to</span>
                      <br />
                      <span className='MainGrad'>Distributed Ledger Technology</span>
                      </h3>
                    </div>
                    <p>
                    Traditional payments take up to 30 days to settle due to a series of network banks in the SWIFT network. SWIFT was developed in 1973 - over 50 years ago. With HIFI, we have developed the OS for the money to move globally over a network of anchors across various blockchains - we call this distributed ledger technology. 
                    </p>
                    <br />
                    <p>
                     When you send a payment on HIFI, we detect the fastest and most-cost effective blockchain to route the transaction across. It’s the new SWIFT network - for the next chapter of the internet.  
                    </p>
                    <br />

                    <div className="ButtonGroup mt-3">
                      <div className="AppBtn">
                        <Link href="/getstarted"><button>Explore more <Arrow_Icon /></button></Link>
                      </div>
                    </div>
                  </div>

                  <div className="StackCardImg Wide">
                    <div>
                    <img id="scheme" alt="Pay" src='/img/scheme.svg' width={500} height={500} />
                    </div>
                  </div>

                </div>              
              </div>

          </div>
        </div>
      </section>

        {/* SLOGAN SECTION */}

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

      {/* <section className="SectionWrap" id="faq1">
        <div className="AssetsFaqSection animation-up" data-animate="slide-up">

          <h3>Learning Center</h3>
          <p>Discover answers to frequently asked questions. Need some help? Reach out to our team 
            <a href="mailto:contact@hifibridge.com"className="text-blue"> here.</a>
          </p>

          <GeneralFaq />
      
        </div>

      </section> */}

      <Footer />

    </main>
  );
}

