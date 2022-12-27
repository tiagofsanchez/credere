import Step from "../shared/Step";

const HomePageHow = () => {
  return (
    <section className="mx-auto max-w-6xl px-8">
      <div className="mx-auto text-center grid gap-4 mb-8">
        <span className="uppercase text-pink-700 text-sm font-bold ">
          How it works?
        </span>
        <h2 className="text-3xl text-center font-bold">
          Our simple process to help you out
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        <div>
          <Step>1</Step>
          <h2 className="text-2xl font-bold mb-5 mt-5">
            Check your eligibility
          </h2>
          <p className="text-lg text-gray-500">
            We will help you gathering all the documentation you required in
            order to get your mortgage.
          </p>
          <p className="text-lg text-gray-500">We will be here every step of the way.</p>
        </div>
        <div>
          <Step>2</Step>
          <h2 className="text-2xl font-bold mb-5 mt-5">
            Your Credit options{" "}
          </h2>
          <p className="text-lg text-gray-500">
            After gathering all information on your behalf we will work with our
            partners to taylor a mortgage for your case.
          </p>
          <p className="text-lg text-gray-500">We will propose different options.</p>
        </div>
        <div>
          <Step>3</Step>
          <h2 className="text-2xl font-bold mb-5 mt-5">
            Giving back
          </h2>
          <p className="text-lg text-gray-500">
            You will select a charity that will put 5% of our top line to a good
            use.
          </p>
          <p className="text-lg text-gray-500">Your mortgage will have a social impact with no costs to you.</p>
        </div>
      </div>
    </section>
  );
};

export default HomePageHow;
