const TitleParrafo = ({ Titulo, Contenido, Align }) => {
    return (
        <>
            <div className="pt-2">
                {
                    Titulo && (
                        <h2 className={`text-${Align} text-secondaryshade4 text-5xl font-bold py-4`}>{Titulo}</h2>
                    )
                }
                {
                    Contenido && (
                        <p className={`leading-8 text-${Align} text-justify`}>{Contenido}</p>
                    )
                }
            </div>
        </>
    );
};
export default TitleParrafo;
