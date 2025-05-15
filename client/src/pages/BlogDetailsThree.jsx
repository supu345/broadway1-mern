import React from "react";
import Photo3 from "../assets/blog3.jpg";
import blog1 from "../assets/blog/blog1.jpeg";
import { Helmet } from "react-helmet";

const BlogDetailsThree = () => {
  return (
    <div>
      <Helmet>
        <title>BlogDetailsThree - Hajj Travel Agency</title>
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
          src={Photo3}
          alt="image1"
          className="px-[100px] h-[400px] w-[1000px] object-cover"
        />
        <div className="px-[100px] mt-[50px] mr-[100px] mb-[100px]">
          <p className=" pt-3  font-bold text-3xl py-5">
            ব্রডওয়ে ট্যুরস অ্যান্ড ট্রাভেলস লিমিটেড-এর ২০২৫ সালের হাজীদের জন্য
            হজ্জ প্রশিক্ষণ কার্যক্রম শুরু হয়েছে।
          </p>
          <p className="py-2">
            আলহামদুলিল্লাহ! ব্রডওয়ে ট্যুরস অ্যান্ড ট্রাভেলস লিমিটেড-এর ২০২৫
            সালের হাজীদের জন্য হজ্জ প্রশিক্ষণ কার্যক্রম শুরু হয়েছে। আজ (৩ মে,
            ২০২৫) অনুষ্ঠিত হলো প্রথম দিনের সেশন।
          </p>
          <p>প্রশিক্ষণ প্রদান করেন—</p>
          <p className="py-2 ">
            আমাদের সম্মানিত শারীয়াহ কনসালটেন্ট শাইখ ড. ইমাম হোসেন
          </p>
          <p className="py-2 ">
            আমিনাহ কুরআন শিক্ষা, গবেষণা ও প্রশিক্ষণ কেন্দ্রের পরিচালক জনাব
            জাহিদুর রহমান
          </p>
          <p className="py-2 ">
            বাংলাদেশে অনুষ্ঠিতব্য আরও কয়েকটি সেশনের পর আমরা ইনশাআল্লাহ মক্কা আল
            মুকাররামার উদ্দেশ্যে যাত্রা করব। সৌদি আরবেও হজ্জ কার্যক্রম শুরুর
            পূর্বে ধারাবাহিক দারস ও হজ্জ প্রশিক্ষণ চলবে ইনশাআল্লাহ।
          </p>
          <p className="py-2 ">
            ব্রডওয়ে ট্যুরস অ্যান্ড ট্রাভেলস শুরু থেকেই হাজীদের সুশৃঙ্খল ও
            কার্যকর হজ্জ প্রশিক্ষণের বিষয়ে আন্তরিক। কারণ আমরা জানি—
          </p>
          <p className="py-2 ">
            হজ্জ শুধু একটি সফর নয়, বরং একটি গুরুত্বপূর্ণ ইবাদত, যার যথাযথ
            প্রস্তুতি অপরিহার্য।
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsThree;
