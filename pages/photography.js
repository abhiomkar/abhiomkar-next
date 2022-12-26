import Layout from '../components/layout';
import {initializeApp, getApps} from 'firebase/app';
import {getDatabase, ref, get} from 'firebase/database';
import React from 'react';

class Photography extends React.Component {
  state = {
    activeCategoryIndex: 0,
  };

  static async getInitialProps() {
    const config = {
      databaseURL: 'https://abhiomkar-in.firebaseio.com',
    };
    const app = getApps().length ? getApps()[0] : initializeApp(config);
    const db = getDatabase(app);
    const snapshot = await get(ref(db, '/'));

    return {
      data: snapshot.val(),
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
