import { Fragment, useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">
          Designed & Developed by Blockstacks Technologies Ltd
        </div>
        <strong>
          Copyright &copy; 2024 <a>CopyTrading</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
    </>
  );
}
