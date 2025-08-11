import React, {useEffect, useRef } from "react";
import Typed from 'typed.js';
import style from './TextType.module.css'

export const TextType = () => {
	const typedRef = useRef();
	useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Development', 'Web Design', 'Graphic Design', 'Printing', 'Rank [SEO]', 'Stationery'],
      typeSpeed: 100,
			startDelay: 100,
			backSpeed: 80,
			loop: true,
			backDelay: 2700,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
	return (
		<>
			<h3 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
					Providing - <span className={`${style.gradient} text-blue-700`} ref={typedRef} />
			</h3>
		</>
	)
}