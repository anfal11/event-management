import { useParams } from "react-router-dom";


const EventDetails = () => {
    const {id} = useParams();
    return (
        <div className="max-w-7xl mx-auto h-screen">
            <h1 className="text-gray-500 text-center font-semibold text-3xl mt-32 lg:mt-10">Event Details</h1>
            <p>{id}</p>
        </div>
    );
};

export default EventDetails;