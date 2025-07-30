import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <section className="flex items-center justify-items-center justify-center h-screen bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-600 ">404</h1>
                    <p className="mb-4 text-lg font-light text-gray-500 ">Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la página de inicio. </p>
                    <Link to='/' className="inline-flex text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4">Regresar al inicio</Link>
                </div>
            </div>
        </section>
    )
}

export default Error404