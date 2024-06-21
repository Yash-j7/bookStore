import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/yash-jha-18b04b250/"
              target="_false"
            >
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="Linkedin"
                className="w-[40px] h-[40px] fill-current "
              />
            </a>
            <a href="https://www.instagram.com/_yashj_7_6/">
              <img
                src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                alt="Instagram"
                target="_false"
                className="w-[40px] h-[40px] fill-current "
              />
            </a>

            <a href="https://github.com/Yash-j7">
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                alt="Github"
                target="_false"
                className="w-[35px] h-[35px] fill-current dark:bg-white rounded-full"
              />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by bookStore</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
