import { NavLink } from "react-router-dom";

const HeroSection = ({ image, title, subtitle, position, linkAction, size }) => {
    const textAlign = position === 'start' ? 'text-left' : position === 'center' ? 'text-center' : 'text-right';
    const justifyContent = position === 'start' ? 'justify-start' : position === 'center' ? 'justify-center' : 'justify-end';
    const paddingClass = position === 'start' ? 'ps-40' : position === 'end' ? 'pe-40' : '';

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
                <div className={`flex flex-col items-${position}`}>
                    <h1 className="text-white text-7xl font-bold m-2">{title}</h1>
                    <h3 className="text-secondaryshade5 text-2xl font-medium my-2">{subtitle}</h3>
                    {linkAction && (
                        <NavLink to={linkAction} className="bg-secondaryshade1 px-28 py-4 rounded-md my-2 text-white text-2xl font-medium hover:bg-secondaryshade2 transition duration-300 ease-in-out">
                            Visitar
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
