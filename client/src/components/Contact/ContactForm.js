import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message sent correctly");
  };

  return (
    <>
      <h1 className="text-center text-white mt-5">Contactanos</h1>

      <form className="mx-5 mt-3" onSubmit={handleSubmit}>
        <div className="formCool bg-dark text-white">
          <div class="grupo">
            <input
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span class="barra"></span>
            <label>Nombre</label>
          </div>
          <div class="grupo">
            <input
              type="email"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span class="barra"></span>
            <label>Email</label>
          </div>
          <div class="grupo">
            <input
              type="text"
              name=""
              id=""
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <span class="barra"></span>
            <label>Asunto</label>
          </div>
          <div class="grupo">
            <textarea
              name=""
              id=""
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <span class="barra"></span>
            <label>Mensaje</label>
          </div>

          <div className="text-center mb-5">
            <button type="submit" className="button-85">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
