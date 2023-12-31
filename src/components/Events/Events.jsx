import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Events = ({event}) => {

    const {id, event_title, event_image, event_price, short_description} = event;
    return (
        <div className="mt-10">
            <div className="relative flex w-full md:w-[350px] lg:w-[300px] xl:w-96 h-[420px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={event_image}
      alt="img-blur-shadow"
      // eslint-disable-next-line react/no-unknown-property
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {event_title}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {short_description}
    </p>
    <p className="block font-sans text-base font-medium leading-relaxed text-inherit antialiased">
      Event Value: {event_price}$
    </p>
  </div>
  <div className="p-6 pt-0">
<Link to={`/events_details/${id}`}>
<button
  
  className="select-none rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  type="button"
  data-ripple-light="true"
>
  Event Details
</button>
</Link>

  </div>
</div>
        </div>
    );
};


Events.propTypes = {
    event: PropTypes.object.isRequired
    
};
export default Events;