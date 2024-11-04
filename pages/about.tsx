import MainHeader from "../components/toolbar/header";
import Image from "next/image";
import Link from 'next/link';
import {Footer} from '../components/Footer';
import Arrow_Icon from '../components/SVG/Arrow_Icon';
import AnimationTrigger from '../components/AnimationTrigger';
import { GetStaticProps } from 'next';
import { BlogArchiveConfig, Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';
import { Meta } from '../components/head/Meta';

type IAboutProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
};

export default function About(props: IAboutProps) {
  const { allPosts, initialPosts } = props;

  return (
    <main id="About">
      <AnimationTrigger />
      <div>
        <MainHeader useWhite={true} 
          meta={<Meta 
            title="About Us" 
            metaTitle="About Us │ HIFI" 
            metaImg="https://hifibridge.com/thumb/thumb-main.png" 
            description="The HiFi team comes together and brings decades of leadership experience in building world class products that 
            connect the lives of billions of people." />} 
            />
      </div>

      <section className="HeroSectionWrap" id="about-hero">
        <div className="HeroSection">
          <div className="HeroContent">
          <div className="SideTxt animation-up" data-animate="slide-up">
            <div>
              <h6 className='subtitle'>About Us</h6>
              <h1><span>Building the next generation of financial connectivity</span>
              {/* <span className=''>global commerce</span> */}
              </h1>
            </div>
              <h6 className='description'>
              We are developing the system to reshape how money and value move for the next chapter of the internet.
              </h6>
             {/* <div className="AppBtn mt-5">
            <Link target="" href="/getstarted"><button>Contact Us</button></Link>
            </div> */}
          </div> 
      <div className="SideImg animation-fade" data-animate="fade">
        <div className="ImgBoxContainer">
          <div className="ImgBoxWrap"> 
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-1.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-2.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-3.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-4.jpg' width={400} height={340} />
            </div>
          </div> 

          <div className="ImgBoxWrap"> 
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-5.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-6.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-7.jpg' width={400} height={340} />
            </div>
          </div> 

          <div className="ImgBoxWrap"> 
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-8.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-9.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-10.jpg' width={400} height={340} />
            </div>
            <div className="ImgBox">
                <Image alt="img" src='/img/grid-11.jpg' width={400} height={340} />
            </div>
          </div> 
        </div>
        </div>


          </div>
        </div>
      </section>

      <section className="CoalSectionWrap" id="about">
        <div className="CenterSection">
           <div className="LineHeading animation-up" data-animate="slide-up">
              <h6 className='subtitle'>Our Vision</h6>
              <h1>
                  <span>Money should move as</span>
                  {/* <Image alt="HIFI" src='/icons/hifi-arrow-white.svg' width={80} height={80} /> */}
              </h1>
              <h1>
                <span className="MainGrad">fast as the internet</span>
              </h1>
            </div>
            <div className='line-wrap'>
              <img className="line-svg" alt="HIFI" src='/img/line-angle.svg' width={1000} height={1000} />
            </div>

          <div className="AboutContent">
            <div>
              <div className="AboutSideContent Left animation-up" data-animate="slide-up">
                <div className="SideTxt">
                  <h4><span className="">Business is now default global.</span></h4>
                  <p><span className="AboutSub">
                  For the past 20 years, software has eaten the world. 
                  </span></p>
                  <p className="mt-3">
                  Data now travels at lightpeed, information moves freely across borders, and the future of business is now default global. The globalization of money however, still remains a challenge. 
                  </p>
                </div>

                <div className="SideImg">
                </div>
              </div>

              <div className="AboutSideContent Right animation-up" data-animate="slide-up">
              
                <div className="SideImg">
                </div>
                
                <div className="SideTxt">
                  <h4><span className="">It’s time to accelerate into the future.</span></h4>
                  <p><span className="AboutSub">
                  We see a future where businesses will move money seamlessly across chains and banks to unleash endless business opportunities.                   
                  </span></p>
                  <p className="mt-3">
                  HIFI was built on the premise of creating an operating system to allow businesses to integrate into every chain, banking, and payment rail in world.
                  </p>
                </div>
              </div>

              <div className="AboutSideContent Left animation-up" data-animate="slide-up">
                <div className="SideTxt">
                  <h4><span className="">Building the future of finance for everyone.</span></h4>
                  <p><span className="AboutSub">
                  Now, we sit at a new intersection of the next generational shift with blockchain technology.                  
                  </span></p>
                  <p className="mt-3">
                  At HIFI, we are so excited to continue to create new tools that will shapes how money moves across borders - built for everyone, everywhere.
                  </p>
                </div>

                <div className="SideImg">
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>

      <section className="SectionWrap" id="values">
        <div className="ValuesSection">
          <div className="ValuesContent">

           <div className="animation-up" data-animate="slide-up">
              <h6 className="subtitle">Our Values</h6>
              <h2>We Believe</h2>
              <p className='paragraph'>
              At HiFi, we respect the visionaries that came before us - however, we are taking a radically different approach than those that built the world of big tech and traditional finance. We understand that the path to building a redefined financial future for everyone starts with values we bake into our work every day.
              </p>
            </div>

            <div className="ValuesCardsWrap">

              <div className="ValuesCards">

                <div className="ValuesCardWrap animation-up" data-animate="slide-up">
                    <div className="ValuesCardInner">
                      {/* <div className="ValuesCardImg">                  
                        <img alt="HIFI" src='/icons/circle-green.svg' width={80} height={80} />
                      </div> */}
                      <h5 className="WarmGrad">Clear Transparency</h5>
                      <div className="ValuesCardTxt">
                        <h6>Customers should know exactly what’s under the hood.</h6>
                        <p>
                        Whether you're an investor, executive, or team member - everyone is held to the same standard of radical transparency and accountability.               
                        </p>
                        <p>
                        We are building a fair, open, and more accessible financial system and we understand that begins with us.               
                        </p>
                      </div>
                    </div>
                </div>

                <div className="ValuesCardWrap animation-up" data-animate="slide-up">
                    <div className="ValuesCardInner">
                      {/* <div className="ValuesCardImg">                  
                      <img alt="HIFI" src='/icons/circle-green.svg' width={80} height={80} />
                      </div> */}
                      <h5 className="WarmGrad">Humans First</h5>
                      <div className="ValuesCardTxt">
                        <h6>Everyone deserves a fair share.</h6>
                        <p>
                        We listen to our customers and create our products with the intention that they will help the lives of people everyday. 
                        </p>
                        <p>
                        We know our products will be used by real humans, each with their own unique lives, thoughts and feelings. Our products are built with empathy to be accessible by everyone, everywhere.
                        </p>
                      </div>
                    </div>
                </div>

              </div>

              <div className="ValuesCards Blue">

                <div className="ValuesCardWrap animation-up" data-animate="slide-up">
                    <div className="ValuesCardInner">
                      {/* <div className="ValuesCardImg">                  
                      <img alt="HIFI" src='/icons/circle-green.svg' width={80} height={80} />
                      </div> */}
                      <h5 className="BlueGrad">Privacy and Security Centered</h5>
                      <div className="ValuesCardTxt">
                        <h6>Our customer’s data and privacy will always be our top priority.</h6>
                        <p>
                        We firmly believe in our customers' right to data privacy, and we fully commit to safeguarding it. 
                        </p>
                        <p>
                        Utilizing top preventive measures, we actively mitigate data security risks. We aim to serve as a symbol of trust and reliability for best security practices in the new financial world.
                        </p>
                      </div>
                    </div>
                </div>

                <div className="ValuesCardWrap animation-up" data-animate="slide-up">
                    <div className="ValuesCardInner">
                      {/* <div className="ValuesCardImg">                  
                      <img alt="HIFI" src='/icons/circle-green.svg' width={80} height={80} />
                      </div> */}
                      <h5 className="BlueGrad">Think Big, Do Bigger</h5>
                      <div className="ValuesCardTxt ">
                        <h6>We have big ambitious plans and believe no goal is ever out of reach.</h6>
                        <p>
                        We reward big, bold bets and comprise ourselves of a stellar team of dreamers and doers. 
                        </p>
                        <p>
                        We take a ‘zero-to-one’ approach and believe the most disruptive tech in the world all starts with just an idea and the firm belief it can be built into something life changing.
                        </p>
                      </div>
                    </div>
                </div>

              </div>
              
            </div>
          </div>

        </div>


      </section>

      <section className="SectionWrap" id="team">
          <div className="SquareSection animation-up" data-animate="slide-up">
          <div className="SideSection Left" >
            <div className="SideTxt">
              <div>
                <h6 className="subtitle">Our People</h6>
                <h3><span className="BlueGrad">A world class </span>founding team</h3>
                  <div>
                  <p>
                  The HiFi team comes together and brings decades of leadership experience in building world class products that connect the lives of billions of people from companies like Facebook, Uber, Apple, Citi Group, Coinbase, and Polygon.
                  </p>
                  <p className="mt-3">
                  Our teams are comprised of people from diverse backgrounds and industries ranging from world class tech and finance organizations, startup founders, venture capitalists, and researchers.
                  </p>
                  <p className="mt-3">
                  Our purpose comes from the love of building amazing products that ignite a new world of possibilities to improve the lives of people everyday.
                  </p>
                </div>
              </div>
            </div>
            <div className="SideImg">
              <div className="">
                <img alt="algo" src='/img/team2.png' width={500} height={500} loading="eager"/>
              </div>
            </div>
          

          </div>
          <div>
            <div className="CenterWrap">
            {/* <h6>Not our first rodeo</h6> */}
            </div>
            <div className="LogoGroup">
              <Image src="/logos/meta.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/uber.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/citi.png" height="50" width="50" alt="Logo" />
              <Image className="WideImg" src="/logos/apple.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/coinbase.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/polygon.png" height="50" width="50" alt="Logo" />

            </div>
          </div>
          </div>
      </section>

      <section className="SectionWrap" id="growth">
        <div className="CenterSection">
           <div>
              <div className="CenterHeading animation-up" data-animate="slide-up">
                {/* <h6 className='subtitle'>Why HIFI</h6> */}
                <div>
                  <h6 className="subtitle">Where are we going</h6>
                  <h2><span>The future of money movement</span>
                  <br />
                  <span className='PinkGrad'>is powered by HIFI</span>
                  </h2>
                </div>
              </div>
            </div>
        

          <div className="CardGroup">

            <div className="CardWrap animation-up delay-1" data-animate="slide-up">
              <div className="Card">
                  <div className="CardTxt">
                    <p className="CardSub">Merchant Acceptance</p>
                    <p className="numbers">85%</p>
                    <p>U.S Merchants are planning to accept digital assets by the year 2026.</p>
                    {/* <Link href="/blog" className="CardLearn">Learn More {">"}</Link> */}
                  </div>
              </div>
            </div>

            <div className="CardWrap animation-up delay-2" data-animate="slide-up">
              <div className="Card">
                  <div className="CardTxt">
                    <p className="CardSub">Merchant Impact</p>
                    <p className="numbers">93%</p>
                    <p>Merchants that experience a positive impact on customer metrics when accepting crypto.</p>
                    {/* <Link href="/blog" className="CardLearn">Learn More {">"}</Link> */}
                  </div>
              </div>
            </div>

            <div className="CardWrap animation-up delay-3" data-animate="slide-up">
              <div className="Card">
                  <div className="CardTxt">
                    <p className="CardSub">Customer Sentiment</p>
                    <p className="numbers">3 in 4</p>
                    <p>Customers who expressed the desire to transact with digital assets.</p>
                    {/* <Link href="/blog" className="CardLearn">Learn More {">"}</Link> */}
                  </div>
              </div>
            </div>
            
          </div>
        </div>
        </section>

        <section>
         <div className="PartnerSection">
            <div className="PartnerWrap">
            <h2>Backed by the best.</h2>
            <hr className="backed-line"></hr>
            </div>
            <div className="LogoGroup">
              <Image src="/logos/antler.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/block.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/side.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/lumi.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/stripe.png" height="50" width="50" alt="Logo" />
              <Image src="/logos/visa.png" height="50" width="50" alt="Logo" />
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

      {/* <section className="DivSectionWrap DivLeft" id="careers" data-animate="slide-up">
          <div className="DivSection Left">
            <div className="SideTxt">
            <h3>Want to build <span className="BlueGrad">the future with us?</span></h3>
              <p>
              We have a long road ahead of us with a lot of work to be done. We’re so happy to bring together a team with experience creating life changing products at some of the greatest companies of the past decade across tech and finance.              
              </p>
              <div className="AppBtn green">
                <Link href="mailto:contact@hifibridge.com"><button className="btn-green">Email our Team</button></Link>
              </div>
            </div>
          </div>
        </section> */}
{/* 
        <section className="NewsSectionWrap">
          <div className="NewsSection">
            <div className="NewsContent">
              <div className='NewsTitle'>
                <h1>In the News</h1>
              </div>
              <RecentPosts allPosts={allPosts}/>
              </div>
          </div>
        </section> */}

      <Footer />

    </main>
  );
}


// export const getStaticProps: GetStaticProps<IAboutProps> = async () => {
//   const posts = getAllPosts(Config.post_fields);

//   return {
//     props: {
//       allPosts: posts,
//       initialPosts: posts.slice(0, BlogArchiveConfig.blog_pagination_size),
//       categoryCollection: getCategoryCollection(['slug', 'tags']),    
//     },
//   };
// };