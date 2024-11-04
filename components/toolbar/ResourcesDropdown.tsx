import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from "../../hooks/useMediaQuery";
import Arrow_Icon from '../SVG/Arrow_Icon';

export const ResourcesDropdown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleDropDownHover = () => {
    if (!isMobile) {
      setDropDownOpen(true);
    }
  }

  const handleDropDownLeave = () => {
    if (!isMobile) {
      setDropDownOpen(false);
    }
  }

  const handleDropDownOpen = (event: React.MouseEvent) => {
    if (isMobile) {
      event.stopPropagation();
      setDropDownOpen(!dropDownOpen);
    }
  };
  

  return (
      <div className={`dropdown ${dropDownOpen ? 'open' : ''}`}
            onMouseEnter={handleDropDownHover}
            onMouseLeave={handleDropDownLeave}
            onClick={handleDropDownOpen}>
            
            <div className="dropdown-link">
            <Link href="#" className="dropdown-toggle">Resources</Link>
            {isMobile&& (
            <div className={`arrow ${dropDownOpen ? 'rotate-arrow' : ''}`}>
              <Arrow_Icon />
            </div>
            )}
          </div>
            
            
          {dropDownOpen &&
            <ul className="dropdown-menu">
          
          <li>
            <Link href="/about">
              <div className="dropdown-item">
                <div className="icon">
                <img src="/icons/team.svg" height="24" width="24" alt="Logo" loading='eager'/>
                </div>
                <div className="text">
                  <span>About</span>
                  <small>Learn more about us</small>
                </div>
              </div>
            </Link>
          </li>
          {/* <li>
            <Link href="/careers">
              <div className="dropdown-item">
                <div className="icon">
                <img src="/icons/careers.svg" height="22" width="22" alt="Logo" />
                </div>
                <div className="text">
                  <span>Careers</span>
                  <small>Join our team</small>
                </div>
              </div>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/assets">
              <div className="dropdown-item">
                <div className="icon">
                <img src="/icons/settings.svg" height="24" width="24" alt="Logo" loading='eager'/>
                </div>
                <div className="text">
                  <span>Supported Assets</span>
                  <small>What we support</small>
                </div>
              </div>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/blog">
              <div className="dropdown-item">
                <div className="icon">
                <img src="/icons/blog.svg" height="24" width="24" alt="Logo" />
                </div>
                <div className="text">
                  <span>Blog</span>
                  <small>Read our latest posts</small>
                </div>
              </div>
            </Link>
          </li> */}


        </ul>
        }
    </div>
  );
}

export default ResourcesDropdown;


