import * as React from 'react';
import Header from './src/components/header/Header';
import Footer from './src/components/footer/Footer';
import Banner from './src/components/banner/Banner';
import Listarticle from './src/components/listArticle/Listarticle';
import './App.scss';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Listarticle />
      <Footer />
    </div>
  );
}
