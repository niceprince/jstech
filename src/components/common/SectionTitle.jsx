const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  ...props
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h1 className={`mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-3xl ${props.txtColor && props.txtColor}`}>
          {title}
        </h1>
        <p className={`text-base !leading-relaxed text-body-color md:text-lg ${props.txtColor && props.txtColor}`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
