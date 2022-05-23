import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/myself.png";
import icon from "../../images/icon.jpg";

const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-sm  rounded-lg shadow-2xl hover:bg-sky-100"
            alt=""
          />
          <div className="lg:p-20">
            <div className="">
              <h1 class="text-5xl font-bold">H! I am Md Shohag</h1>
              <p class="py-6">
                Student of{" "}
                <a className="text-blue-500" href="https://smuct.edu.bd/">
                  Shanto mariam university of creative technology.
                </a>
                Department of Computer Science and Information Technology
                (CSIT). Learning web development, next goal is being a full
                stack web developer.
              </p>
            </div>
            <div className="">
              <div class="card w-10/12 mx-auto bg-sky-100 shadow-xl">
                <div class="card-body ">
                  <h2 class="card-title">About me</h2>
                  <p>
                    <span className="font-bold">Email: </span>{" "}
                    mdshohag119764@gmail.com
                  </p>

                  <p>
                    {" "}
                    <span className="font-bold">Education: </span>Doing
                    B.Sc.(hons) in CSIT
                  </p>

                  <div className="">
                    <h2 className="card-title">Skills :</h2>
                    <div className="all-ratings grid grid-cols-1 lg:grid-cols-2">
                      <div className="left-ratings">
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/2x/html-5.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/dusk/2x/css3.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/bootstrap.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/javascript.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                      </div>
                      <div className="right-ratings">
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/react-native.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/nodejs.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                      </div>
                    </div>

                    {/* <div class="card-actions justify-end">
                      <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-sky-100">
        <div class="hero-content text-center">
          <div class="">
            <h1 class="text-5xl font-bold">Some of my projects links</h1>
            <p class="py-6">
              <li>
                <a
                  className="text-blue-500"
                  href="https://mdshohag617.github.io/Agency/"
                >
                  https://mdshohag617.github.io/Agency/
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500"
                  href="https://assignment-10-firebase-auth.web.app/"
                >
                  https://assignment-10-firebase-auth.web.app/
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500"
                  href="https://assignment-11-node-mongo.web.app/"
                >
                  https://assignment-11-node-mongo.web.app/
                </a>
              </li>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
              <button class="btn btn-lg btn-info">
                <div className=" ">
                  <a
                    className="flex justify-center items-center"
                    href="https://www.facebook.com/profile.php?id=100004130176262"
                  >
                    Knock me on{" "}
                    <img
                      className="w-12 mx-2"
                      src="https://img.icons8.com/fluency/344/facebook-new.png"
                      alt=""
                    />
                    to hire me{" "}
                    <div class="avatar">
                      <div class="w-12 ml-3 mask mask-circle">
                        <img
                          src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/277167251_2219883851492599_654433035876123528_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHK5jI929stR6Fycnu8NfpVNrJgWhj4L3Y2smBaGPgvdrdyq-Coy0C12tXD-CzAvZJO_ijJMcdHH5nsJeqNyVYi&_nc_ohc=Itt0RN1BG9oAX_t8Ewi&_nc_ht=scontent.fdac15-1.fna&oh=00_AT_kkP32qzcRu1FpPe6TrFaXHY1qT5pRZA2L_CKvmh5nZg&oe=628FFAD0"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </button>
              <button class="btn btn-lg   ">
                <div className=" ">
                  <a
                    className="flex justify-center items-center"
                    href="https://www.linkedin.com/in/md-shohag-034bb6190/"
                  >
                    Knock me on{" "}
                    <img
                      className="w-12 mx-2"
                      src="https://img.icons8.com/color/2x/linkedin-circled.png"
                      alt=""
                    />
                    to hire me{" "}
                    <div class="avatar">
                      <div class="w-12 ml-3 mask mask-circle">
                        <img
                          src="https://media-exp1.licdn.com/dms/image/C5603AQGTb5E_oiIbMQ/profile-displayphoto-shrink_200_200/0/1594137809289?e=1658966400&v=beta&t=6EZ92_IM2AsLatZbSKNICLQ8DYJa-AuedBU5WDfZ9U0"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </button>
              <button class="btn btn-lg  btn-success">
                <div className=" ">
                  <a
                    className="flex justify-center items-center"
                    href="https://twitter.com/cr007_jb"
                  >
                    Knock me on{" "}
                    <img
                      className="w-12 mx-2"
                      src="https://img.icons8.com/color/2x/twitter.png"
                      alt=""
                    />
                    to hire me{" "}
                    <div class="avatar">
                      <div class="w-12 ml-3 mask mask-circle">
                        <img
                          src="https://pbs.twimg.com/profile_images/1499152225372762115/ygAuNqac_400x400.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="my-10">
          <h2 className="text-4xl font-bold "> </h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
