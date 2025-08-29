import React, {useContext} from 'react';
import MyContext from '../context/MyContext';

const TestContext = () => {
  const contextData = useContext(MyContext);

  console.log(contextData);
  return (
    <>
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">This testing context api</div>
          <p>{contextData.data}</p>
          <p>{contextData.name}</p>
          <p>{contextData.age}</p>
        </div>
      </div>
      </section>
    </>
  )
}

export default TestContext;