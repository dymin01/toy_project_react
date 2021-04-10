import React from "react";
import "./Map.css";
import { markerdata } from "../kakao/markerData";

/*global kakao */

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            level: 4,
        };
    }

    map;
    // 임시로 마커 추가
    markers = markerdata;

    componentDidMount() {
        var container = document.getElementById("myMap");
        var options = {
            center: new kakao.maps.LatLng(
                this.state.latitude,
                this.state.longitude
            ),
            level: 4,
        };
        this.map = new kakao.maps.Map(container, options);

        this.markers.forEach((el) => {
            var marker = new kakao.maps.Marker({
                //map: this.map,
                position: new kakao.maps.LatLng(el.lat, el.lng),
                title: el.title,
                clickable: true,
            });

            marker.setMap(this.map);

            var iwContent = `<div style="padding:5px;width:100px">${el.title}<br><a href="/${el.title}">이 마커에 등록된 게시글로 이동.(미완성)</a></div>`;
            //var iwPosition = new kakao.maps.LatLng(el.lat, el.lng);
            var iwRemoveable = true;

            var infowindow = new kakao.maps.InfoWindow({
                //position: iwPosition,
                removable: iwRemoveable,
                content: iwContent,
            });

            kakao.maps.event.addListener(
                marker,
                "click",
                this.clickListener(this.map, marker, infowindow)
            );
            kakao.maps.event.addListener(
                this.map,
                "click",
                this.closeMarkerListener(infowindow)
            );
        });
    }

    clickListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
    }

    closeMarkerListener(infowindow) {
        return function () {
            infowindow.close();
        };
    }

    setCenter() {
        var moveLatLon = new kakao.maps.LatLng(
            this.props.latitude,
            this.props.longitude
        );

        this.map.setCenter(moveLatLon);
    }

    componentDidUpdate() {
        this.setCenter();
    }

    render() {
        return (
            <div className="popup_map">
                <div id="myMap"></div>
            </div>
        );
    }
}

export default Map;
