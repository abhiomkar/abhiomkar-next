import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown';

const markdown = `
I'm **Abhinay Omkar**, currently based in New York, New York.

I previously worked at Bangalore, India and Chennai, India.
I was born in Andhra Pradesh, India and studied Computer Science of Engineering
at _Koneru Lakshmaiah College of Engineering_ near Vijayawada, India.

Work
----

I’m currently working at Google (New York City) as UX Engineer. Previously at
Akamai Technologies & HCL Technologies. More details at
[Linkedin](https://www.linkedin.com/in/abhiomkar).

Code
----

I believe writing good code is as important as a good design. My strengths are
Javascript & Python. See my work and open source contribution at
[Github](https://github.com/abhiomkar).

Photography
-----------

I’m a self-taught photographer specialized in Creative Candid Moments, Weddings,
Portraits, Travel & Nature. I started my own venture as a part-time freelancer
in creative candid wedding photography 4 years ago. I shot weddings of various
traditions all over india including simple and big fat weddings.

See some of my best work at [/photography](/photography).

I love to travel and explore new places, I take photos to make world look
beautiful. I design & code to make the world a better place. :)
`;

const Home = () => (
  <Layout>
    <section className='container'>
      <div className='home-container'>
        <ReactMarkdown source={markdown} />
      </div>
    </section>
  </Layout>
);

export default Home;
