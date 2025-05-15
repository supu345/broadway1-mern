import React from "react";
import blog2 from "../assets/blog2.jpg";
import blog1 from "../assets/blog/blog1.jpeg";
import { Helmet } from "react-helmet";
const BlogDetails = () => {
  return (
    <div>
      <Helmet>
        <title>BlogDetails - Hajj Travel Agency</title>
        <meta
          name="description"
          content="Explore the best Hajj and Umrah packages with our trusted travel agency."
        />
        <link rel="canonical" href="https://broadwayhajj.com" />
      </Helmet>

      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${blog1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative flex flex-col items-center">
          <p className="text-center text-white text-7xl font-bold">Blog</p>
        </div>
      </div>

      <div className="mt-[50px]">
        <img
          src={blog2}
          alt="image1"
          className="px-[100px] h-[400px] w-[1000px] object-cover"
        />
        <div className="px-[100px] mt-[50px] mr-[100px] mb-[100px]">
          <p className=" pt-3  font-bold text-4xl py-5">
            ইহরাম করা ও ইহরাম পরা কি একই বিষয় ?
          </p>
          <p className="py-2">ইহরামের কাপড় পরা আর ইহরাম করা—একই বিষয় নয়! </p>
          <p>
            অনেক হজ্জযাত্রী মনে করেন, ইহরামের কাপড় পরা মানেই ইহরাম বেঁধে ফেলা।
            কিন্তু বাস্তবে এই দুটি বিষয় আলাদা।
          </p>
          <p className="py-2 ">
            ইহরামের কাপড় পরা হয় সাধারণত ঢাকা থেকে রওনা হওয়ার সময়, যাতে বিমানে
            ওঠার পর কাপড় বদলানোর ঝামেলা না থাকে। এটি শুধু প্রস্তুতির অংশ।
          </p>
          <p className="py-2 ">
            আর ইহরাম করা (বা ইহরাম বাঁধা) মানে হলো ইহরামের নিয়ত করা ও তালবিয়া
            “লাব্বাইকা আল্লাহুম্মা উমরাহ” পাঠ করে মুহরিম হওয়া। এই মুহূর্ত থেকেই
            ইহরামের বিধান আপনার ওপর প্রযোজ্য হয়ে যায়।
          </p>
          <p className="py-2 ">
            যারা ঢাকা-জেদ্দা ফ্লাইটে যাচ্ছেন, তাঁরা মিকাতের কিছুক্ষণ আগে পাইলটের
            ঘোষণা শুনে ইহরাম বাঁধবেন। তার আগে শুধু কাপড় পরে থাকবেন, কিন্তু নিয়ত
            করবেন না।
          </p>
          <p className="py-2 ">
            অনেকে ভুল করে বাড়ি, এয়ারপোর্ট বা বিমানে উঠেই নিয়ত করে ফেলেন। এতে
            সময়ের আগেই ইহরামের বিধান শুরু হয়ে যায়, যা অপ্রয়োজনীয় কষ্ট ও
            বিভ্রান্তি তৈরি করতে পারে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
