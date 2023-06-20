import * as React from 'react';
import Header from './src/components/header/Header';
import Footer from './src/components/footer/Footer';
import Banner from './src/components/banner/Banner';
import Listarticle from './src/components/listArticle/Listarticle';
import './App.scss';
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);
  function loadMore(e) {
    e.stopPropagation();
    setIndex(index + 1);
    alert('load more' + index);
  }
  return (
    <div>
      <Header />
      <Banner />
      <Listarticle handleClick={loadMore} />
      <Footer />
    </div>
  );
}
