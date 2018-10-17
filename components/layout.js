import Head from 'next/head';
import Header from './header';

const Layout = (props) => (
  <div className='main-container'>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
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
import '../pages/about.scss';
import '../pages/contact.scss';
export default Layout;
