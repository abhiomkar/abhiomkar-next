import Layout from '../components/layout';
import firebase from 'firebase/app';
import 'firebase/database';
// import fetch from 'isomorphic-unfetch';

const Photography = (props) => (
  <Layout>
    <div>This is photography</div>
    {props.data.map((category) => {
      return category.photo_urls.map((photoUrl) => {
        return (<img src={photoUrl} />);
      });
    })}
  </Layout>
);

Photography.getInitialProps = async () => {
  const config = {
    databaseURL: 'https://abhiomkar-in.firebaseio.com',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const db = firebase.database();
  let data = [];
  await db.ref('/').once('value').then((snapshot) => {
    data = snapshot.val();
    // console.log(data);
  });
  return {
    data: data,
  };
};

export default Photography;
