import React from "react";

const Input = () => {
  return (
    <div className="fixed w-full h-[20%] bg-transparent bottom-0 px-20 flex justify-center items-center">
      <input
        type="text"
        placeholder="Kirim pertanyaan"
        className="md:w-[66%] py-4 px-4 rounded-lg outline-none border-2 border-gray-100 shadow-top-xl"
      />
    </div>
  );
}

export default Input;
