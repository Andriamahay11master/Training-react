import * as React from 'react';
import Header from './src/components/header/Header';
import Footer from './src/components/footer/Footer';
import Banner from './src/components/banner/Banner';
import Listarticle from './src/components/listArticle/Listarticle';
import './App.scss';

export default function App() {
  function loadMore(e) {
    e.stopPropagation();
    alert('load more');
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
