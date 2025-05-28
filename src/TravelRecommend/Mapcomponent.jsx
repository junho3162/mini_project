// components/MapComponent.jsx
import React, { useState, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// 위치별 사진과 네이버 블로그 검색 링크 추가
const LOCATIONS = [
  {
    lat: 37.2385, lng: 127.0905, name: "경기도 한국 민속촌",
    img: "https://www.koreanfolk.co.kr/mobile/images/information/guide/guide_02_01.jpg",
    blog: "https://m.blog.naver.com/33hey/223215762343",
    blogTitle: "용인 [한국 민속촌] : 네이버 블로그",
  },
  {
    lat: 38.15, lng: 128.15, name: "강원도 설악산 국립공원",
    img: "https://img.freepik.com/free-photo/seoraksan-national-park-winter-location-gangwon-south-korea_335224-288.jpg", 
    blog: "https://blog.naver.com/gogw1234/223646605164",
    blogTitle: "설악산 국립공원 [강원관광] : 네이버 블로그",
  },
  {
    lat: 36.3392, lng: 127.3968, name: "대구 한밭수목원",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NAEXgDyE3wE5ld48rz_6xdE70h93QYRLbA&s", 
    blog: "https://blog.naver.com/han4869/223063667297",
    blogTitle: "대전 가볼만한 곳 [한밭수목원] : 네이버 블로그",
  },
  {
    lat: 35.1058, lng: 126.8355, name: "광주 송정역 시장",
    img: "https://img0.yna.co.kr/etc/inner/KR/2016/05/15/AKR20160515051900054_01_i_P2.jpg", 
    blog: "https://gridarim.tistory.com/210",
    blogTitle: "가볼만한 전통시장 [송정역시장] : 티스토리",
  },
  {
    lat: 35.1032, lng: 129.0345, name: "부산 해운대",
    img: "https://www.haeundae.go.kr/user_res/images/culture/heaundae_view/View_B_01.jpg",
    blog: "https://blog.naver.com/suk4408/222834984931",
    blogTitle: "가볼만한 곳 [부산해운대] : 네이버 블로그",
  },
  {
    lat: 33.2280, lng: 126.4930, name: "제주 해안 주상 절리대",
    img: "https://i.namu.wiki/i/2eNgPi65tjGMAsySxUQe4asFNiqozPiXCHGhKbQepQGLTCJXXmkOZWjYp7G2CuS6tAwQbiXPg34q-uTnJNiaOg.webp", 
    blog: "https://m.blog.naver.com/hiroaya/222758316002",
    blogTitle: "제주 중문 [주상절리대] : 네이버 블로그",
  },
  {
    lat: 36.7130, lng: 126.5484, name: "서산 해미읍성",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaET6NylpGBhYYWRzE0RTaN_8fQyxVaFLBQ&s",
    blog: "https://blog.naver.com/r00326/223424135917",
    blogTitle: "서산 여행 가볼만한 곳 [해미읍성] : 네이버 블로그",
  },
  {
    lat: 37.8666, lng: 126.7841, name: "경기도 파주 DMZ",
    img: "https://dmz.paju.go.kr:8443/upload//2024/0723/QHOK0B2AONNATU9PCF1BANGRDF.jpg",
    blog: "https://m.blog.naver.com/skylove822/222733014850",
    blogTitle: "파주 DMZ 여행 : 네이버 블로그",
  },
  {
    lat: 35.8680, lng: 128.6085, name: "대구 83타워",
    img: "https://i.namu.wiki/i/49UcXrKGwUhSnPfeZ198KJrW60wSNDqDUk_TtrvIe4mxJkt3ktYJbPZ79xwB8U23ATtuAIKNcFn8WiWcUe1mRQ.webp",
    blog: "https://m.blog.naver.com/misik_kim/222976236110",
    blogTitle: "대구 83타워 : 네이버 블로그",
  },
];

const getRandomLocations = (count) => {
  const shuffled = [...LOCATIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const MapComponent = ({ onLocationClick, onMapClick }) => {
  const [locations] = useState(getRandomLocations(9));
  const [center] = useState({ lat: 35.5, lng: 127.8 });
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleMarkerClick = (loc) => {
    if (onLocationClick) onLocationClick(loc);
    if (mapRef.current) {
      mapRef.current.panTo({ lat: loc.lat-1, lng: loc.lng });
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={center}
      zoom={6.5}
      mapContainerStyle={{ width: "100%", height: "1050px" }}
      onLoad={map => (mapRef.current = map)}
      onClick={onMapClick} // 지도 클릭 이벤트 추가
    >
      {locations.map((loc, index) => (
        <Marker
          key={index}
          position={{ lat: loc.lat, lng: loc.lng }}
          title={loc.name}
          onClick={() => handleMarkerClick(loc)}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
