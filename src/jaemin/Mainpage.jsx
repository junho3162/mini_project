import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import './Mainpage.css'; // CSS 파일 임포트

function Main() {
    const [menuVisible, setMenuVisible] = useState(false); // 메뉴바 표시 여부
    const [writingVisible, setWritingVisible] = useState(false); // 글쓰기 창 표시 여부
    const [recordVisible, setRecordVisible] = useState(false); // 기록창 표시 여부
    const [selectedImage, setSelectedImage] = useState(null); // 업로드된 이미지 저장
    const [isInputVisible, setIsInputVisible] = useState(false); // 텍스트 입력창 표시 여부
    const [text, setText] = useState(''); // 입력 텍스트 상태
    const [weatherIndex, setWeatherIndex] = useState(0); // 현재 선택된 날씨 인덱스
    const weatherImages = ['해.png', '비.png', '눈.png', '바람.png']; // 날씨 이미지 배열
    const [activeBackground, setActiveBackground] = useState('mint1'); // 현재 배경 탭
    const [records, setRecords] = useState([null, null, null, null, null, null]); // 보관된 기록들
    const [currentEditIndex, setCurrentEditIndex] = useState(null); // 수정 중인 기록 인덱스
    const [searchText, setSearchText] = useState(''); // 검색어 상태
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false); // 검색창 표시 여부
    const navigate = useNavigate(); // 추가

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // 메뉴바 보이기/숨기기 토글
  };

  const showWriting = () => {
    setWritingVisible(true); // 글쓰기 창 열기
  };

  const hideWriting = () => {
    setWritingVisible(false); // 글쓰기 창 닫기
  };

  const toggleRecord = () => {
  setRecordVisible(!recordVisible); // 기록창 토글
};

const handleImageUpload = (event) => {
  const file = event.target.files[0]; // 파일 선택
  if (file) {
    setSelectedImage(URL.createObjectURL(file)); // 미리보기 용도
  }
};

const handleRecordClick = () => {
  setIsInputVisible(true); // 입력창 보이기
};

const handleInputChange = (e) => {
  setText(e.target.value); // 텍스트 상태 업데이트
};

const handleWeatherClick = () => {
  setWeatherIndex((prevIndex) => (prevIndex + 1) % weatherImages.length); // 날씨 인덱스 순환 변경
};
const handleSaveRecord = () => {
  const newRecord = {
    weatherIndex,
    text,
    image: selectedImage,
  };

  const updatedRecords = [...records];

  if (currentEditIndex !== null) {
    // 기존 기록 수정
    updatedRecords[currentEditIndex] = newRecord;
  } else {
    // 새 기록 추가
    const firstEmptyIndex = records.findIndex(record => record === null);
    if (firstEmptyIndex === -1) {
      alert('모든 보관칸이 가득 찼습니다!');
      return;
    }
    updatedRecords[firstEmptyIndex] = newRecord;
  }

  setRecords(updatedRecords); // 기록 업데이트

  // 입력값 초기화
  setText('');
  setSelectedImage(null);
  setWeatherIndex(0);
  setIsInputVisible(false);
  setWritingVisible(false);
  setCurrentEditIndex(null); // 수정 상태 초기화
};

  const handleRecordBoxClick = (index) => {
  const record = records[index];
  if (record) {
    setWeatherIndex(record.weatherIndex); // 날씨 설정
    setText(record.text); // 텍스트 설정
    setSelectedImage(record.image); // 이미지 설정
    setIsInputVisible(true); // 텍스트창 열기
    setWritingVisible(true); // 글쓰기창 열기
    setCurrentEditIndex(index); // 수정할 인덱스 저장
  }
};

const handleDeleteRecord = () => {
  const targetIndex = records.findIndex(
    (record) =>
      record &&
      record.text === text &&
      record.image === selectedImage &&
      record.weatherIndex === weatherIndex
  );

  if (targetIndex !== -1) {
    const updatedRecords = [...records];
    updatedRecords[targetIndex] = null;
    setRecords(updatedRecords); // 해당 기록 삭제
  }

  // 글쓰기 상태 초기화
  setText('');
  setSelectedImage(null);
  setWeatherIndex(0);
  setIsInputVisible(false);
  setWritingVisible(false);
  setCurrentEditIndex(null);
};

const handleSearch = () => {
  const keyword = searchText.trim().toLowerCase();

  if (!keyword) return;

  // 검색어 포함된 첫 번째 기록 찾기
  const foundIndex = records.findIndex(
    (record) => record && record.text.toLowerCase().includes(keyword)
  );

  if (foundIndex !== -1) {
    const background = foundIndex < 2 ? 'mint1' : foundIndex < 4 ? 'mint2' : 'mint3';
    setActiveBackground(background);
  } else {
    alert('검색 결과가 없습니다.');
  }

  setSearchText('');
  setIsSearchInputVisible(false);
};

  return (
    <div className="달력"> {/* 전체 앱 컨테이너 */}
      <div className="box">
      {writingVisible && ( // 글쓰기 창 표시 조건
       <div className='글쓰기'>
        <div className='바탕' onClick={hideWriting}></div> {/* 바탕 클릭 시 닫기 */}
        <img src="오리.png" className="오리2" alt="오리3" />
        <div className='일기상자'>
        <div className='동그라미2'>
          <p>이번여행 즐거우셨나요?</p>
        </div>
        <div className='일기상자2'>
          <img src="삭제.png" className="삭제" alt="삭제"style={{ cursor: 'pointer' }} onClick={handleDeleteRecord}/> {/* 삭제 버튼 */}
          <img src={weatherImages[weatherIndex]} className="해2" alt="날씨" onClick={handleWeatherClick}/> {/* 날씨 아이콘 */}
          <img src="체크.png" className="체크" alt="저장" onClick={handleSaveRecord} style={{cursor: 'pointer'}}/> {/* 저장 버튼 */}
          <div className='기록가능'onClick={handleRecordClick}> {/* 텍스트 입력 영역 */}
           <div className='선5'></div>
           <div className='선6'></div>
           <div className='선7'></div>
           <div className='선8'></div>
           {isInputVisible && (
           <textarea
            className="기록입력"
            value={text}
            onChange={handleInputChange}/>
           )}
          </div>
          <div className='카메라칸2' onClick={() => document.getElementById('imageUpload').click()}>
          {selectedImage ? (
           <img src={selectedImage} alt="미리보기" className="미리보기이미지" />
           ) : (
           <img src="카메라.png" className="카메라2" alt="카메라 아이콘" />
          )}
          </div>
          <input
          id="imageUpload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}/>
        </div>
        </div>
       </div>
        )}
      {recordVisible && ( // 기록 보기 창
       <div className='기록'>
        <div className='바탕2'>
          <div className='검색창'>
           {isSearchInputVisible ? (
           <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="검색입력" placeholder="검색어 입력"/>
           ) : null}
           <img src="검색.png" className="검색" alt="검색" onClick={() => {if (!isSearchInputVisible) { setIsSearchInputVisible(true); // 입력창 보이게
           } else {
           handleSearch(); // 검색 수행
           }
          }}
          style={{ cursor: 'pointer' }}/>
         </div>
          {/* 각 배경에 따라 보관칸 다르게 표시 */}
          {activeBackground === 'mint1' && (
          <div className='민트배경'>
            {[0, 1].map(i => (
                    <div key={i} className={`보관칸${i + 1}`} onClick={() => handleRecordBoxClick(i)}>
                      {records[i] ? (
                        <>
                          <img src={weatherImages[records[i].weatherIndex]} alt="날씨" style={{width:'30px'}}/>
                          <p>{records[i].text}</p>
                          {records[i].image && (
                            <img src={records[i].image} alt="저장된 사진" className="보관칸이미지"/>
                          )}
                        </>
                      ) : (
                        <p>비어있음</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
          {activeBackground === 'mint2' && (
          <div className='민트배경2'>
            {[2, 3].map(i => (
                    <div key={i} className={`보관칸${i + 1}`} onClick={() => handleRecordBoxClick(i)}>
                      {records[i] ? (
                        <>
                          <img src={weatherImages[records[i].weatherIndex]} alt="날씨" style={{width:'30px'}}/>
                          <p>{records[i].text}</p>
                          {records[i].image && (
                            <img src={records[i].image} alt="저장된 사진" className="보관칸이미지"/>
                          )}
                        </>
                      ) : (
                        <p>비어있음</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
          {activeBackground === 'mint3' && (
          <div className='민트배경3'>
            {[4, 5].map(i => (
                    <div key={i} className={`보관칸${i + 1}`} onClick={() => handleRecordBoxClick(i)}>
                      {records[i] ? (
                        <>
                          <img src={weatherImages[records[i].weatherIndex]} alt="날씨" style={{width:'30px'}}/>
                          <p>{records[i].text}</p>
                          {records[i].image && (
                            <img src={records[i].image} alt="저장된 사진" className="보관칸이미지"/>
                          )}
                        </>
                      ) : (
                        <p>비어있음</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* 배경 전환 버튼 */}
          <img src="뒤.png" className="뒤" alt="4" />
          <div className='칸1'onClick={() => setActiveBackground('mint1')}>
            <p>1</p>
          </div>
          <div className='칸2'onClick={() => setActiveBackground('mint2')}>
            <p>2</p>
          </div>
          <div className='칸3'onClick={() => setActiveBackground('mint3')}>
            <p>3</p>
          </div>
          <img src="앞.png" className="앞" alt="4" />
        </div>
       </div>
      )}
      {/* 기본 화면 구성 */}
       <div className="오리박스">
        <div className="오리컨테이너">
         <img src="오리2.png" className="오리이미지" alt="오리1" />
         <img src="나무.png" className="나무이미지" alt="오리2" />
        </div>
       <div className="민트박스">
        <div className='달력내용'>
         <div className='연도'>
           <p>2025</p>
         </div>
         <div className='월'>
           <p>5</p>
         </div>
         <div className='요일'>
          <div className='월화수'>
            <p>Su   Mo   Tu   We   Th   Tr   Sa</p>
          </div>
           <div className='일1'>
            <p>      27    28    29   30    1     2     3      </p>
           </div> 
           <div className='일2'>
            <p>   4    5     6    7     8    9    10  </p>
           </div>
           <div className='일3'>
            <p>  11   12   13    14    15   16   17 </p>
           </div>
           <div className='일4'>
            <p>  18   19   20    21    22   23   24 </p>
           </div>
           <div className='일5'>
            <p>  25   26   27    28    29   30   31 </p>
           </div>
         </div>
       </div>
      </div>
      {/* 글쓰기 열기 버튼 */}
       <div className="왼쪽파란박스" onClick={showWriting}>
        <div className='일기칸'>
          <img src="별.png" className="별" alt="4" />
          <img src="손.png" className="손" alt="4" />
          <img src="해.png" className="해" alt="4" />
          <div className='선1'></div>
          <div className='선2'></div>
          <div className='선3'></div>
          <div className='선4'></div>
          <div className='사진칸'>
            <img src="카메라.png" className="카메라" alt="4" />
          </div>
        </div>
        <div className='동그라미'>
          <p>이번여행 즐거우셨나요?</p>
        </div>
       </div>
       <div className="오른쪽파란박스" onClick={() => navigate('/TodaysFortune')}>
        <p>오늘의 운세 보러가기</p>
       </div>
       {/* 메뉴 버튼 */}
       <div className="메뉴1" onClick={toggleMenu}></div>
       <div className="메뉴2" onClick={toggleMenu}></div>
       <div className="메뉴3" onClick={toggleMenu}></div>
       <img src="오리.png" className="오리" alt="오리3" />
     {/* 메뉴바 */}
     {menuVisible && (
       <div className={`메뉴바 ${menuVisible ? 'show' : 'hide'}`}>
        <img src="꽃2.png" className="꽃2" alt="오리3"
          onClick={() => window.location.href = "/Mappage"} // ← 원하는 경로로 이동
        />
        <img src="꽃3.png" className="꽃3" alt="오리3" onClick={toggleRecord} />
       </div>
     )}
      </div>
     </div>
    </div>
  );
}

export default Main;