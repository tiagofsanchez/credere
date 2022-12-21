const Form = () => {
  return (
    <form action="">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" id="name" autoComplete="given-name" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email-address">Your email</label>
          <input type="text" name="email" id="email" autoComplete="email" />
        </div>
      </div>
    </form>
  );
};

export default Form;
