import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="image bg-cover h-auto">
        <div className="h-auto footer-main">
          <div className="container max-w-6xl mx-auto flex justify-around items-center px-4 py-4">
            <div className="w-full mx-auto flex flex-wrap items-center mb-0">
              <div
                className="flex w-full md:w-1/3 justify-center md:justify-start text-white items-center flex justify-center"
                style={{ color: "#e8f1f5" }}
              >
                <div className="p-8 pb-14 text-justify">
                  <p className="text-2xl mb-4 font-bold text-center">
                    Our Secret
                  </p>
                  <p className="text-lg text-center">
                    Individual commitment to a group effort—that is what makes a
                    team work, a company work, a society work, a civilization
                    work.
                  </p>
                </div>
              </div>
              <div
                className="flex w-full md:w-1/3 justify-center md:justify-start text-white items-center flex justify-center"
                style={{ color: "#e8f1f5" }}
              >
                <div>
                  <div className="p-8 text-justify footer-content-area">
                    <p className="text-2xl mb-4 font-bold text-center">
                      Blogger
                    </p>
                    <p className="text-lg text-center">
                      A destination where every idea reaches to peak of
                      evolution and takes form of a real world attribute. An
                      asset on which a community relies, a prospect on which the
                      World relies.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex w-full md:w-1/3 justify-center md:justify-start text-white items-center font-xl"
                style={{ color: "#e8f1f5" }}
              >
                <span
                  className="block tracking-wide"
                  style={{ color: "#e8f1f5" }}
                >
                  <div className="p-8 px-16">
                    <h2 className="font-bold break-normal text-2xl text-center">
                      Subscribe
                    </h2>
                    <div className="max-w-xl mx-auto flex justify-center">
                      <div className="flex justify-center footer-border-bottom">
                        <div>
                          <input
                            type="email"
                            placeholder="email@example.com"
                            className="flex-1 mt-2 bg-transparent appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="container pt-2 text-sm text-white font-semibold border-none hover:border-transparent focus:outline-none animate-bounce"
                        >
                          <svg
                            className="svg-icon h-8 w-8 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <hr className="mx-44" style={{ background: "white" }} />

          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div
                className="flex p-4 w-full md:w-1/2 justify-center md:justify-start text-white font-bold list-reset items-center flex justify-center space-x-8 font-bold font-xl"
                style={{ color: "#e8f1f5" }}
              >
                <a
                  className="inline-block no-underline hover:text-blue-300 footer-links"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="inline-block no-underline hover:text-blue-300 footer-links"
                  href="#"
                >
                  All Blogs
                </a>
                <a
                  className="inline-block no-underline hover:text-blue-300 footer-links"
                  href="#"
                >
                  Our Story
                </a>
              </div>
              <div className="flex w-full p-4 content-center justify-center md:w-1/2 md:justify-end">
                <div>
                  <button className="container flex justify-center px-4 py-1 text-sm text-white font-semibold border-none hover:border-transparent focus:outline-none transform ease-in-out hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 py-1 text-sm text-white font-semibold border-none hover:border-transparent focus:outline-none transform ease-in-out hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="fill-current text-white h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 py-1 text-sm text-white font-semibold border-none hover:border-transparent focus:outline-none transform ease-in-out hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="instagram fill-current h-4 w-4"
                      viewBox="0 0 22 22"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <button className="container flex justify-center px-4 py-1 text-sm text-white font-semibold border-none hover:border-transparent focus:outline-none transform ease-in-out hover:scale-110 motion-reduce:transform-none">
                    <svg
                      className="linkedin fill-current h-4 w-4"
                      viewBox="0 0 22 22"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19,19H16V13.7A1.5,1.5 0 0,0 14.5,12.2A1.5,1.5 0 0,0 13,13.7V19H10V10H13V11.2C13.5,10.36 14.59,9.8 15.5,9.8A3.5,3.5 0 0,1 19,13.3M6.5,8.31C5.5,8.31 4.69,7.5 4.69,6.5A1.81,1.81 0 0,1 6.5,4.69C7.5,4.69 8.31,5.5 8.31,6.5A1.81,1.81 0 0,1 6.5,8.31M8,19H5V10H8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
