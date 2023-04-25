import * as React from 'react';

export default function Itemarticle({ src, srcAlt, cat, dateA, desc, author }) {
  return (
    <div className="itemArticle">
      <div className="itemTop">
        <img src={src} alt={srcAlt} />
      </div>
      <div className="itemBottom">
        <p className="itemDate">
          <span>{dateA}</span>
          {cat}
        </p>
        <p className="itemDesc">{desc}</p>
        <div className="itemAuthor">
          <figure>
            <img src={author.src} alt={author.srcAlt} />
          </figure>
          <p>{author.name}</p>
        </div>
      </div>
    </div>
  );
}
