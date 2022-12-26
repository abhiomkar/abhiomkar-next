// TODO: Move to individual pages using CSS modules.
import '../components/header.scss';
import '../components/layout.scss';
import '../pages/index.scss';
import '../pages/projects.scss';
import '../pages/photography.scss';
import '../pages/contact.scss';

// Global styles.
export default function Styles({ Component, pageProps }) {
  return <Component {...pageProps} />
}
