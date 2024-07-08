import React, { Component } from "react";

export default class Headtag extends Component {
  render() {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          rel="stylesheet"
          href="../frontend/plugins/bootstrap/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="../frontend/plugins/themify-icons/themify-icons.css"
        />
        <link rel="stylesheet" href="../frontend/plugins/slick/slick.css" />
        <link rel="stylesheet" href="../frontend/plugins/Venobox/venobox.css" />
        <link rel="stylesheet" href="../frontend/plugins/aos/aos.css" />
        <link href="../frontend/css/style.css" rel="stylesheet" />
      </>
    );
  }
}
