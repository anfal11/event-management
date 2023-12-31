import { SlideshowLightbox} from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Gallery = () => {



  return (
    <div className="h-screen max-w-7xl mx-auto" data-aos="fade-down-right">
    <h1 className='text-gray-500 underline pb-2 font-bold text-center my-10 text-4xl'> Please Click on the Image and Feel the Magic</h1>
     <SlideshowLightbox className='container grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
          <img className='w-full rounded' src='https://i.ibb.co/8YLYnD5/Tech-workshop.jpg' />
          <img className='w-full rounded' src='https://i.ibb.co/59t86X0/esoports-event.jpg' />  
          <img className='w-full rounded' src='https://i.ibb.co/Wvz5rcK/Game-arena-event.jpg' />
          <img className='w-full rounded' src='https://i.ibb.co/cwJc5mM/Tech-Career-Fair.jpg' />
          <img className='w-full rounded' src='https://i.ibb.co/gTL6KVf/Robotics-Showcase.jpg' />
          <img className='w-full rounded' src='https://i.ibb.co/q1rZX39/Hackathons.jpg' />
              
               
        </SlideshowLightbox> 
    </div>
  );
};

export default Gallery;
