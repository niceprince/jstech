import DevHeading from '../components/developement/DevHeading';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const GraphicDesigns = () => {
  const languages = ['Books', 'Graphics', 'Banner', 'Poster Design', 'Standy', 'ID Cards', 'flyers', 'Designs', 'Creative', 'Colors'];
  const headText = 'Graphic Designs Services'
  const paraText =  `We craft visually engaging designs that communicate your brand’s message with clarity and creativity. From logos to marketing materials, our designs leave a lasting impression.`

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-white">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return <>
    <Metadata 
      title={`JS Matrix | ${headText}`}
      keywords={languages}
      description={paraText}
    />
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading headingBgText={languages} headText={headText} paraText={paraText}  />
      <div className='container mt-8 text-black'>
        <div className="mb-9 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
          <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-black '>Creative Visuals that Speak for Organization Brand</h2>
          <p className='text-base font-medium text-body-color text-center'>Great design is more than just visuals—it’s the art of communication. Our graphic design services blend creativity with strategy to deliver designs that are modern, engaging, and aligned with your brand’s identity. Whether digital or print, we design to inspire, impress, and connect with your audience.</p>
        </div>

        <h2 className='mb-4 text-3xl font-bold !leading-tight text-black dark:text-white'>Our Graphic Design Services 🚀</h2>
        <div className='flex flex-wrap'>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Logo & Brand Identity Design</h3>
            <p className='text-base font-medium text-body-color'>Your logo is the face of your brand. We design memorable logos and brand guidelines that build a strong, consistent identity across all platforms.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Marketing & Promotional Materials</h3>
            <p className='text-base font-medium text-body-color'>From brochures, flyers, and posters to banners and business cards, we create designs that grab attention and leave a professional impact.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>UI/UX Design</h3>
            <p className='text-base font-medium text-body-color'>We design intuitive, user-friendly interfaces for websites and mobile applications with a strong focus on user experience, aesthetics, and functionality.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Social Media Creatives</h3>
            <p className='text-base font-medium text-body-color'>Engage your audience with eye-catching graphics tailored for social media platforms, including ads, stories, and post designs.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Print & Packaging Design</h3>
            <p className='text-base font-medium text-body-color'>From product packaging to large-scale prints, we ensure your designs stand out both online and offline.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Infographics & Illustrations</h3>
            <p className='text-base font-medium text-body-color'>We simplify complex information into visually engaging infographics and create custom illustrations that enhance storytelling.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Presentation Design</h3>
            <p className='text-base font-medium text-body-color'>Professional, clean, and creative presentation slides that communicate your message with clarity and style.</p>
          </div>
        </div>
      </div>

      <div className="container mb-9 w-full wow fadeInUp shadow-three mb-12 rounded-sm bg-black px-8 py-11">
        <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-white '>Why Choose Us for Graphic Design?</h2>

        <ul className='m-auto w-full md:w-5/12'>
          <List text="Creative + Strategic Approach – Designs that are not only beautiful but also meaningful." />
          <List text="Custom-Tailored Solutions – Every design reflects your brand’s unique personality." />
          <List text="Consistent Branding – Unified designs across all channels." />
          <List text="Focus on Impact – Our goal is to make your visuals unforgettable." />
        </ul>
      </div>
    </section>
  </>
  
}

export default GraphicDesigns;