import React, { useContext } from "react";
import "./SpecificBlog.css";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";
import ColorNavbar from "../ColorNavbar/ColorNavbar";

const SpecificBlog = () => {
  const { id } = useParams();
  const blogId = parseInt(id);
  const { blogs } = useContext(BlogContext);

  const specificBlog = blogs.find((item) => item.id === blogId);

  return (
    <>
      <ColorNavbar />
      <div className="bg-white font-sans leading-normal tracking-normal">
        <div className="text-center pt-16 md:pt-22 font-medium head">
          <p className="text-sm md:text-base font-bold">
            <span className="text-gray-900">- {specificBlog.date} -</span>
          </p>
          <h1 className="font-bold break-normal text-3xl">
            Post By - {specificBlog.author}
          </h1>
        </div>

        <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded image">
          <div className="flex justify-end p-6">
            <p className="hidden sm:block p-2 text-center text-white text-xm">
              <span>Share this</span>
            </p>
            <a
              className="inline-block text-white no-underline hover:text-white hover:underline text-center h-10 w-8 p-2 md:h-auto md:w-16 md:p-4"
              href="https://twitter.com/intent/tweet?url=#"
            >
              <svg
                className="fill-current text-white h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
              </svg>
            </a>
            <a
              className="inline-block text-white no-underline hover:text-white hover:underline text-center h-10 w-8 p-2 md:h-auto md:w-16 md:p-4"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg
                className="fill-current text-white h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
              </svg>
            </a>
            <a
              className="inline-block text-white no-underline hover:text-white hover:underline text-center h-10 w-8 p-2 md:h-auto md:w-16 md:p-4"
              href="https://www.instagram.com/accounts/login=#"
            >
              <svg
                className="fill-current text-white h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
              >
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="container max-w-5xl mx-auto -mt-36">
          <div className="mx-0 sm:mx-6">
            <div className="bg-white w-full p-8 md:p-20 text-gray-800 leading-normal shadow-md m-2">
              <h1>{specificBlog.title}</h1>
              <p>{specificBlog.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificBlog;
