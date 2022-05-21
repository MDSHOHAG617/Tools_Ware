import React from "react";

const Banner = () => {
  return (
    <div class="carousel w-full lg:w-10/12 lg:h-[600px] mx-auto ">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/6790049/pexels-photo-6790049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="w-full mx-auto "
        />{" "}
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/5710791/pexels-photo-5710791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="w-full"
          alt=""
        />{" "}
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/7285926/pexels-photo-7285926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="w-full"
          alt=""
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/1659746/pexels-photo-1659746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="w-full"
          alt=""
        />{" "}
        /
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" class="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
