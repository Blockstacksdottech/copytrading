import { Fragment, useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <footer className="footer-section footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <p>
                Copyright &copy; {year} <a>CopyTrading</a>. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="float-right">
                Designed & Developed by{" "}
                <a href="#">Blockstacks Technologies Ltd</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
