import React from "react";
import blog2 from "../assets/blog2.jpg";
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

      <div className="mt-[50px]">
        <img
          src={blog2}
          alt="image1"
          className="px-[100px] h-[400px] w-[1000px] object-cover"
        />
        <div className="px-13">
          <p className=" pt-3  font-bold text-4xl py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore{" "}
          </p>
          <p className="py-4 ">
            Wearing the Ihram clothing and entering into the state of Ihram are
            not the same thing! Many Hajj pilgrims mistakenly believe that
            wearing the Ihram clothing means they have already entered the state
            of Ihram. However, in reality, these are two distinct steps:
          </p>
          <p>
            Wearing Ihram Clothing: This is usually done before departing from
            Dhaka, to avoid the hassle of changing clothes on the plane. It is
            simply a preparatory step.
          </p>
          <p>
            {" "}
            Entering the State of Ihram: This means making the intention
            (niyyah) for Ihram and reciting the Talbiyah: “Labbayka Allahumma
            Umrah”. From this moment onward, the rules of Ihram become
            applicable to you.
          </p>
          <p>
            {" "}
            For those traveling on Dhaka-Jeddah flights, the pilot will announce
            shortly before reaching the Miqat. At that point, you should make
            the intention and enter Ihram. Before this, you only wear the Ihram
            clothing but do not make the intention.
          </p>
          <p>
            Some people mistakenly make the intention at home, at the airport,
            or as soon as they board the plane. This causes the rules of Ihram
            to start prematurely, leading to unnecessary difficulty and
            confusion.
          </p>
          <p> Remember:</p>
          <p>Wearing Ihram clothing is not the same as entering Ihram.</p>
          <p>
            {" "}
            Ihram begins only after making the intention (niyyah) and reciting
            the Talbiyah.
          </p>
          <p>Wudu is not a condition for entering into Ihram.</p>
        </div>
        <p>
          ইহরামের কাপড় পরা আর ইহরাম করা—একই বিষয় নয়! অনেক হজ্জযাত্রী মনে করেন,
          ইহরামের কাপড় পরা মানেই ইহরাম বেঁধে ফেলা। কিন্তু বাস্তবে এই দুটি বিষয়
          আলাদা। 🔹 ইহরামের কাপড় পরা হয় সাধারণত ঢাকা থেকে রওনা হওয়ার সময়, যাতে
          বিমানে ওঠার পর কাপড় বদলানোর ঝামেলা না থাকে। এটি শুধু প্রস্তুতির অংশ।
          🔹 আর ইহরাম করা (বা ইহরাম বাঁধা) মানে হলো ইহরামের নিয়ত করা ও তালবিয়া
          “লাব্বাইকা আল্লাহুম্মা উমরাহ” পাঠ করে মুহরিম হওয়া। এই মুহূর্ত থেকেই
          ইহরামের বিধান আপনার ওপর প্রযোজ্য হয়ে যায়। ✈️ যারা ঢাকা-জেদ্দা ফ্লাইটে
          যাচ্ছেন, তাঁরা মিকাতের কিছুক্ষণ আগে পাইলটের ঘোষণা শুনে ইহরাম বাঁধবেন।
          তার আগে শুধু কাপড় পরে থাকবেন, কিন্তু নিয়ত করবেন না। ⚠️ অনেকে ভুল করে
          বাড়ি, এয়ারপোর্ট বা বিমানে উঠেই নিয়ত করে ফেলেন। এতে সময়ের আগেই ইহরামের
          বিধান শুরু হয়ে যায়, যা অপ্রয়োজনীয় কষ্ট ও বিভ্রান্তি তৈরি করতে পারে। 📌
          মনে রাখুন: 👉 কাপড় পরা অর্থ ইহরাম করা নয় 👉 নিয়ত ও তালবিয়া ছাড়া ইহরাম
          শুরু হয় না 👉 ইহরাম করার জন্য ওজু শর্ত নয়
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
