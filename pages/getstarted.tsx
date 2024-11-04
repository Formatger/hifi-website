import MainHeader from "../components/toolbar/header";
import {Footer} from '../components/Footer';
import AnimationTrigger from '../components/AnimationTrigger';
import { Meta } from '../components/head/Meta';
import RoundCheck_Icon from '../components/SVG/RoundCheck_Icon';
import CalendlyWidget from '../components/CalendlyWidget';
import Link from "next/link";
import Arrow_Icon from "../components/SVG/Arrow_Icon";
export default function Start() {

  // const [activeSection, setActiveSection] = useState<string>("default");

  return (
    <main className="GetStarted">
      <AnimationTrigger />
      <div>
       <MainHeader useWhite={true}  
          meta={<Meta 
            title="Get Started with HIFI" 
            metaTitle="Get Started │ HIFI" 
            metaImg="https://hifibridge.com/thumb/thumb-main.png" 
            description="Ready to Modernize Your Payments? Let’s Get There Together." />} 
            />
      </div>

      <section className="SectionWrap" id="start">
        <div className="StartSection">
          <div className="StartContent Left animation-up" data-animate="slide-up">
            <div className="SideTxt">
              <h3>Ready to Modernize Your Payments? 
                Let’s Get There Together.</h3>
              <div className="RowListWrap">
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
                    <h6><span className="text-blue">Unlock Next-Gen Payments Growth</span></h6>
                    <p>
                    Accelerate your operations and watch your revenue growth soar with a reimagined payments stack.                    </p>
                  </div>
                </div>


                <div className="RowList Title">              
                  <div><RoundCheck_Icon /></div>
                  <div className="RowListText">
                    <h6><span className="text-blue">Leverage the Future of Commerce</span></h6>
                    <p>
                    Leverage our multi-wallet system and reach millions of new customers.                    
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

            <div className="SideImg White">
              <CalendlyWidget />
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

      {/* <section className="AssetsFaqWrap">
        <div className="AssetsFaqSection animation-up" data-animate="slide-up">

          <h3>Learning Center</h3>
          <p>Discover answers to frequently asked questions. Need some help? Reach out to our team 
            <a href="mailto:contact@hifibridge.com"className="text-blue"> here.</a>
          </p>

          <AssetsFaq />
      
        </div>

      </section> */}

      <Footer />

    

    </main>
  );
}


