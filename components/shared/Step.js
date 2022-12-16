const Step = ({ children }) => {
  return (
    <span className="bg-pink-400/10 text-pink-700 text-2xl font-bold rounded-full border-pink-700 border-2 h-12 w-12 flex items-center justify-center ">
      {children}
    </span>
  );
};

export default Step;
