type SubmitButtonProps = {
  text: string;
};

const SubmitButton = ({ text }: SubmitButtonProps) => (
  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
  >
    {text}
  </button>
);

export default SubmitButton;
