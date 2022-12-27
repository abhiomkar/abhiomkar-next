import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown';

const markdown = `
My name is **Abhinay Omkar**. I'm an Indian he/him living in Bangalore, India (Previously worked
at New York City and Chennai). I was born in Telangana, India and
studied Computer Science of Engineering at _Koneru Lakshmaiah College of
Engineering_ near Vijayawada, India.

Work
----

I'm currently working at Google as UX Engineer. Previously at
Akamai Technologies & HCL Technologies. More details at
[Linkedin](https://www.linkedin.com/in/abhiomkar).

Code
----

I believe writing good code is as important as a good design. I've expertise in
front-end engineering. See my work and open source contribution at
[Github](https://github.com/abhiomkar).

See [/projects](/projects) for my little hacks.

Photography
-----------

I'm a self-taught photographer specialized in Creative Candid Moments, Weddings,
Portraits, Travel & Nature. I started my own venture as a part-time freelancer
in creative candid wedding photography while ago. I shot weddings of various
traditions all over india including simple and big fat weddings.

See photo gallery at [/photography](/photography).

I love to travel and explore new places, I take photos to make world look
beautiful. I design & code to make the world a better place. :)
`;

const Home = () => (
  <Layout>
    <section className='container' data-deploy-version-check="1">
      <div className='home-container'>
        <ReactMarkdown children={markdown} />
      </div>
    </section>
  </Layout>
);

export default Home;
