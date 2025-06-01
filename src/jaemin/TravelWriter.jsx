
//src/components/TravelWriter.jsx
import React, { useState, useRef } from "react";
import axios from "axios";
import './TravelWriter.css'; // CSS 파일 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 훅

const TravelWriter = ({ hideWriting }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(); // 추가
  const [weatherIndex, setWeatherIndex] = useState(0); // 현재 선택된 날씨 인덱스
  const weatherImages = ['해.png', '비.png', '눈.png', '바람.png']; // 날씨 이미지 배열

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("location", location);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("http://localhost:8080/api/travel-records", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("기록이 저장되었습니다!");
      setTitle("");
      setContent("");
      setLocation("");
      setImage(null);
      setPreviewUrl(null);
      navigate('/Mainpage/bloglist'); // 글쓰기 완료 후 블로그 목록으로 이동

    } catch (error) {
      console.error("저장 실패:", error);
    }
  };

  const handleWeatherClick = () => {
  setWeatherIndex((prevIndex) => (prevIndex + 1) % weatherImages.length); // 날씨 인덱스 순환 변경
};

const handleDeleteRecord = () => {
  setTitle("");
  setContent("");
  setLocation("");
  setImage(null);
  setPreviewUrl(null);
  setWeatherIndex(0);
  hideWriting(); // 글쓰기 창 닫기
};

  return (
    <div className="글쓰기">
      <div className="바탕" onClick={hideWriting}></div>
      <div className="일기상자">
        <div className='동그라미2'>
          <p>이번여행 즐거우셨나요?</p>
        </div>
        <div className="일기상자2">
        <img src={weatherImages[weatherIndex]} className="해2" alt="날씨" onClick={handleWeatherClick}/> {/* 날씨 아이콘 */}
        <img src="삭제.png" className="삭제" alt="삭제"style={{ cursor: 'pointer' }} onClick={handleDeleteRecord}/> {/* 삭제 버튼 */}


      <div className="사진" onClick={() => fileInputRef.current.click()}>
        {previewUrl ? (
          <img src={previewUrl} alt="미리보기" style={{ maxWidth: "100%" }} />
        ) : (
          <img src="카메라.png" className="카메라2" alt="카메라 아이콘" />
        )}
      </div>
      <div className='선5'></div>
      <div className='선6'></div>
      <div className='선7'></div>
      <div className='선8'></div>
      <div className="글">
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <input className="제목"
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea className="내용"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input className="장소"
          type="text"
          placeholder="여행 장소"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />


        <input className="이미지"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }} // input 숨김
        />
         <img
         src="체크.png"
         className="체크"
         alt="저장"
         onClick={(e) => handleSubmit(e)} // 기존 handleSaveRecord → handleSubmit
         style={{ cursor: 'pointer' }}/>
      </form>
      </div>
      </div>
     </div>
    </div>
  );
};

export default TravelWriter;
