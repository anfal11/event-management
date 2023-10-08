import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();
  const loader = useLoaderData();

  useEffect(() => {
    const findEvent = loader?.find((event) => event.id == id);
    if (findEvent) {
      setEvent(findEvent);
    } else {
      setEvent(null);
    }
  }, [id, loader]);

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto h-screen">
        <h1 className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">
          Event Details
        </h1>
        <div className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">
          No new events here...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <h1 className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">
        Event Details
      </h1>
      <div className="mt-10">
        <img src={event.event_image} />
        <h1 className="text-black font-semibold text-2xl mt-2">{event.event_title}</h1>
        <p className="mt-2"> {event.full_description} </p>
        <p className="mt-2"> Event value: <span className="font-semibold">{event.event_price}</span>$</p>
      </div>
    </div>
  );
};

export default EventDetails;
