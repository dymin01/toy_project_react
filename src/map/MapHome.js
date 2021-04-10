import React from "react";
import Areas from "../Area_city/Area";
import Cities from "../Area_city/Citis";
import Map from "./Map";

class MapHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_area_id: 0,
      selected_area: "서울",
      selected_city_id: 0,
      selected_city: "서울1",
      active_city: false,
      //초기 좌표 입력받기
      latitude: 33.450701,
      longitude: 126.570667,
    };
  }

  render() {
    return (
      <div>
        <div className="select__area">
          <Areas
            onSlected={function (id, area) {
              console.log({ id });
              this.setState({
                selected_area_id: Number(id),
                selected_area: area,
                active_city: false,
              });
            }.bind(this)}
          ></Areas>
          <Cities
            area_id={this.state.selected_area_id}
            onSlected={function (id, city, latitude, longitude) {
              this.setState({
                selected_city_id: Number(id),
                selected_city: city,
                active_city: true,
                latitude: latitude,
                longitude: longitude,
              });
            }.bind(this)}
          ></Cities>
          <span>{this.state.selected_area}</span>
          <span>
            {this.state.active_city === true &&
              " / " + this.state.selected_city}
          </span>
          <Map
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          ></Map>
        </div>
      </div>
    );
  }
}

export default MapHome;
