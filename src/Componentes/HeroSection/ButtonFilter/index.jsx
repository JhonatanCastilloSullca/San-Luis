
const ButtonFilter = ({ filtro }) => {
    return (
        <div className="rounded-full border-2  px-4 mx-2 bg-infoshade6 text-secondaryshade4 hover:font-medium duration-100 hover:text-secondaryshade5 hover:bg-infoshade6 hover:cursor-pointer">
            {filtro}
        </div>
    );
};

export default ButtonFilter;
