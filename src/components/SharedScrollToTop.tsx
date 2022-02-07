// Library
import { animateScroll as scroll } from "react-scroll";

export const SharedScrollToTop = () => {
  const scrollToTop = () => {
    scroll.scrollTo(0, {
      duration: 0,
      delay: 0,
      smooth: false,
      offset: 50,
    });
  };

  const topButtonClass =
    "fixed bottom-10 right-6 rounded-full h-16 w-16 z-50 bg-green-800 hover:bg-green-500 focus:outline-none text-white font-bold";

  return (
    <button className={topButtonClass} onClick={scrollToTop}>
      上へ
    </button>
  );
};
