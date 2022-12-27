import Step from "../shared/Step";

const NifPageHow = () => {
  return (
    <section className="mx-auto max-w-6xl px-8">
      <div className="mx-auto text-center grid gap-4 mb-8">
        <span className="uppercase text-pink-700 text-m font-bold">
          How it works?
        </span>
        <h2 className="text-3xl text-center font-bold">
          Get your NIF the easy way
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        <div>
          <Step>1</Step>
          <h2 className="text-2xl font-bold mb-5 mt-5">
            Place your order
          </h2>
          <p className="text-lg text-gray-500">
            Talk to us on the chat to understand your eligibility and what is
            required. We are here to help you out
          </p>
          <p className="text-lg text-gray-500">
            If all is good and you want to proceed, you will need to complete a
            100 eur payment
          </p>
        </div>
        <div>
          <Step>2</Step>
          <h2 className="text-2xl font-bold mb-5 mt-5">
            Sign your Power of Attorney
          </h2>
          <p className="text-lg text-gray-500">
            After gathering all information on your behalf we will work with our
            partners to taylor a mortgage for your case
          </p>
          <p className="text-lg text-gray-500">We will propose different options</p>
        </div>
        <div>
          <Step>3</Step>
          <h2 className="text-2xl font-bold mb-5 mt-5">
            Receive your Portuguese NIF
          </h2>
          <p className="text-lg text-gray-500">
            Ministerio das Financas will send an official PDF via email with
            your NIF
          </p>
          <p className="text-lg text-gray-500">Your NIF is now active</p>
        </div>
      </div>
    </section>
  );
};

export default NifPageHow;
