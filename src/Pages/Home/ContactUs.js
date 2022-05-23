import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold my-10 ">Contact Us </h1>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1653302648~exp=1653303248~hmac=f736aa9d573244279dedd6fa880325a5987705cac3e57c3f28b0428a625719f6&w=900")`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-sm lg:max-w-lg">
            <h1 class="mb-1 text-5xl font-bold text-yellow-200">Hello there</h1>
            <h2 class="mb-1 text-xl font-bold text-white">
              Wanna join with us?
            </h2>
            <p class="my-5 font-mono ">
              If you interested to work with us, Knock us, we are so friendly.
              your afford will make us proud.Make mock test with us, it will be
              fun. ❤️
            </p>
            <button class="btn btn-primary">Set a test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
