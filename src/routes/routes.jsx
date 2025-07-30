import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Guillermo } from "../pages/Guillermo";
import { GuillermoJR } from "../pages/GuillermoJR";
import { Alfonso } from "../pages/Alfonso";
import { Carlos } from "../pages/Carlos";
import { Luisa } from "../pages/Luisa";
import { Marco } from "../pages/Marco";
import { Mariana } from "../pages/Mariana";
import { Carmen } from "../pages/Carmen";
import { MarcoAntonio } from "../pages/MarcoAntonio";
import Error404 from "../pages/Error404";
import PageTitle from "../components/PageTitle";
import { Servicios } from "../pages/Servicios";
import { Nosotros } from "../pages/Nosotros";
import { Navbar } from "../components/Navbar";
import { QuienesSomos } from "../pages/QuienesSomos";
import { NuestrosClientes } from "../pages/NuestrosClientes";
import { SitiosWeb } from "../pages/servicios/SitiosWeb";
import { Elearning } from "../pages/servicios/Elearning";
import { Impresion } from "../pages/servicios/Impresion";
import { RedesSociales } from "../pages/servicios/RedesSociales";
import { TarjetasDigitales } from "../pages/servicios/TarjetasDigitales";
import { Importacion } from "../pages/servicios/Importacion";
import { Contacto } from "../pages/Contacto";
import { Loader } from "../components/Loader";
import { MotionGraphics } from "../pages/servicios/MotionGraphics";
import { Fotografia } from "../pages/servicios/Fotografia";
import { GabrielaMtz } from "../pages/GabrielaMtz";


export function MyRoutes() {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            {/* {shouldShowNavbar && <Navbar />} */}
            <Routes>
                <Route path="/" element={<><PageTitle title='Guimark | Inicio' /><Inicio /></>} />
                <Route path="/servicios" element={<><PageTitle title='Guimark | Servicios' /> <Servicios /></>} />
                <Route path="/servicios/sitios-web" element={<><PageTitle title='Guimark | Servicios - Desarrollo' /> <SitiosWeb /></>} />
                <Route path="/servicios/e-learning" element={<><PageTitle title='Guimark | Servicios - E-learning' /> <Elearning /></>} />
                <Route path="/servicios/impresiones" element={<><PageTitle title='Guimark | Servicios - Impresión Offset' /> <Impresion /></>} />
                <Route path="/servicios/redes-sociales" element={<><PageTitle title='Guimark | Servicios - Redes Sociales' /> <RedesSociales /></>} />
                <Route path="/servicios/branding" element={<><PageTitle title='Guimark | Servicios - Branding' /> <TarjetasDigitales /></>} />
                <Route path="/servicios/importacion" element={<><PageTitle title='Guimark | Servicios - Importación' /> <Importacion /></>} />
                <Route path="/servicios/motion-graphics" element={<><PageTitle title='Guimark | Servicios - Motion Graphics' /> <MotionGraphics /></>} />
                <Route path="/servicios/fotografia-de-producto" element={<><PageTitle title='Guimark | Fotografía - Branding' /> <Fotografia /></>} />
                <Route path="/nosotros" element={<><PageTitle title='Guimark | Nosotros' /><Nosotros /></>} />
                <Route path="/quienes-somos" element={<><PageTitle title='Guimark | Quiénes somos' /><QuienesSomos /></>} />
                <Route path="/nuestros-clientes" element={<><PageTitle title='Guimark | Nuestros-clientes' /><NuestrosClientes /></>} />
                <Route path="/contacto" element={<><PageTitle title='Guimark | Contacto' /><Contacto /></>} />
                <Route path="/guillermo" element={<><PageTitle title='Guimark | Guillermo Pacheco' /><Guillermo /></>} />
                <Route path="/guillermo-n" element={<><PageTitle title='Guimark | Guillermo' /><GuillermoJR /></>} />
                <Route path="/alfonso" element={<><PageTitle title='Guimark | Alfonso' /><Alfonso /></>} />
                <Route path="/carlos" element={<><PageTitle title='Guimark | Carlos' /><Carlos /></>} />
                <Route path="/luisa" element={<><PageTitle title='Guimark | Luisa' /><Luisa /></>} />
                <Route path="/marco" element={<><PageTitle title='Guimark | Marco' /><Marco /></>} />
                <Route path="/mariana" element={<><PageTitle title='Guimark | Mariana' /><Mariana /></>} />
                <Route path="/carmen" element={<><PageTitle title='Guimark | Carmen' /><Carmen /></>} />
                <Route path="/gabriela" element={<><PageTitle title='Guimark | Gabriela' /><GabrielaMtz /></>} />
                <Route path="/marco-antonio" element={<><PageTitle title='Guimark | Marco Antonio' /><MarcoAntonio /></>} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    );
}
