import Form from "./Form";

const Footer = () => {
  return (
    <div className="bg-gray-100 h-full">
      <div className="px-8 pt-8 mt-10 mb-20 max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2  grid-cols-1">
          <div className="shrink">
            <div aria-label="Global">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <h1 className="text-5xl text-pink-700 font-bold">Cr</h1>
              </a>
            </div>
            <p className="mt-5 text-gray-600 ">
              Credere, the only way to get your 📑 mortgage
            </p>
            <p className="text-gray-600 ">
              We are building the best and totally free experience in the market
              to help you with everything about your mortgage. Credere, the
              mortgage with social impact!
            </p>
          </div>
          <div className="grow">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 ">
              Join our newsletter
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
