const HeroSection = ({ image, title, subtitle, position, linkAction, size }) => {
    const textAlign = position === 'left' ? 'text-left' : position === 'center' ? 'text-center' : 'text-right';
    const justifyContent = position === 'left' ? 'justify-start' : position === 'center' ? 'justify-center' : 'justify-end';
    const paddingClass = position === 'left' ? 'ps-40' : position === 'right' ? 'pe-40' : '';

    return (
        <div
            className={`relative flex items-center  ${justifyContent}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: `calc(${size} - 90px)`
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black to-white opacity-30 animate-slide"></div>
            <div className={`relative w-2/5 ${textAlign} ${paddingClass}`}>
                <h1 className="text-white text-7xl font-bold m-2">{title}</h1>
                <h3 className="text-secondaryshade5 text-2xl font-medium m-2">{subtitle}</h3>
                {linkAction && (
                    <button className="bg-secondaryshade1 px-28 py-4 rounded-md m-2 text-white text-2xl font-medium hover:bg-secondaryshade2 transition duration-300 ease-in-out">
                        {linkAction}
                    </button>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
