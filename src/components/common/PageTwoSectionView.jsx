
const PageTwoSectionView = ({RightItem, pageSectionClasses = null, children}) => {
  const RightSection = RightItem;
  console.log(RightSection().props)

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className={`w-full px-4 lg:w-1/2 ${pageSectionClasses.includes('contact-section') ? 'order-2 md:order-1 lg:order-1' : ''}`}>
              {children}
            </div>
            <div className={`w-full px-4 lg:w-1/2 ${pageSectionClasses}`}>
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[28/24] md:aspect-[25/24] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <RightSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTwoSectionView;
