import React from "react";

const Info = () => {
  return (
    <div className="w-full text-gray-200 bg-pink-400 py-16 justify-center items-center">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <div className="w-full flex flex-col p-4 my-4 font-bold justify-center text-center md:border-r-4 border-gray-300">
          <h1 className="md:text-3xl text-xl font-bold py-2 text-gray-300">
            Leading Hair + Beauty Salon
          </h1>
          <p className="py-2">
            With the latest technologies and services we are able to facilitate
            the most contemporary treatments on the market
          </p>
        </div>
        <div className="w-full flex flex-col p-4 my-4 font-bold justify-center text-center md:border-r-4 border-gray-300">
          <h1 className="md:text-3xl text-xl font-bold py-2 text-gray-300">
            Mobile + Late Appointments
          </h1>
          <p className="py-2">
            We can arrange to come visit you or see you later in the day if you
            are late for an appointment
          </p>
        </div>
        <div className="w-full flex flex-col p-4 my-4 font-bold justify-center text-center md:border-r-4 border-gray-300">
          <h1 className="md:text-3xl text-xl font-bold py-2 text-gray-300">
            Qualified to Serve You
          </h1>
          <p className="py-2">
            Rest assured you are in safe hands - Level 4 Beauty Therapist, Level
            3 Hairdresser + Professional Makeup Artist backed up with a teaching
            qualification
          </p>
        </div>
        <div className="w-full flex flex-col p-4 my-4 font-bold justify-center text-center border-gray-300">
          <h1 className="md:text-3xl text-xl font-bold py-2 text-gray-300">
            Training/Courses
          </h1>
          <p className="py-2">
            We also offer a large variety of courses to suit your needs, from one to
            one to small groups - we cater for all your needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
