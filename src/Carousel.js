import React, { Component } from "react"
import schema from "./images/schema.png"
import schema1 from "./images/schema.1.png"
import schema2 from "./images/schema.2.png"

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      imagearray: [
        <img
          className="carouselImages"
          style={{ borderStyle: "solid", borderColor: "red" }}
          src={schema}
        />,
        <img
          className="carouselImages"
          style={{ borderStyle: "solid", borderColor: "blue" }}
          src={schema1}
        />,
        <img
          className="carouselImages"
          style={{ borderStyle: "solid", borderColor: "green" }}
          src={schema2}
        />
      ],
      firstPic: "",
      secondPic: "",
      thirdPic: ""
    }
  }


  render() {
    return (
      <div style={{}}>
        <div className="movingDiv">{this.state.imagearray}</div>
      </div>
    )
  }
}
export default Carousel
