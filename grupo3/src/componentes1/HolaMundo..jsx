import React, { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: ''
  });

  function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, secondName, email, phone } = formData;

    // Validar que todos los campos están llenos
    if (!firstName || !secondName || !email || !phone) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validar que el número celular tenga exactamente 9 dígitos
    if (!/^\d{9}$/.test(phone)) {
      alert('El número celular debe tener exactamente 9 dígitos.');
      return;
    }

    alert('Formulario enviado correctamente.');
  };

  return (
    <div className="form-container">
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Primer Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="secondName">Segundo Nombre</label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Número Celular</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="\d{9}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
