import React from "react";

function About() {
  return (
    <div className=" bg-slate-300  mt-[150px] dark:bg-white text-black">
      <div className="flex flex-col align-middle justify-center">
        <h1 className="text-4xl dark:text-black md:text-6xl font-semibold mb-3 text-center text-white  p-4 rounded-lg shadow-lg">
          An E-Book Corner
        </h1>

        <p className="text-xl p-10">
          Welcome to bookStore, your ultimate destination for e-books! We are
          dedicated to providing a vast collection of e-books that cater to all
          your reading desires. Our mission is to make reading accessible and
          enjoyable for everyone. We believe that books have the power to
          educate, entertain, and inspire. Our library features a diverse
          selection of e-books across various genres, including fiction,
          non-fiction, science fiction, romance, mystery, self-help, and more.
          We provide a seamless online reading experience with easy navigation,
          quick search options, and user-friendly interfaces. Our collection is
          constantly updated with new releases and timeless classics to ensure
          you always have access to the latest and greatest in literature. By
          offering high-quality e-books at competitive prices, we aim to foster
          a love for reading in people of all ages and backgrounds. Join our
          community of book lovers, share reviews, participate in discussions,
          and connect with fellow readers. Together, let's embark on a journey
          of literary discovery. Happy reading!
        </p>
      </div>
    </div>
  );
}

export default About;
