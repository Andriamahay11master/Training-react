import * as React from 'react';
import Itemarticle from '../itemArticle/Itemarticle';
import { datas } from '../../data.js';

export default function Listarticle() {
  return (
    <div className="listBlock">
      <div className="listBlockBody">
        <h2 className="listBlockTitle">Latest news</h2>
        <div className="listArticleContent">
          {datas.map((data) => (
            <Itemarticle
              key={data.id}
              src={data.src}
              srcAlt={data.srcAlt}
              cat={data.cat}
              dateA={data.dateA}
              desc={data.desc}
              author={data.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
