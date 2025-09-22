import React from 'react';
import Metadata from '../components/common/Metadata';
import DevHeading from '../components/developement/DevHeading';
import devBgImg from '../assets/images/programming-background-collage.jpg';

const WebDevelopment = () => {
  const languages = ['JavaScript', 'HTML', 'CSS', 'Ruby On Rails', 'jQuery', 'API', 'TypeScript', 'React', 'Git'];
  const headText = 'Web Development Services'
  const paraText = `We create fast, secure, and responsive websites that look great on every device. Our web solutions are built with the latest technologies to ensure seamless performance and long-term growth for your business.`
  
  return <>
    <Metadata 
      title="JS Matrix | Web Development Services"
      keywords={languages}
      description={paraText}
    />
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading headingBgText={languages} headText={headText} paraText={paraText} bgImage={devBgImg} />
      <div className='container mt-8 text-black'>
        <div className="mb-9 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
          <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-black '>Crafting Modern, Scalable, and User-Friendly Web Experiences</h2>
          <p className='text-base font-medium text-body-color text-center'>We specialize in building sleek, interactive, and performance-driven websites. With a strong focus on UI development, we ensure every project delivers a seamless user experience across all devices.</p>
        </div>

        <h2 className='mb-4 text-3xl font-bold !leading-tight text-black dark:text-white'>Our Core Expertise 🚀</h2>
        <div className='flex flex-wrap'>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>JavaScript</h3>
            <p className='text-base font-medium text-body-color'>We use JavaScript to make websites dynamic, interactive, and engaging. From handling user interactions to updating content without refreshing the page, JavaScript powers the smart features that keep users connected with your application.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>ReactJS</h3>
            <p className='text-base font-medium text-body-color'>React helps us build fast and scalable user interfaces. By using reusable components, we create applications that are easier to maintain and extend, while offering users lightning-fast performance and seamless interactions.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>NextJS</h3>
            <p className='text-base font-medium text-body-color'>Next.js takes React to the next level by adding server-side rendering (SSR), static site generation (SSG), and built-in optimization. This ensures blazing-fast load times, better SEO, and a smooth user experience — perfect for high-performance, UI-rich websites and applications.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>TypeScript</h3>
            <p className='text-base font-medium text-body-color'>Adding type safety to JavaScript, TypeScript allows us to write more reliable and maintainable code. This means fewer bugs, faster development, and scalable projects that can grow with your business needs.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Ruby on Rails</h3>
            <p className='text-base font-medium text-body-color'>We leverage Ruby on Rails for powerful backend solutions. Its rapid development framework allows us to deliver secure, feature-rich applications while integrating beautifully with modern front-end technologies for a complete full-stack experience.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>jQuery</h3>
            <p className='text-base font-medium text-body-color'>Though modern frameworks dominate today, jQuery still shines in handling lightweight DOM manipulations and quick solutions. We use it to optimize legacy projects or for scenarios where a fast, simple approach is most effective.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Git & Version Control</h3>
            <p className='text-base font-medium text-body-color'>We manage all projects with Git to ensure smooth collaboration, secure versioning, and safe deployments. This structured approach keeps development organized, transparent, and error-free.</p>
          </div>
        </div>
      </div>
    </section>
  </>
  
}

export default WebDevelopment;