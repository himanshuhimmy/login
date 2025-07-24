function PersonalForm({ inputClass, inputValue, data }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-amber-500">Presonal Information</h3>
      <input
        onChange={(e) => inputValue(e.target.value, e.target.name)}
        className={inputClass}
        value={data.email}
        required
        placeholder="E-mail"
        name="email"
        type="text"
      />
      <input
        required
        pattern="\d{10}"
        minLength={10}
        onChange={(e) => inputValue(e.target.value, e.target.name)}
        value={data.phone}
        className={inputClass}
        name="phone"
        placeholder="Contact No"
        type="tel"
      />

      <span>Birth date</span>
      <input
        className={inputClass}
        value={data.birth}
        onChange={(e) => inputValue(e.target.value, e.target.name)}
        required
        name="birth"
        type="date"
      />
    </div>
  );
}

export default PersonalForm;
