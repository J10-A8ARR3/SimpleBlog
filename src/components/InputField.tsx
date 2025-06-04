type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  required?: boolean;
};

const InputField = ({ label, type, id, name, required = false }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default InputField;
