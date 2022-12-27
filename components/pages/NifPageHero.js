import Button from "../shared/Button";

const NifPageHero = () => {
  return (
    <section className="relative px-8">
      <div className="mx-auto max-w-3xl pt-40 pb-52">
        <h1 className="text-4xl font-bold tracking-wide sm:text-center sm:text-6xl">
          The only way to get a #️⃣ NIF in Portugal
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
          Are planing to move to Portugal? You will need to have your NIF
          number. We will take care of everything for you. Get your NIF from the
          comfort of your home.
        </p>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <Button description="Get your #️⃣ NIF" primary={true} />
        </div>
      </div>
    </section>
  );
};

export default NifPageHero;
