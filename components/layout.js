import Header from './header';

const Layout = (props) => (
  <div className='main-container'>
    <Header />
    <div className='body-content'>
      {props.children}
    </div>
  </div>
);

export default Layout;
