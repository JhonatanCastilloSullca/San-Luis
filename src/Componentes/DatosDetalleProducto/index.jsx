
const DatosDetalleProducto = ({ titulo, contenido }) => {
    return (
        <div className='h-12 grid items-center border-dashed border-b-2 border-sanluisgrey pb-2'>
            <div className="text-info flex justify-between">
                <h4 className='text-lg'>{titulo}:</h4>
                <h4 className='text-lg'>{contenido}</h4>
            </div>
        </div>
    );
};

export default DatosDetalleProducto;