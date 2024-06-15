import { NavLink } from "react-router-dom";

const ProductCard = ({ imagen, categoria, precio, nombre, slug }) => {
    return (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <NavLink to={slug}>
                <img src={imagen} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                <div className="px-4 py-3 w-72">
                    <div className="flex justify-between">
                        <span className="text-sanluislgrey mr-3 uppercase text-xs">{categoria}</span>
                        <p className="text-lg font-semibold text-secondaryshade4 cursor-auto my-3">${precio}</p>
                    </div>
                    <p className="text-lg font-bold text-secondaryshade4 truncate block capitalize">{nombre}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductCard;
