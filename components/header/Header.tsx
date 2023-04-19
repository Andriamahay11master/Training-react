import * as React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header>
      <div className="headerLeft">
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div className="headerRight">
        <ul>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="" className="btn btnlog">
              Log in
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
