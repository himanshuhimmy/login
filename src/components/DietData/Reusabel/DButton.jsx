// components/common/Button.jsx
const DButton = ({ children, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-cyan-600 p-4 rounded-xl text-white hover:bg-cyan-500 transition-all duration-500 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default DButton;
