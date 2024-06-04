const CircleComponent = ({ imageUrl, name, profesion }) => {
    return (
        <div className="grid justify-items-center ">
            <div className="w-48 h-48 rounded-full bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-110 duration-500 mb-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <h4 className="text-sanluisblack font-bold text-2xl">{name}</h4>
            <h4 className="text-sanluislgrey font-medium text-md">{profesion}</h4>
        </div>
    );
};
export default CircleComponent;
