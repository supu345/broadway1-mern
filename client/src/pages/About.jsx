import React from "react";
import Muhmud1 from "../assets/mahmud1.jpg";
import Blogs from "../components/Blogs";
const About = () => {
  return (
    <div>
      <div
        className="relative bg-fixed h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/arabic-ornamental-background-paper-style_23-2148877288.jpg?t=st=1745168552~exp=1745172152~hmac=a2490664eb98b77e20e97abb56ab1ae50b0f8192e49d8775eacf372e74f6ad88&w=1380')",
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative flex flex-col items-center">
          <p className="text-center text-black text-7xl font-bold">About</p>
        </div>

        {/* <p className="absolute bottom-4 left-4 text-white text-2xl bg-black/80 px-4 py-2 rounded">
          Home / HajjPackages
        </p> */}
      </div>
      <div className="flex flex-row gap-6 mt-[100px] px-4 py-9">
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/19495538/pexels-photo-19495538/free-photo-of-minarets-of-nabawi-mosque-in-medina-saudi-arabia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "
            alt="image"
            className="h-[600px] w-[600px] rounded-xl"
          />
        </div>
        <div className="w-1/2 pl-6 ">
          <button className="border px-4 py-1 rounded-full uppercase font-small">
            Our peace vision
          </button>
          <p className="text-5xl font-bold mt-6">
            Hajj & Umrah Experiences: Tailored To Travel Solutions.
          </p>
          <div className="flex flex-row gap-2 mt-[50px] ">
            <div className="w-1/2">
              <img
                src={Muhmud1}
                alt="photo1"
                className="h-[350px] w-[250px] object-cover rounded-2xl"
              />
            </div>
            <div className="w-1/2">
              <div>
                <p className="text-3xl font-bold">Our Vision</p>

                <p>
                  We understand the significance of hajj and umrah in the lives
                  of muslims worldwide.{" "}
                </p>
              </div>

              <div className="mt-7">
                <p className="text-3xl font-bold">Our Mission</p>

                <p>
                  We understand the significance of hajj and umrah in the lives
                  of muslims worldwide.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Book Your Hajj Packages Today */}
      <div className="relative bg-[url('https://img.freepik.com/free-vector/mandala-illustration_53876-75290.jpg?t=st=1745220109~exp=1745223709~hmac=45b9c755e010d42cdc57305aa0a52c8225b67b4f331128d5b020fab680fd137f&w=1380')] bg-cover bg-center bg-no-repeat text-black">
        {/* Black Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}

        {/* Content */}
        <div className="relative  flex flex-col py-9">
          {/* Logo and About Section */}
          <div className="text-center ">
            <div className="flex flex-col gap-3  ">
              <p className="text-5xl font-bold ">
                Book Your <span className="text-amber-600">Hajj Packages </span>{" "}
                Today
              </p>
              <p>
                Embark on a spiritual journey with our tailored Hajj packages,
                offering exceptional
                <br />
                services for a seamless pilgrimage experience.
              </p>
            </div>
            <div className="flex flex-row gap-6 px-[450px]">
              <div className="py-6">
                <button className="bg-amber-200 px-5 py-2 rounded-full font-semibold hover:bg-amber-400">
                  Contact Now
                </button>
              </div>
              <div className="py-6">
                <button className="border border-amber-950 px-5 py-2 rounded-full font-semibold hover:text-amber-700">
                  +01799-224466
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Your Hajj Packages Today */}

      <div className="px-9 py-9">
        <div className="py-6 text-center">
          <button className="uppercase border border-amber-950 px-5 py-2 rounded-full font-semibold hover:text-amber-700">
            OUR TEAM MEMBER
          </button>

          <p className="text-5xl font-bold mt-7 ">
            Meet the experts behind <br />
            <span className="text-amber-600">our success. </span>
          </p>
          <p className="mt-7 ">
            Dedicated and skilled team member with expertise in collaboration,
            problem-solving, <br />
            and delivering high-quality results in dynamic environments
          </p>
        </div>
      </div>

      {/* portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-3">
        <div className="text-center">
          <img
            src="https://images.pexels.com/photos/9218726/pexels-photo-9218726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">Emily Carter</p>
            <p>Operations Manager</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src="https://images.pexels.com/photos/7129607/pexels-photo-7129607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">Emily Carter</p>
            <p>Operations Manager</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src="https://images.pexels.com/photos/3890524/pexels-photo-3890524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">Ethan Collins</p>
            <p>Quality Control Supervisor</p>
          </div>
        </div>
        <div className="text-center">
          <img
            src="https://images.pexels.com/photos/16145658/pexels-photo-16145658/free-photo-of-portrait-of-an-old-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="rounded-xl h-[350px] w-full object-cover"
          />
          <div className="border border-gray-200 mt-4 py-5 rounded-xl">
            <p className="text-2xl font-medium ">Michael Bennet</p>
            <p>Team Leader</p>
          </div>
        </div>
      </div>
      {/* Blogs */}
      <Blogs />
    </div>
  );
};

export default About;
