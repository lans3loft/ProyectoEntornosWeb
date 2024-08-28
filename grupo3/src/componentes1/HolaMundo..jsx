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

    
    if (!firstName || !secondName || !email || !phone) {
      alert('Por favor, complete todos los campos.');
      return;
    }

     
    if (!/^\d{9}$/.test(phone)) {
      alert('El número celular debe tener exactamente 9 dígitos.');
      return;
    }

    alert('Formulario enviado correctamente.');
  };

  return (
    
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">first Name</label>
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
            <label htmlFor="secondName">last Name</label>
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
          <label htmlFor="email">Email Address</label>
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
          <label htmlFor="phone">Phone Number</label>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    
 
  );
}

export default App;
