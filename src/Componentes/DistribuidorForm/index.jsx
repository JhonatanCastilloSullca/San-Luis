import { useState } from 'react';

const DistribuidorForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        celular: '',
        direccion: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Aquí puedes continuar con tu lógica para enviar el formulario
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Escribenos tu nombre o el nombre de tu negocio:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email de contacto:</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="celular" className="block text-gray-700 text-sm font-bold mb-2">Celular de contacto:</label>
                <input
                    type="text"
                    name="celular"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="direccion" className="block text-gray-700 text-sm font-bold mb-2">Dirección de tu local</label>
                <input
                    type="text"
                    name="direccion"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
                <textarea
                    name="message"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-secondaryshade1 hover:bg-secondaryshade3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default DistribuidorForm;
