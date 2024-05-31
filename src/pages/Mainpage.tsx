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
          className={`mx-10   ${selectedImage === "profe" ? "border-2 border-gray-500 mx-10" : ""}`}
          onClick={() => handleImageClick("profe")}
        >
          <img src={profe} alt="professional" />
          <b>상급자</b>
        </button>

        <button
          className={`mx-10  ${selectedImage === "girlf" ? "border-2 border-gray-500" : ""}`}
          onClick={() => handleImageClick("girlf")}
        >
          <img src={girlf} alt="girlfriend" />
          <b>애인</b>
        </button>
        <button
          className={`mx-10 ${selectedImage === "family" ? "border-2 border-gray-500" : ""}`}
          onClick={() => handleImageClick("family")}
        >
          <img src={family} alt="family" />
          <b>가족</b>
        </button>
        <button
          className={`mx-10   ${selectedImage === "freind" ? "border-2 border-gray-500" : ""}`}
          onClick={() => handleImageClick("freind")}
        >
          <img src={friend} alt="friend" style={{ border: "none" }} />
          <b>친구</b>
        </button>
      </div>
      <div>
        <button
          className="my-20 bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
          onClick={handleSelectClick}
        >
          선택하기
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
