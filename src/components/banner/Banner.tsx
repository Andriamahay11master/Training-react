import * as React from 'react';

export default function Banner() {
  return (
    <div className="bannerBlock">
      <div className="bannerTop">
        <span className="bannerCat">Blog</span>
        <h1 className="bannerTitle">Thoughts and words</h1>
      </div>

      <div className="bannerBottom">
        <div className="bannerBottomCol">
          <figure className="bannerImage">
            <img
              src="https://zupimages.net/up/23/17/g2mn.jpg"
              alt="Image banner"
            />
          </figure>
        </div>
        <div className="bannerBottomCol">
          <p className="bannerDate">
            <span>Category</span>November 22, 2021
          </p>
          <h2 className="bannerItemTitle">
            Pitch termsheet backing validation focus release.
          </h2>
          <div className="bannerInfo">
            <figure className="bannerImageUser">
              <img
                src="https://zupimages.net/up/23/17/zfk4.png"
                alt="Image user"
              />
            </figure>
            <p className="bannerUserName">Chandler Bing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
