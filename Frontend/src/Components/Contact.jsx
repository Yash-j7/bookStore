import React from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e1c5bac-3a00-47d8-85df-e7f743883b9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Message sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className=" p-10 mt-5">
      <h1 className="text-4xl flex justify-center font-serif font-semibold text-blue-400">
        Share your Views
      </h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center col-span-1 p-4 bg-white rounded shadow dark:bg-slate-700"
        >
          <label htmlFor="name" className="mb-2">
            Name :
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label htmlFor="email" className="mb-2">
            Email :
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <label htmlFor="message" className="mb-2">
            Message :
          </label>
          <textarea
            name="message"
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
        <div className="col-span-1 flex items-center justify-center">
          <img
            src="https://t4.ftcdn.net/jpg/04/80/32/91/240_F_480329143_udbywRAkIk8LObNgwFnLhWqbOyjenXca.jpg"
            alt="Contact Illustration"
            className="rounded shadow h-[300px]"
          />
        </div>
      </div>
      <span className="flex justify-center mt-4">{result}</span>
    </div>
  );
}
