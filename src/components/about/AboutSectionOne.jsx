import Image from "../common/Image";
import SectionTitle from "../common/SectionTitle";
import AboutImage from "../../assets/images/about/about-image.svg"
import AboutImageDark from "../../assets/images/about/about-image-dark.svg"
import Animate from "./ImageBox/Animate";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return <>
    <SectionTitle
      title="About Us"
      paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
      mb="44px"
    />
    <div className="w-full px-4 lg:max-w-[1000px]">
      <div
        className="wow fadeInUp mb-12 lg:mb-0"
        data-wow-delay=".15s"
      >
        <div className="mx-[-12px] flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2 lg:w-full">
            <div className="mb-9">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Welcome to JSS Tech, your trusted partner for creative and digital solutions. We are a full-service company dedicated to helping businesses, brands, and individuals bring their ideas to life with innovation, quality, and reliability.</p>
            </div>
            <div className="mb-9">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">With a passion for design, technology, and customer satisfaction, we specialize in:</p>
              <ul className="list-disc">
                <li><strong>Web Development</strong> – From sleek websites to powerful web applications, we craft digital experiences that drive results.</li>
                <li><strong>Graphic Design</strong> – Creative visuals, branding, and marketing materials that make your business stand out.</li>
                <li><strong>Printing & Stationery</strong> – High-quality printing solutions and office stationery tailored to your everyday business needs.</li>
                <li><strong>SEO & Digital Marketing</strong> – Optimized strategies to enhance your online visibility and grow your brand.</li>
                <li><strong>Office Solutions</strong> – Comprehensive support for all your professional and operational requirements.</li>                      
              </ul>
            </div>
            <div className="mb-9">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">At JSS Tech, we believe every project is unique. That’s why we combine creativity, strategy, and technology to deliver solutions that align with your goals. Our team of skilled designers, developers, and professionals works hand in hand to ensure quality, timely delivery, and complete customer satisfaction.</p>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">Whether you’re a startup building your brand identity or an established business looking to expand, we are here to support your journey with innovative and cost-effective solutions.</p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                ✨ Our Mission
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                To provide creative, reliable, and result-driven solutions that empower businesses to grow and succeed.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                ✨ Our Vision
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                To be a one-stop partner for all digital, creative, and office needs by building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default AboutSectionOne;
