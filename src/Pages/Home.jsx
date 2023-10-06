import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://i.ibb.co/80ppDfS/308-name05322-jj-1600x867.jpg"
          className="w-full opacity-25 h-[700px]"
          alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto p-4">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <p className="text-base md:text-xl lg:text-3xl">
                <span className="text-red-500">
                  Explore the Future at Tech and Gaming Events
                </span>{" "}
                <br />
                <br />
                Discover a world where technology innovation meets the thrill of
                gaming. Join us at our exciting tech and gaming events, where
                you can experience cutting-edge gadgets, immersive gameplay, and
                connect with fellow enthusiasts. Dive into the future of
                entertainment and innovation with us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* others */}
        bla
      </div>
    </div>
  );
};

export default Home;
