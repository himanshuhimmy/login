const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  minLength,
  ...props
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <p className="p-3 text-cyan-700 font-semibold">{label}</p>}
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="rounded-lg p-1 mb-2 text-cyan-600"
        {...props}
      />
    </div>
  );
};

export default InputField;
