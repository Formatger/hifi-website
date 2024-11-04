import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Exit_Icon from "../SVG/Exit_Icon";
import Link from "next/link";
import Hifibridge_Icon from "../SVG/hifibridge_icon";
import Menu_Icon from "../SVG/Menu_Icon";
import Arrow_Icon from "../SVG/Arrow_Icon";

export const Toolbar = (props: any) => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const toolbarClass = "Toolbar";
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  if (isDesktop) {
    return (
      <div className={toolbarClass}>
        <div className="ToolbarInner">
          <div className="AppName">
            <Link href="/">
              <Hifibridge_Icon />
            </Link>
          </div>
          <div className="ToolbarMenu">{props.children}</div>
          <div className="ButtonGroup right">
            <div className="LoginButton">
              <Link href="https://dashboard.hifibridge.com">
                <button className="">Log In</button>
              </Link>
            </div>
            <div className="LineBtn">
              <Link href="https://www.hifibridge.com/getstarted">
                <button>
                  Start Now
                  <Arrow_Icon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="Toolbar">
          <div className="ToolbarInner">
            <div className="AppName">
              <Link href="/">
                <Hifibridge_Icon />
              </Link>
            </div>
            <div className="ToolbarMenu">
              <div className="">
                <div
                  className={`menu-icon ${burgerMenuOpen ? "active" : ""}`}
                  onClick={toggleBurgerMenu}
                >
                  <div className="burger"></div>
                </div>
              </div>
            </div>

            {burgerMenuOpen && (
              <div className="ToolbarMenuBackdrop" onClick={toggleBurgerMenu}>
                <div className="ToolbarMenuBox">
                  {props.children}
                  <div className="MenuLinks Extra">
                    <Link href="https://dashboard.hifibridge.com">Log In</Link>
                  </div>
                  <div className="LineBtn">
                    <Link href="https://dashboard.hifibridge.com">
                      <button>
                        Start Now
                        <Arrow_Icon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
};
