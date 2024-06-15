const CircleComponent = ({ imageUrl, name, profesion }) => {
    return (
        <div className="justify-items-center flex flex-col items-center py-4">
            <div className="w-48 h-48 rounded-full bg-white relative overflow-hidden transition-transform transform hover:scale-110 duration-500 mb-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-contain rounded-full"
                />
            </div>
            <div className="content-text">
                <h4 className="text-sanluisblack font-bold text-2xl text-center">{name}</h4>
                <h4 className="text-sanluislgrey font-medium text-md">{profesion}</h4>
            </div>
        </div>
    );
};
export default CircleComponent;
