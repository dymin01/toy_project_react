import React from "react";
import "./Area.css";

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [
        { id: 0, area: "서울" },
        { id: 1, area: "경기" },
        { id: 2, area: "인천" },
        { id: 3, area: "강원" },
      ],
      activeId: 0,
    };
  }

  handleClick(id) {
    this.setState({ activeId: id });
    //this.props.onSlected(id);
  }

  render() {
    return (
      <ul className="area-list">
        {this.state.areas.map((list) => (
          <li
            key={list.id}
            className={list.id === this.state.activeId ? "is-active" : " "}
            onClick={function (id) {
              this.handleClick(id);
              this.props.onSlected(id, list.area);
            }.bind(this, list.id)}
          >
            {list.area}
          </li>
        ))}
      </ul>
    );
  }
}

export default Area;
