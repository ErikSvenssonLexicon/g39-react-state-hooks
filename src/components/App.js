const App = (props) => {
  return (
    <div className="container">
      <div className="card mt-5 shadow">
        <div className="card-body">
          <p className="text text-center text-danger"></p>
          <form>
            <div className="d-flex gap-3 g-0">
              <div className="col form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Please enter your name..."
                />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="col form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Please enter your email..."
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="date" className="form-control" id="birthDate" />
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
    </div>
  );
};

export default App;
