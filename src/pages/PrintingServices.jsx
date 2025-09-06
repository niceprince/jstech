import DevHeading from '../components/developement/DevHeading';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const PrintingServices = () => {
  const languages = ['Books', 'T-shirt', 'Printing', 'Poster Print', 'Print', 'Cards', 'Flyers', 'Designs & Print', 'Creative', 'Colors'];
  const headText = 'Printing Services'
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
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading headingBgText={languages} headText={headText} paraText={paraText}  />
      <div className='container mt-8 text-black'>
        <div className="mb-9 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
          <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-black '>High-Quality Printing That Brings Ideas to cercumstances</h2>
          <p className='text-base font-medium text-body-color text-center'>We specialize in delivering top-notch printing solutions that transform your ideas into impactful visuals. From corporate stationery and promotional materials to large-scale advertising and custom packaging, our printing services are designed to meet every business and personal need. With a strong focus on quality, precision, and creativity, we make sure every print reflects your brand’s professionalism and leaves a lasting impression.</p>
        </div>

        <h2 className='mb-4 text-3xl font-bold !leading-tight text-black dark:text-white'>Our Printing Solutions 🚀</h2>
        <div className='flex flex-wrap'>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Business Stationery Printing</h3>
            <p className='text-base font-medium text-body-color'>We design and print professional letterheads, envelopes, business cards, notepads, and other essentials that reflect credibility and brand identity. Whether you are a startup or an established organization, our stationery printing helps you build trust and consistency in every communication.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Marketing & Promotional Printing</h3>
            <p className='text-base font-medium text-body-color'>Marketing materials are the backbone of spreading your brand’s message. We print vibrant flyers, eye-catching brochures, impactful posters, and attention-grabbing banners that make your promotions stand out. Every design is printed with precision to ensure your campaigns reach the right audience with the right impact.</p>
          </div>
          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Packaging & Label Printing</h3>
            <p className='text-base font-medium text-body-color'>Your product packaging is more than just protection—it’s a powerful marketing tool. We offer custom-designed packaging solutions, labels, and stickers that not only look appealing but also communicate your brand’s personality. Our designs help your products stand out in competitive markets while maintaining functionality and durability.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Custom & Creative Printing</h3>
            <p className='text-base font-medium text-body-color'>Looking for something unique? We create personalized items such as calendars, catalogs, booklets, invitation cards, diaries, and creative gift items. Our team combines innovative designs with premium printing to bring you products that are memorable, functional, and visually stunning.</p>
          </div>

          <div className="mb-9 w-full md:w-6/12 wow fadeInUp shadow-three mb-12 rounded-sm bg-white px-8 py-11">
            <h3 className='mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl'>Office Essentials</h3>
            <p className='text-base font-medium text-body-color'>Every office relies on daily-use print materials like files, folders, ID cards, invoices, and receipts. We provide consistent, reliable, and high-quality printing for all your office essentials, ensuring you never have to compromise on accuracy, clarity, or professionalism.</p>
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

      <div className="container mb-9 w-full wow fadeInUp shadow-three mb-12 rounded-sm px-8 py-11 bg-orange-700">
        <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-white '>Why Choose Us for Printing?</h2>

        <ul className='m-auto w-full md:w-5/12'>
          <List text="Premium Quality Prints – Our advanced technology ensures vibrant colors, sharp details, and durable results." />
          <List text="Comprehensive Range – From everyday stationery to large-scale advertising, we cover all your printing needs." />
          <List text="Custom Solutions – Tailored designs, finishes, and materials to match your unique requirements." />
          <List text="Creative & Professional Team – A perfect blend of artistic design and technical expertise." />
          <List text="End-to-End Service – From design consultation to final delivery, we handle the entire process seamlessly." />
        </ul>
      </div>
    </section>
  </>
  
}

export default PrintingServices;