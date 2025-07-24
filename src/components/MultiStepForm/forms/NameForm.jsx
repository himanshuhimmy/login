const NameForm = ({ inputClass, inputValue, data }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-amber-500"> Your Name</h3>
      <input
        onChange={(e) => inputValue(e.target.value, e.target.name)}
        minLength={5}
        className={inputClass}
        value={data.firstName}
        placeholder="First Name"
        required
        name="firstName"
        type="text"
      />
      <input
        onChange={(e) => inputValue(e.target.value, e.target.name)}
        minLength={3}
        className={inputClass}
        value={data.lastName}
        required
        placeholder="Last Name"
        name="lastName"
        type="text"
      />
    </div>
  );
};

export default NameForm;
