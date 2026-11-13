const StepTwo = ({ name, email, password, setIsSubmitted }) => {
  return (
    <div className="results-container">
      `<h1>Results</h1>
      <div className="results-card">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button onClick={() => setIsSubmitted(false)}>
        Edit your information
      </button>
    </div>
  );
};
// ⚠️ N'oubliez pas l'export !
export default StepTwo;
