interface PillProps {
  label: string;
  active: boolean;
  onClick: () => void; // <-- fully type the function prop
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full ${
        active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={onClick} // <-- use the properly typed prop
    >
      {label}
    </button>
  );
};

export default Pill;
