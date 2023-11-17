import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Error 404</h1>
      <h2><Link to={"/"}>На главную</Link></h2>
    </div>
  );
}
