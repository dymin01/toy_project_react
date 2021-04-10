import React from "react";
import "./Area.css";

class Citis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaId: this.props.area_id,
      // 입력밭은 지역의 초기 좌표 넣어놓고 리턴할때 같이 리턴
      cities: [
        {
          id: 0,
          city: [
            {
              city_id: 0,
              value: "강남구",
              latitude: 37.51719,
              longitude: 127.0473,
            },
            {
              city_id: 1,
              value: "강동구",
              latitude: 37.53012,
              longitude: 127.12387,
            },
            {
              city_id: 2,
              value: "강북구",
              latitude: 37.63967,
              longitude: 127.02555,
            },
            {
              city_id: 3,
              value: "강서구",
              latitude: 37.55094,
              longitude: 126.84952,
            },
            {
              city_id: 4,
              value: "관악구",
              latitude: 37.47809,
              longitude: 126.95151,
            },
            {
              city_id: 5,
              value: "광진구",
              latitude: 37.53854,
              longitude: 127.08224,
            },
            {
              city_id: 6,
              value: "구로구",
              latitude: 37.49541,
              longitude: 126.88755,
            },
            {
              city_id: 7,
              value: "금천구",
              latitude: 37.45677,
              longitude: 126.89539,
            },
            {
              city_id: 8,
              value: "노원구",
              latitude: 37.65408,
              longitude: 127.05634,
            },
            {
              city_id: 9,
              value: "마포구",
              latitude: 37.56616,
              longitude: 126.90164,
            },
          ],
        },
        {
          id: 1,
          city: [
            {
              city_id: 0,
              value: "경기1",
              latitude: 37.27505,
              longitude: 127.00943,
            },
            {
              city_id: 1,
              value: "경기2",
              latitude: 37.27505,
              longitude: 127.00943,
            },
            {
              city_id: 2,
              value: "경기3",
              latitude: 37.27505,
              longitude: 127.00943,
            },
            {
              city_id: 3,
              value: "경기4",
              latitude: 37.27505,
              longitude: 127.00943,
            },
            {
              city_id: 4,
              value: "경기5",
              latitude: 37.27505,
              longitude: 127.00943,
            },
            {
              city_id: 5,
              value: "경기6",
              latitude: 37.27505,
              longitude: 127.00943,
            },
          ],
        },
        {
          id: 2,
          city: [
            {
              city_id: 0,
              value: "인천1",
              latitude: 37.45605,
              longitude: 126.70563,
            },
            {
              city_id: 1,
              value: "인천2",
              latitude: 37.45605,
              longitude: 126.70563,
            },
            {
              city_id: 2,
              value: "인천3",
              latitude: 37.45605,
              longitude: 126.70563,
            },
            {
              city_id: 3,
              value: "인천4",
              latitude: 37.45605,
              longitude: 126.70563,
            },
            {
              city_id: 4,
              value: "인천5",
              latitude: 37.45605,
              longitude: 126.70563,
            },
            {
              city_id: 5,
              value: "인천6",
              latitude: 37.45605,
              longitude: 126.70563,
            },
          ],
        },
        {
          id: 3,
          city: [
            {
              city_id: 0,
              value: "강원1",
              latitude: 37.88539,
              longitude: 127.72977,
            },
            {
              city_id: 1,
              value: "강원2",
              latitude: 37.88539,
              longitude: 127.72977,
            },
            {
              city_id: 2,
              value: "강원3",
              latitude: 37.88539,
              longitude: 127.72977,
            },
            {
              city_id: 3,
              value: "강원4",
              latitude: 37.88539,
              longitude: 127.72977,
            },
            {
              city_id: 4,
              value: "강원5",
              latitude: 37.88539,
              longitude: 127.72977,
            },
            {
              city_id: 5,
              value: "강원6",
              latitude: 37.88539,
              longitude: 127.72977,
            },
          ],
        },
      ],
      activeId: -1,
    };
  }

  handleClick(id) {
    this.setState({ activeId: id });
  }

  componentDidUpdate() {
    if (this.state.areaId !== this.props.area_id) {
      this.setState({ areaId: this.props.area_id });
      if (this.state.activeId !== -1) {
        this.setState({ activeId: -1 });
      }
    }
  }

  render() {
    var id = this.state.areaId;
    return (
      <ul>
        {this.state.cities[id].city.map((list) => (
          <li
            key={list.city_id}
            className={list.city_id === this.state.activeId ? "is-active" : " "}
            onClick={function (id) {
              this.setState({ activeId: id });
              this.props.onSlected(id, list.value, list.latitude, list.longitude);
            }.bind(this, list.city_id)}
          >
            {list.value}
          </li>
        ))}
      </ul>
    );
  }
}

export default Citis;
