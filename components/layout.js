import Head from 'next/head';
import Header from './header';

const gaAnalyticsTrackCode = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-7271166-2');`;

const Layout = (props) => (
  <div className='main-container'>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src='https://www.googletagmanager.com/gtag/js?id=UA-7271166-2'></script>
      <script dangerouslySetInnerHTML={{ __html: gaAnalyticsTrackCode}} />
    </Head>
    <Header />
    <div className={`body-content ${props.fullWidth ? 'full-width' : ''}`}>
      {props.children}
    </div>
  </div>
);

import './layout.scss';

import '../pages/index.scss';
import '../pages/projects.scss';
import '../pages/photography.scss';
import '../pages/contact.scss';
export default Layout;
