type RedirectMessageProps = {
  message: string;
  linkText: string;
  linkHref: string;
};

const RedirectMessage = ({ message, linkText, linkHref }: RedirectMessageProps) => (
  <p className="mt-4 text-center text-gray-600">
    {message}{' '}
    <a href={linkHref} className="text-blue-600 hover:underline">
      {linkText}
    </a>
  </p>
);

export default RedirectMessage;
