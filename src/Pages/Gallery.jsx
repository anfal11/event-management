import { SlideshowLightbox} from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css'



const Gallery = () => {



  return (
    <div className="h-screen max-w-7xl mx-auto">
    <h1 className='text-gray-500 underline font-bold text-center my-10 text-4xl'> Please Click on the Image and Magic</h1>
     <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
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
