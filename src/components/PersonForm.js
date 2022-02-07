import { useState, useEffect, Fragment, useCallback } from "react";

const PersonForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [data, setData] = useState(null);
  const [errors, setError] = useState(null);

  

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBirthDateChange = (e) => setBirthDate(e.target.value);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setData({ name: fullName, email: email, birthDate: birthDate });
  };

  const postPerson = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      if(json.status >= 400){
        setError(json);
      }else{
        props.handleAddPerson(json)
        setFullName("");
        setEmail("");
        setBirthDate("");
        setData(null);
        setError(null);
      }      
      
    } catch (error) {
      console.log(error);
    } finally {

    }
  },[data,props]);

  useEffect(()=>{
    if(data){
      postPerson();
    }
  },[data, postPerson])

  return (
    <Fragment>
      <p className="text text-center text-danger"></p>
      <form onSubmit={handleSubmitForm}>
        <div className="d-flex gap-3 g-0">
          <div className="col form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors && errors.errors.name && 'is-invalid'}`}
              id="name"
              placeholder="Please enter your name..."
              value={fullName}
              onChange={handleFullNameChange}
            />
            <label htmlFor="name">Full name</label>
            {errors && errors.errors.name && <small className="text-danger">{errors.errors.name.join(',')}</small>}
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
    </Fragment>
  );
};

export default PersonForm;
