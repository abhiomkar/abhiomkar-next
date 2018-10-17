import Header from './header';
import './layout.scss';

const Layout = (props) => (
  <div className='main-container'>
    <Header />
    <div className={`body-content ${props.fullWidth ? 'full-width' : ''}`}>
      {props.children}
    </div>
  </div>
);

export default Layout;
