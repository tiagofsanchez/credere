import Step from "../shared/Step";

const HomePageHow = () => {
  return (
    <section className="mx-auto max-w-6xl px-8">
      <div className=" grid md:grid-cols-3 gap-10 grid-cols-1">
        <div>
          <Step>1</Step>
          <h2 className="text-xl sm:text-2xl font-bold mb-5 mt-5">
            Check your eligibility
          </h2>
          <p>
            We will help you gathering all the documentation you required in
            order to get your mortgage.
          </p>
          <p>We will be here every step of the way.</p>
        </div>
        <div>
          <Step>2</Step>
          <h2 className="text-xl sm:text-2xl font-bold mb-5 mt-5">
            Your Credit options{" "}
          </h2>
          <p>
            After gathering all information on your behalf we will work with our
            partners to taylor a mortgage for your case.
          </p>
          <p>We will propose different options.</p>
        </div>
        <div>
          <Step>3</Step>
          <h2 className="text-xl sm:text-2xl font-bold mb-5 mt-5">
            Giving back
          </h2>
          <p>
            You will select a charity that will put 5% of our top line to a good
            use.
          </p>
          <p>Your mortgage will have a social impact.</p>
        </div>
      </div>
    </section>
  );
};

export default HomePageHow;
