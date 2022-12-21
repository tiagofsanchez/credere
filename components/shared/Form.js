const Form = () => {
  return (
    <form action="">
      <div className="grid gap-5">
        <label className="block grid">
          <span htmlFor="name">Your name</span>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            class="form-input rounded mt-2 "
            placeholder=""
          />
        </label>
        <label className="block grid">
          <span htmlFor="email-address">Your email</span>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            class="form-input rounded mt-2"
            placeholder=""
          />
        </label>
        <button className="bg-pink-700 p-2 mt-4 rounded text-white hover:text-black shadow-sm ring-2 ring-pink-900 hover:bg-pink-200 hover:ring-pink-700 font-semibold  ">
          Join
        </button>
      </div>
    </form>
  );
};

export default Form;
