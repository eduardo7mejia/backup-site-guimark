import { IconUsers } from "./ui/Icons";
import VCard from 'vcard-creator';

export const ContactCard = ({ name, title, imageUrl, phone, email, socialProfile, role, company}) => {

    const handleSaveContact = () => {
        const [firstName, ...lastNameParts] = name.split(' ');
        const lastName = lastNameParts.join(' ');

        // Create a new vCard instance
        const myVCard = new VCard();

        // Add personal data
        myVCard
            .addName(lastName, firstName)
            .addJobtitle(title)
            .addEmail(email)
            .addPhoneNumber(phone, 'CELL')
            .addRole(role)
            .addCompany(company)
            .addURL(socialProfile);

        // Get the vCard data as a string
        const vCardData = myVCard.toString();

        // Create a Blob with the vCard data
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name.replace(/\s+/g, '_')}.vcf`; // Nombre del archivo sin espacios
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-full p-4 grid md:flex md:h-[30rem] h-[28rem] 2xl:h-[46rem]">
            <div className="grid md:flex items-center justify-center rounded-lg overflow-hidden w-full relative">
                <div className="grid w-full md:w-[40%] items-center justify-center justify-items-center gap-4 relative overflow-hidden" data-aos="zoom-in">
                    <img src={imageUrl} alt={name} className="w-52 h-52 md:w-80 md:h-80 2xl:w-96 2xl:h-96 object-cover rounded-full" loading='lazy' />
                    <div className="" data-aos="zoom-in" data-aos-delay="300">
                        <button
                            onClick={handleSaveContact}
                            className="bg-blue-600 pl-6 pr-6 pt-2 pb-2 2xl:pr-16 2xl:pl-16 2xl:pt-5 2xl:pb-5 text-white text-base md:text-2xl gap-2 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-blue-700"
                        >
                            GUARDAR CONTACTO
                            <IconUsers />
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-full max-w-full md:max-w-[1%] relative h-3 md:h-96 grid items-center justify-center" data-aos="zoom-in">
                    <span className="bg-orange-500 w-80 md:w-2 h-2 md:h-64 2xl:h-96"></span>
                </div>
                <div className="w-full md:w-[59%] grid items-center justify-center uppercase">
                    <h2 className="font-bold text-2xl md:text-6xl" data-aos="zoom-in">{name}</h2>
                    <p className="text-2xl md:text-6xl text-white bg-orange-500 font-semibold mt-2 pl-0 pr-0 pt-3 pb-3 text-center" data-aos="zoom-in" data-aos-delay="300">{title}</p>
                </div>
            </div>
        </div>
    );
};
