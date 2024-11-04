import React, { useEffect, useState } from 'react';
import MainHeader from "../components/toolbar/header";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import AnimationTrigger from '../components/AnimationTrigger';
import useMediaQuery from "../hooks/useMediaQuery";
import { Meta } from '../components/head/Meta';
import { GeneralFaq } from '../components/GeneralFaq';
import { TextCarousel } from '../components/carousel/TextCarousel';

export default function Hifipay() {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 480px)');
  
  return (
    <main className="Hifipay">
     <AnimationTrigger />
      <div>
       <MainHeader useWhite={false} 
          meta={<Meta 
            title="Virtual Accounts" 
            metaTitle="Virtual Accounts │ HIFI" 
            metaImg="https://hifibridge.com/thumb/thumb-accounts.png" 
            description="Open and manage virtual accounts to move into and out of any dollar and stablecoin." />} 
            />
      </div>

      {/*  HERO SECTION */}

      <section className="HeroSectionWrap" id="virtual-hero">
        <div className="HeroSection">
          <div className="HeroContent animation-up" data-animate="slide-up">
          <div className="SideTxt">
            <div>
              <h6 className='subtitle'>Virtual Accounts</h6>
              <h2><span>Launch virtual accounts 
              <br />to convert between </span>
              <br />
              <span className='MainGrad'> dollars and stablecoins</span>
              </h2>
            </div>
              <h6 className='hero-subtitle'>
              Open and manage virtual accounts to move into and out of any dollar and stablecoin.
             </h6>
             <div className="AppBtn mt-7">
            <Link target="" href="/getstarted"><button>Request Access<Arrow_Icon /></button></Link>
            </div>
          </div>
          <div className="SideImg">
              <div className="ImgGroup">
                <img alt="algo" src='/img/graph-virtual.svg' width={500} height={500} loading="eager"/>
              </div>
            </div>
          </div>
        </div>
      </section>


      <TextCarousel />

          
       {/* STACK SECTION */}

       <section className="SectionWrap" id="virtual-stack">
         <div className="StackSection">
            <div className="animation-up" data-animate="slide-up">
              <div className='CenterHeading'>
              <div className='CenterWrap'>
                <h2><span>Open and manage </span>
                
                <span className='MainGrad'>virtual accounts</span>
                </h2>
                <h6 className='description'>
                Automate and streamline transactions, track expenses, and optimize your financial activities with ease.                </h6>
              </div>
              </div>
            </div>

            <div className="StackCardGroup">
          
              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCard">
                  <div className="StackCardTxt">
                    <div>
                      <h4>Dollar-to-stablecoin orchestration</h4>
                      <p>
                      Seamlessly move in and out of dollars with a virtual account. Convert between dollars and stablecoins in any format for your customers.                      </p>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="stablecoin" alt="Pay" src='/img/graph-stablecoin.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>
                
          
              </div>

              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCard">
                  <div className="StackCardTxt">
                    <div>
                      <h4>Unique Routing and Account Numbers</h4>
                      <p>
                      Gain access to a real bank account with full ACH capabilities, unique account and routing numbers to store digital dollars.                      </p>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="routing" alt="Pay" src='/img/graph-routing.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>  


              </div>

              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCard">
                  <div className="StackCardTxt">
                    <div>
                      <h4>Flexible Business and Individual Accounts</h4>
                      <p>
                      Open accounts for businesses or individuals with both KYB and KYC due dilligence covered by HIFI.
                      </p>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="flexible" alt="Pay" src='/img/graph-flexible.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>  
                              
              </div>

              <div className="StackCardWrap animation-up" data-animate="slide-up">
                <div className="StackCard">
                  <div className="StackCardTxt">
                    <div>
                      <h4>Instant Payment Clearing</h4>
                      <p>
                      Instant account funding and withdrawals with real-time payment rails any way you choose.
                      </p>
                    </div>
                  </div>
                  <div className="StackCardImg">
                    <div>
                    <img id="clearing" alt="Pay" src='/img/graph-clearing.svg' width={500} height={500} />
                    </div>
                  </div>
                </div>  
                              
              </div>
            </div>

            {/* <div className='CenterWrap mt-4 animation-up' data-animate="slide-up">
              <div className="ButtonGroup mt-5">
                <div className="AppBtn">
                  <Link href="/getstarted"><button>Request Access <Arrow_Icon /></button></Link>
                </div>
              </div>
            </div> */}

        </div>
      </section>


      <section className="SectionWrap" id="faq1">
        <div className="AssetsFaqSection animation-up" data-animate="slide-up">

          <h3>What are virtual accounts?</h3>
          {/* <p>Discover answers to frequently asked questions. Need some help? Reach out to our team 
            <a href="mailto:contact@hifibridge.com"className="text-blue"> here.</a>
          </p> */}

          <GeneralFaq />
      
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


      <Footer />

    </main>
  );
}

