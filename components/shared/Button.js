const Button = ({ description, primary }) => {
  const forPrimary =
    "inline-flex gap-x-2 rounded-lg bg-pink-700 px-4 py-1.5 text-base font-semibold leading-7 text-white hover:text-black shadow-sm ring-2 ring-pink-900 hover:bg-pink-200 hover:ring-pink-700 ";
  const forSecondary =
    "inline-flex gap-x-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:text-pink-700 ring-2 ring-gray-900/10 hover:ring-pink-700";
  const buttonStyle = primary ? forPrimary : forSecondary;

  console.log({ forPrimary, buttonStyle, primary });

  return (
    <button href="#" className={buttonStyle}>
      {description}
      <span aria-hidden="true">&rarr;</span>
    </button>
  );
};

export default Button;
