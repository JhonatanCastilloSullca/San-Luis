const TitleParrafo = ({ Titulo, Contenido, Align }) => {
    return (
        <>
            <h2 className={`text-${Align} text-secondaryshade4 text-5xl font-bold py-4`}>{Titulo}</h2>
            <p className={`leading-9 text-${Align}`}>{Contenido}</p>
        </>
    );
};
export default TitleParrafo;
