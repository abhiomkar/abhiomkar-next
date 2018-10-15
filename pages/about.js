import Layout from '../components/layout';
import {withRouter} from 'next/router';

const About = (props) => (
  <div>
    <Layout>
      <div>This is about page.</div>
      <div>This is about {(props.router.query.name)}</div>
    </Layout>
  </div>
);

export default withRouter(About);
