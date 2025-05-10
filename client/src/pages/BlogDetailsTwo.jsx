import React from "react";
import Photo1 from "../assets/blog1.jpg";
import blog1 from "../assets/blog/blog1.jpeg";
const BlogDetailsTwo = () => {
  return (
    <div>
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
          src={Photo1}
          alt="image1"
          className="px-[100px] h-[400px] w-[1000px] object-cover"
        />
        <div className="px-[100px] mt-[50px] mr-[100px] mb-[100px]">
          <p className=" pt-3  font-bold text-4xl py-5">
            হজ্জযাত্রায় বিমানে ওঠার পূর্বে আপনার করণীয়।
          </p>
          <p className="py-2">
            আপনি যদি ঢাকা–জেদ্দা রুটে ভ্রমণ করেন, তাহলে বিমানে ওঠার আগেই ইহরামের
            কাপড় পরিধান করুন। বিমানের ভেতরে এটি পরা কষ্টকর হবে।{" "}
          </p>
          <p>
            ইহরামের আগে শরীরে আতর মেখে নিতে পারেন, কারণ ইহরাম করার পর সুগন্ধি
            ব্যবহার নিষেধ।
          </p>
          <p className="py-2 ">
            পাসপোর্ট, ভিসা, বোর্ডিং পাস ও প্রয়োজনীয় কাগজপত্র হ্যান্ড ব্যাগে
            রাখুন। বারবার এগুলো দেখাতে হতে পারে।
          </p>
          <p className="py-2 ">
            সরকারি ও এজেন্সির দেওয়া আইডি কার্ডগুলো গলায় ঝুলিয়ে নিন।
          </p>
          <p className="py-2 ">
            ওয়েটিং রুমে শৃঙ্খলা ও নীরবতা বজায় রাখুন। যেকোনো সময় বিমানে ওঠার ডাক
            আসতে পারে।
          </p>
          <p className="py-2 ">
            কেবিন ও চেক-ইন লাগেজে মালামাল নেওয়ার ক্ষেত্রে বিমান কর্তৃপক্ষের
            নির্দেশনা মেনে চলুন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsTwo;
