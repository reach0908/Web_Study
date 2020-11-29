import React from 'react'
import {RenderAfterNavermapsLoaded, NaverMap} from 'react-naver-maps';


function NaverMapAPI2() {
    return (
      <NaverMap
        id="map2" // default: react-naver-map
        style={{
          width: '100%', // 네이버지도 가로 길이
          height: '100vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
      />
    );
  }

function MapCard2() {
    return (
        <RenderAfterNavermapsLoaded
          ncpClientId={'fgocun0nnd'} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI2 />
        </RenderAfterNavermapsLoaded>
      );
}

export default MapCard2
