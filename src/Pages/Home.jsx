import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLoaderData } from "react-router-dom";
import Events from "../components/Events/Events";
AOS.init();

const Home = () => {
  const events = useLoaderData();
  return (
    <div>
      <div className="relative">
        <img
          src="https://i.ibb.co/80ppDfS/308-name05322-jj-1600x867.jpg"
          className="w-full opacity-20 h-[900px]"
          alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto p-4">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
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
              <div className="mt-3">
              <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card section */}
      <div className="max-w-7xl mx-auto">
       
      <h1 className="text-2xl font-bold text-center my-10 ">
  <span className="text-pink-500">✨</span> <span className="text-gray-500">Our Services</span> <span className="text-pink-500">✨</span>
</h1>

        <div data-aos="flip-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Events key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>

      {/* Review section */}
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-2xl font-bold text-center my-10 ">
  <span className="text-pink-500">✨</span> <span className="text-gray-500">Reviews</span> <span className="text-pink-500">✨</span>
</h1>


        <div data-aos="fade-down-right">
          <section className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-8">
                What our users are saying
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow rounded-lg p-8">
                  <p className="text-gray-700 mb-4">
                  &quot;Attending the Tech Workshop was a fantastic experience! I learned so much from the expert instructors and gained valuable hands-on skills. Whether you&apos;re a beginner or an advanced techie, this workshop is a must-attend.&quot;
                  </p>
                  <p className="text-gray-700 font-medium">- Shamsu Uddin</p>
                </div>
                <div className="bg-white shadow rounded-lg p-8">
                  <p className="text-gray-700 mb-4">
                  &quot;The Esports Tournament was an absolute blast! The competition was fierce, and the energy was electric. I had a fantastic time competing and meeting fellow gamers. I can&apos;t wait for the next tournament!&quot;
                  </p>
                  <p className="text-gray-700 font-medium">
                    - Md. Tasin Alam
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-8">
                  <p className="text-gray-700 mb-4">
                  &quot;The Game Arena Event was a gaming paradise! With a wide range of gaming consoles and PCs, I had the chance to dive into my favorite games and even discover new ones. The atmosphere was incredible, and I made some great gaming buddies.&quot;
                  </p>
                  <p className="text-gray-700 font-medium">
                    - Fahim Faysal
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-8">
                  <p className="text-gray-700 mb-4">
                  &quot;The Tech Career Fair was a game-changer for my career. I had the opportunity to connect with top tech companies and network with industry professionals. It opened doors to exciting job opportunities. Don&apos;t miss this if you&apos;re looking to kickstart your tech career!&quot;
                  </p>
                  <p className="text-gray-700 font-medium">
                    - Md. Shanto Hossen
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-8">
                  <p className="text-gray-700 mb-4">
                  &quot;The Robotics Showcase was mind-blowing! I witnessed the future of technology up close, from cutting-edge humanoid robots to autonomous drones. Engaging with robotics experts and exploring the latest innovations was a one-of-a-kind experience.&quot;
                  </p>
                  <p className="text-gray-700 font-medium">
                    - Mainul Talukder
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-8">
                  <p className="text-gray-700 mb-4">
                  &quot;The Hackathon Challenge was an adrenaline rush! Teaming up with passionate individuals to solve real-world problems was both challenging and rewarding. Winning prizes and gaining recognition for our tech solution was the icing on the cake. Highly recommend!&quot;
                  </p>
                  <p className="text-gray-700 font-medium">
                    - Joy Roy Chowdhury
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="100"
        >

        <div className="max-w-7xl mx-auto">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

        <section className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-500 mb-8">
      Customer Support & FAQ
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* FAQ Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      
        <div className="mb-2">
          <Link to='/register'>
          <button className="text-blue-500 font-semibold hover:underline focus:outline-none">
            How do I create an account?
          </button>
          </Link>
          <p className="text-gray-600">To create an account, go to the &apos;Sign Up&apos; page and follow the instructions.</p>
        </div>
        
        <div className="mb-2">
          <Link to='/login'>
          <button className="text-blue-500 font-semibold hover:underline focus:outline-none">
            How can I reset my password?
          </button>
          </Link>
          <p className="text-gray-600">To reset your password, visit the &apos;Forgot Password&apos; page and follow the steps.</p>
        </div>
        
      </div>
      
      {/* Contact Information Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <p className="text-gray-600">If you need further assistance, feel free to reach out to our support team:</p>
        <p className="text-gray-600 mt-2">
          Email: <a href="mailto:support@example.com" className="text-blue-500 hover:underline">ratulcse1@gmail.com</a>
        </p>
        <p className="text-gray-600 mt-2">
          Phone: <a href="tel:+123456789" className="text-blue-500 hover:underline">+880 1722-928701</a>
        </p>
      </div>
    </div>
  </div>
</section>
</div>

        </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
