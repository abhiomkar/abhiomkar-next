import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";

const markdown = `
My name is **Abhinay Omkar**. I'm an Indian he/him living in Bangalore, India (Previously worked
at New York City and Chennai). I was born in Telangana, India and
studied Computer Science of Engineering at _Koneru Lakshmaiah College of
Engineering_ near Vijayawada, India.

Work
----

I'm currently working at Google as a Software Engineer, where I focus on improving the developer experience for Google Search JavaScript.
Previously worked at Akamai Technologies & HCL Technologies.

More details at [Linkedin](https://www.linkedin.com/in/abhiomkar).

Code
----

I believe writing good code is as important as a good design. I've expertise in
front-end technologies, technical leadership, and promoting of a respectful work culture.

See my work and open source contribution at
[Github](https://github.com/abhiomkar).

See [/projects](/projects) for my little hacks.

Photography
-----------

I'm a self-taught photographer specializing in Creative Candid Moments, Weddings, Portraits, Travel, and Nature.
I started on my own venture as a part-time freelancer in creative candid wedding photography some time ago.
I have captured weddings of various traditions all over India, ranging from simple to big fat weddings.

See photo gallery at [/photography](/photography).

> I love to travel and explore new places, I take photos to make world look
> beautiful. I design & code to make the world a better place. :)
`;

const Home = () => (
  <Layout>
    <section className="container" data-deploy-version-check="1">
      <div className="home-container">
        <ReactMarkdown children={markdown} />
      </div>
    </section>
  </Layout>
);

export default Home;
