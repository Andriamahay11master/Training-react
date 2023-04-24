import * as React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <a href="">
          <img src="images/Logo.svg" alt="Logo image" />
        </a>
        <p className="footerText">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="footerText rightsReserved">All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="footerList">
          <div className="footerListItem">
            <h3 className="footerTitle">Landings</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
          <div className="footerListItem">
            <h3 className="footerTitle">Company</h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Careers</a> <span className="tag">Hiring!</span>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
          <div className="footerListItem">
            <h3 className="footerTitle">Resources</h3>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="d-none-desk footerText rightsReserved">
        All rights reserved.
      </p>
    </footer>
  );
}
