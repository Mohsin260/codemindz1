import Image from "next/image";
import React from "react";

const OurWork = () => {
  return (
    <section className="bg-cyan-800" id="our-work">
      <div>
        <h1 className="text-5xl font-bold text-center py-6">OUR WORK</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1400px] mx-auto pb-20">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:opacity-30"
            src="http://codemindz.com/wp-content/uploads/2023/06/chrome-capture-2023-5-22.png"
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:opacity-30"
            src="http://codemindz.com/wp-content/uploads/2023/06/about_hammani-500x531-1.png"
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:opacity-30"
            src="http://codemindz.com/wp-content/uploads/2023/06/UI-and-UX-design-service-1.png"
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:opacity-30"
            src="http://codemindz.com/wp-content/uploads/2023/06/portfolio3-e1679083028551-1.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:opacity-30"
            src="http://codemindz.com/wp-content/uploads/2023/06/software-development-programming-language-coding-3d-isometric-laptop-computer-with-digital-application-isolated-on-white-background-design-vector-scaled.jpg"
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto md:max-w-full rounded-lg hover:opacity-30"
            src="http://codemindz.com/wp-content/uploads/2023/06/programming-and-coding-on-laptop-screen-simple-notebook-computer-with-code-design-flat-design-for-web-banners-web-sites-or-printed-materials-free-vector.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
