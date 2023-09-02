import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section
      className="min-h-screen flex items-center max-w-[1400px] mx-auto"
      id="about-us"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/about_us-500x531.png" // Replace with your image URL or import it
              width={500}
              height={531}
              alt="About Us Image"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <Link href="#about-us">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
            </Link>
            <p>
              Get powerful and stunning websites for your business with our web
              development services. Our mission is to deliver high-quality
              solutions. We create, develop, and deliver custom-built web
              development solutions that people love. Our reputation is backed
              by our quality approach and the real and measurable results we
              achieve for our clients – always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
