import React, { Component } from "react";
import ReactDom from "react-dom";
import responsiveImage from 'responsive-loader!!./webpack.jpg?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048';

class ReactApp extends Component {
  render() {
    return (
      <picture>
        <source srcSet={responsiveImage.srcSet} type="image/webp" />
        <img
          src={responsiveImage.src}
          srcSet={responsiveImage.srcSet}
          width={responsiveImage.width}
          height={responsiveImage.height}
          sizes="(min-width: 1024px) 1024px, 100vw"
          loading="lazy"
        />
      </picture>
    );
  }
}

ReactDom.render(<ReactApp />, document.getElementById("responsiveRoot"));
