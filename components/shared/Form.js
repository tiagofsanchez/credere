import { useRouter } from "next/router";
import useFormInput from "../../hooks/useFormInput";

const Form = () => {
  const { inputs, onChange, resetForm } = useFormInput({ name: "", email: "" });
  const router = useRouter();

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    const request = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(inputs),
    });
    resetForm();
    router.push("/thank-you");
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <fieldset className="grid gap-5">
        <label className="block grid">
          <span htmlFor="name">Your name</span>
          <input
            name="name"
            value={inputs.name}
            type="text"
            id="name"
            autoComplete="given-name"
            className="form-input rounded mt-1"
            placeholder=""
            onChange={onChange}
          />
        </label>
        <label className="block grid">
          <span htmlFor="email-address">Your email</span>
          <input
            type="text"
            name="email"
            value={inputs.email}
            id="email"
            autoComplete="email"
            className="form-input rounded mt-1"
            placeholder=""
            onChange={onChange}
          />
        </label>
        <button className="bg-pink-700 p-2 mt-4 rounded text-white hover:text-black shadow-sm ring-2 ring-pink-900 hover:bg-pink-200 hover:ring-pink-700 font-semibold  ">
          Join
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
