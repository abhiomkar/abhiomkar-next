import Layout from '../components/layout';
import firebase from 'firebase/app';
import 'firebase/database';
import React from 'react';

class Photography extends React.Component {
  state = {
    activeCategoryIndex: 0,
  };

  static async getInitialProps() {
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
    });
    return {
      data: data,
    };
  }

  setCategoryActive(activeCategoryIndex) {
    this.setState({activeCategoryIndex});
  }

  renderCategoryNavItem(categoryName, index) {
    const isSelectedClass = index === this.state.activeCategoryIndex ? 'is-selected' : '';
    return (<a key={categoryName} onClick={() => this.setCategoryActive(index)}
        className={`category-link ${isSelectedClass}`}>{categoryName}</a>);
  }

  render() {
    return (
    <Layout fullWidth>
      <div className='container photography-container'>
        <div className='content-wrapper'>
          <h1 className='photography-title'>Photography</h1>

          {/* gallery navigation list */}
          <div className='category-nav'>
            {this.props.data.map((category, index) => this.renderCategoryNavItem(category.name, index))}
          </div>

          {/* photo list */}
          <div className='gallery-list'>
            {this.props.data[this.state.activeCategoryIndex].photo_urls.map((photoUrl) => {
              return (<div className='photo-container' key={photoUrl}>
                        <img src={photoUrl} className='photo' />
                      </div>);
            })}
          </div>
        </div>
      </div>
    </Layout>
    );
  }
}

export default Photography;
