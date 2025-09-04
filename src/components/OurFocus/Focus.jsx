import SectionTitle from "../common/SectionTitle";
import OurFocus from "./OurFocus";
import focusData from "./FocusData";
import styles from "./Focus.module.css"

const Focus = () => {
  return (
    <section
      id="focusSection"
      className={`bg-gray-900 dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 ${styles.focusSection}`}
    >
      <div className="container">
        <div className="max-w-[1200px] m-auto">
        <SectionTitle
          title="Service-Focused Approach"
          paragraph="End-to-end services in graphic design, printing, and web development — tailored to brand, trusted partner for design, print, and digital solutions that deliver results."
          center
          txtColor="text-white"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {focusData.map((focus) => (
            <div key={focus.id} className="w-full">
              <OurFocus ourFocus={focus} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
