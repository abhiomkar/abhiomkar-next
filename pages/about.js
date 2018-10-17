import Layout from '../components/layout';
import {withRouter} from 'next/router';
import ReactMarkdown from 'react-markdown';
import './about.scss';

const input = `
About
=====

Hello! My name is **Abhinay Omkar**. I born in Andhra Pradesh, India and currently based in Bangalore, India. I studied Computer Science of Engineering at my beautiful college _Koneru Lakshmaiah College of Engineering_, Vijayawada, India.

Work
----

I’m currently working at Google (Bangalore, India) as UX Engineer. Previously at Akamai Technologies & HCL Technologies. More details at [Linkedin](https://www.linkedin.com/in/abhiomkar).

Code
----

I believe writing good code is as important as a good design. My strengths are Javascript & Python. See my hacks at [Github](https://github.com/abhiomkar).

Photography
-----------

I’m a self-taught photographer specialized in Creative Candid Moments, Weddings, Portraits, Travel & Nature. I started my own venture as a part-time freelancer in creative candid wedding photography 4 years ago. I shot weddings of various traditions all over india including simple and big fat weddings.

See some of my best work at [/photography](/photography).

*I’m currently **not available** for any hire.*

Books
-----

I love to read books. Here are few of my favorite books.

- [The Design of Everyday Things](https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things) by **Donald A. Norman**
- [Effective Programming: More Than Writing Code](https://www.goodreads.com/book/show/15746409-effective-programming) by **Jeff Atwood**
- [Steve Jobs](https://www.goodreads.com/book/show/11084145-steve-jobs) by **Walter Isaacson**
- [Elon Musk: Inventing the Future](https://www.goodreads.com/book/show/22543496-elon-musk) by **Ashlee Vance**
- [Zero to One: Notes on Startups, or How to Build the Future](https://www.goodreads.com/book/show/18050143-zero-to-one) by **Peter Thiel**
- [The Fault in Our Stars](https://www.goodreads.com/book/show/11870085-the-fault-in-our-stars) by **John Green**
- [JavaScript: The Good Parts](https://www.goodreads.com/book/show/2998152-javascript) by **Douglas Crockford**
- [Show Your Work!](https://www.goodreads.com/book/show/18290401-show-your-work) by **Austin Kleon**
- [Be Here Now](https://www.goodreads.com/book/show/29254.Be_Here_Now) by **Ram Dass, Richard Alpert**
- [Scion of Ikshavaku](https://www.goodreads.com/book/show/24709327-scion-of-ikshvaku) by **Amish Tripathi**
- [My Gita](https://www.goodreads.com/book/show/27318490-my-gita) by **Devdutt Pattanaik**

Website
-------

Website is built on [Next.js](https://nextjs.org) and hosted on [now](https://zeit.co/now).
`;

const About = (props) => (
  <Layout>
    <div className='container about-container'>
      <ReactMarkdown source={input} />
    </div>
  </Layout>
);

export default withRouter(About);
