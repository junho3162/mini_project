// src/pages/BlogList.jsx

import searchIcon from '../Images/search-icon.png'; // src 기준 경로

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogList.css'; // 스타일 시트 import
import { useNavigate } from 'react-router-dom'; // 글 수정 이동

function BlogList() {
  const [travelRecords, setTravelRecords] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const recordsPerPage = 5; // 한 페이지에 표시할 기록 수
  const navigate = useNavigate();

  useEffect(() => {
    fetchTravelRecords();
  }, []);

  const fetchTravelRecords = () => {
    axios.get('http://localhost:8080/api/travel-records')
      .then(response => setTravelRecords(response.data))
      .catch(error => console.error("여행 기록 불러오기 실패:", error));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/travel-records/${id}`);
      alert("기록이 삭제되었습니다.");
      fetchTravelRecords(); // 목록 갱신
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  // 검색된 기록 필터링
  const filteredRecords = travelRecords.filter(record =>
    record.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    record.content.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // 현재 페이지에 해당하는 기록 계산
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);

  // 총 페이지 수 계산
  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / recordsPerPage));

  return (
    <div className="container">
        <div className="blog-list-wrapper">
        <h2>📚 여행 기록 모음</h2>
            <div className='blog-list-search'> {/* 검색창 */}
                <img
                    src={searchIcon} // 이미지 경로
                    alt="검색"
                    className="search-icon"
                />
                <input
                    type="text"
                    placeholder="제목 또는 내용 검색..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="search-input"
                />
            </div>
    <div className="blog-list-conainer">
        <div className="record-list">
            {filteredRecords.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
            ) : (
            filteredRecords.map(record => (
                <div
                key={record.id}
                className="record-card"
                onClick={() => navigate(`/edit/${record.id}`)} // 클릭 시 수정 페이지로 이동
                style={{ cursor: 'pointer' }}
                >
                <h3>{record.title}</h3>
                <p>{record.content?.substring(0, 100) + '...'}</p>
                <p className="date">작성일: {formatDate(record.createdAt)}</p>
                {/* 삭제만 별도 버튼 */}
                <button
                    onClick={(e) => {
                    e.stopPropagation(); // 카드 클릭 방지
                    handleDelete(record.id);
                    }}
                    className="delete-btn"
                >
                    삭제
                </button>
                </div>
            ))
            )}
        </div>
        </div>
        </div>
        <div className="page-navigation">
            {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
    </div>
  );
}

export default BlogList;
