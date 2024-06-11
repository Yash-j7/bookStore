import React from "react";

function About() {
  return (
    <div className="flex max-sm:flex-col max-sm:p-5 justify-around bg-slate-300  mt-[150px] dark:bg-white text-black">
      <div className="w-[100%] md:w-[40%] rounded-xl">
        <img
          src="https://blog.hubspot.com/hs-fs/hubfs/ebook-template_0.webp?width=893&height=600&name=ebook-template_0.webp"
          alt=""
        />
      </div>
      <div className=" md:w-[60%]">
        <div className="flex flex-col align-middle justify-center">
          <h1 className="text-4xl dark:text-black md:text-3xl font-semibold text-center text-white  p-4 rounded-lg shadow-lg">
            An E-Book Corner
          </h1>

          <p className="text-lg font-serif p-5">
            Welcome to bookStore, your ultimate destination for e-books! We are
            dedicated to providing a vast collection of e-books that cater to
            all your reading desires. Our mission is to make reading accessible
            and enjoyable for everyone. We believe that books have the power to
            educate, entertain, and inspire. Our library features a diverse
            selection of e-books across various genres, including fiction,
            non-fiction, science fiction, romance, mystery, self-help, and more.
            We provide a seamless online reading experience with easy
            navigation, quick search options, and user-friendly interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
