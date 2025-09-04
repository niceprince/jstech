
const PageTwoSectionView = ({RightItem, children}) => {
  const RightSection = RightItem;

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              {children}
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] lg:mr-0"
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
