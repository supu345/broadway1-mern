import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/30648631/pexels-photo-30648631/free-photo-of-close-up-of-kaaba-s-door-in-mecca-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative flex flex-col items-center">
          <p className="text-center text-white text-7xl font-bold">Blog</p>
        </div>
      </div>

      <div>
        <h1 className=" pt-3 px-6 font-bold text-4xl py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore{" "}
        </h1>
        <img
          src="https://images.pexels.com/photos/18351141/pexels-photo-18351141/free-photo-of-crowd-of-pilgrims-around-kaaba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image1"
          className="px-[100px]"
        />
        <p className="py-4 px-[100px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
