const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="block w-full px-3 py-2 rounded-lg bg-white dark:bg-neutral-950 border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-700"
    />
  );
};

export default Input;
