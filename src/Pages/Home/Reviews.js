import React from "react";

const Reviews = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold my-10 ">Customer Reviews </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mx-10 my-16">
        <div class="card bg-pink-100 hover:bg-slate-200 card-side shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=92048"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono ">
            <h2 class="card-title">Nikki</h2>
            <p>I am really impressed, this website helps me a lot.</p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8 "
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card card-side hover:bg-slate-200 bg-pink-200 shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=88560"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono">
            <h2 class="card-title">Ayat</h2>
            <p>I started my Business, by this website. great website</p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card card-side hover:bg-slate-200 bg-cyan-100 shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=80245"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono">
            <h2 class="card-title">Cikki</h2>
            <p>wow! an amazing website, so much help full for everyone</p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card card-side hover:bg-slate-200 bg-cyan-200 shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=77703"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono">
            <h2 class="card-title ">Georgia</h2>
            <p className="">
              I started with nothing, Tools-ware make me an Business girl{" "}
            </p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
