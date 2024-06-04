
const CardFullWidth = ({ imageUrl, title, text }) => {
    return (
        <>

            <div
                className={`relative h-64 flex items-center justify-start px-4 rounded-md shadow-2xl`}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0  rounded-md"></div>
                <div className="flex w-full justify-around items-center">
                    <div className="bg-white bg-opacity-75 p-6 rounded-md shadow-lg w-[420px]">

                        <p className="text-gray-700 font-medium">{text}</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-2 text-white">{title}</h2>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CardFullWidth;
