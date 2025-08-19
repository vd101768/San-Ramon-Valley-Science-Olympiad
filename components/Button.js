export default function Button({ children, className }) {
  return (
    <button
      type="button"
      className={`block px-5 py-2 font-medium tracking-wider text-gray-300 uppercase transition-colors border-2 border-gray-300 rounded-full hover:border-gray-100 hover:text-gray-100 ${className}`}
    >
      {children}
    </button>
  );
}
