import { useState } from "react";

const PersonForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBirthDateChange = (e) => setBirthDate(e.target.value);
  const handleSubmitForm = (e) =>{
      e.preventDefault();
      const person = {
          id: Math.floor(Math.random() * 10000),
          fullName: fullName,
          email: email,
          birthDate: birthDate
      }
      props.handleAddPerson(person);

      setFullName("");
      setEmail("");
      setBirthDate("");
  }

  return (
    <div className="card mt-5 shadow">
      <div className="card-body">
        <p className="text text-center text-danger"></p>
        <form onSubmit={handleSubmitForm}>
          <div className="d-flex gap-3 g-0">
            <div className="col form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Please enter your name..."
                value={fullName}
                onChange={handleFullNameChange}
              />
              <label htmlFor="name">Full name</label>
            </div>
            <div className="col form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Please enter your email..."
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input 
                type="date" 
                className="form-control" 
                id="birthDate"
                value={birthDate}
                onChange={handleBirthDateChange} 
            />
            <label htmlFor="birthDate">Date of birth</label>
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonForm;
