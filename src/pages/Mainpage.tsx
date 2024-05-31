import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import family from "../assets/family.svg";
import friend from "../assets/freind.svg";
import girlf from "../assets/girlf.svg";
import profe from "../assets/profe.svg";

const Mainpage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (imageName) => {
    // 이미지 버튼을 클릭하여 선택한 이미지를 상태로 저장
    setSelectedImage(imageName);
  };

  const handleSelectClick = () => {
    // "선택하기" 버튼을 클릭하여 해당 이미지에 대한 페이지로 이동
    if (selectedImage) {
      navigate(`/${selectedImage}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="m-20">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button
          className={`mx-10 shadow-2xl  ${selectedImage === "profe" ? "border-4 border-blue-500" : ""}`}
          onClick={() => handleImageClick("profe")}
        >
          <img src={profe} alt="professional" />
        </button>
        <button
          className={`mx-10 shadow-2xl  ${selectedImage === "girlf" ? "border-4 border-blue-500" : ""}`}
          onClick={() => handleImageClick("girlf")}
        >
          <img src={girlf} alt="girlfriend" />
        </button>
        <button
          className={`mx-10 shadow-2xl ${selectedImage === "family" ? "border-4 border-blue-500" : ""}`}
          onClick={() => handleImageClick("family")}
        >
          <img src={family} alt="family" />
        </button>
        <button
          className={`mx-10 shadow-2xl  ${selectedImage === "freind" ? "border-4 border-blue-500" : ""}`}
          onClick={() => handleImageClick("freind")}
        >
          <img src={friend} alt="friend" />
        </button>
      </div>
      <div>
        <button
          className="my-20 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSelectClick}
        >
          선택하기
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
