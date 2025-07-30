import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';

export const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',  // Cambiado de array a string
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value, type, multiple } = e.target;

    if (multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData({ ...formData, [id]: selectedOptions });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    setErrors({ ...errors, [id]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = 'El nombre es obligatorio';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'El correo electrónico es obligatorio';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
      isValid = false;
    }

    if (!formData.phone) {
      errors.phone = 'El teléfono es obligatorio';
      isValid = false;
    }

    if (!formData.service) {
      errors.service = 'Selecciona un servicio';
      isValid = false;
    }

    if (!formData.message) {
      errors.message = 'El mensaje es obligatorio';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const email = "ventas@guimark.com";
      const subject = 'Consulta de contacto';
      const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Restablecer los datos del formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      // Redirigir al cliente de correo electrónico
      window.location.href = mailtoLink;
    }
  };

  return (
    <div>
      <form
        className="bg-slate-200 py-6 px-4 md:px-8 rounded-2xl shadow-lg shadow-slate-300"
        data-aos="fade-up"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="grid">
            <label htmlFor="name" className="2xl:text-lg font-medium mb-1">Nombre:</label>
            <input
              id="name"
              type="text"
              placeholder="Escribe tu nombre completo"
              className={`w-full p-2 border text-slate-600 border-slate-200 focus:border-gray-300 focus:outline-slate-300 rounded-lg ${errors.name ? 'border-red-500' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="grid">
            <label htmlFor="email" className="2xl:text-lg font-medium mb-1">Correo:</label>
            <input
              id="email"
              type="email"
              placeholder="Introduce tu dirección de correo electrónico"
              className={`w-full p-2 border text-slate-600 border-slate-200 focus:border-gray-300 focus:outline-slate-300 rounded-lg ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="grid">
            <label htmlFor="phone" className="2xl:text-lg font-medium mb-1">Teléfono:</label>
            <input
              id="phone"
              type="tel"
              placeholder="Número de teléfono de contacto"
              className={`w-full p-2 border text-slate-600 border-slate-200 focus:border-gray-300 focus:outline-slate-300 rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="grid">
            <label htmlFor="service" className="2xl:text-lg font-medium mb-1">Servicio:</label>
            <select
              id="service"
              className={`w-full p-2 border text-slate-600 border-slate-200 focus:border-gray-300 focus:outline-slate-300 rounded-lg ${errors.service ? 'border-red-500' : ''}`}
              value={formData.service}
              onChange={handleChange}
            >
                <option disabled value="">Selecciona un servicio</option>
              <option value="Desarrollo web">Desarrollo web</option>
              <option value="Redes sociales">Redes sociales</option>
              <option value="e-learning">e-learning</option>
              <option value="impresiones offset">Impresiones offset</option>
              <option value="branding">Branding</option>
              <option value="importación">Importación</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
          </div>
        </div>
        <div className="grid">
          <label htmlFor="message" className="2xl:text-lg font-medium mb-1">Mensaje:</label>
          <textarea
            id="message"
            maxLength="450"
            placeholder="Detalla aquí tu mensaje o consulta"
            className={`w-full p-3 border border-slate-200 focus:border-gray-300 focus:outline-slate-300 rounded-md mb-4 min-h-60 resize-y max-h-72 ${errors.message ? 'border-red-500' : ''}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 2xl:text-lg border bg-slate-50 border-slate-400 text-slate-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-slate-50 hover:border-orange-600 transition duration-300 ease-in-out"
        >
          <MdSend className="mr-2 transform -rotate-45" /> Enviar Mensaje
        </button>
      </form>
    </div>
  );
};
