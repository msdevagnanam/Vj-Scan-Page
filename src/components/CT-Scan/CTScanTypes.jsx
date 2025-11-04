import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function CTScanTypes() {
  const scanTypes = [
    { title: "Brain", icon: "/images/Brain.png" },
    { title: "Cardiology", icon: "/images/Cardio.png" },
    { title: "Newborn Screening", icon: "/images/Newbornchild.png" },
    { title: "Newborn Screening 2", icon: "/images/NewbornScreen.png" },
  ];

  return (
    <div className="ct-types-section">
      <div className="ct-types-left">
        <h2>
          What types of CT scans do <br /> you offer?
        </h2>

        <p>
          Experience the difference of advanced imaging technology. Our facility
          is equipped with state-of-the-art CT scanners that produce ultra-clear,
          fast, and low-radiation images. This allows our radiologists to detect
          even the smallest details with exceptional accuracy. Whether you
          require a routine scan or a complex diagnostic study, our cutting-edge
          systems and expert team ensure results you can trust.
        </p>

        <button className="ct-btn">
          Book Now <span><BsArrowUpRightCircleFill size={30} /></span>
        </button>
      </div>
      <div className="ct-types-right">
        {scanTypes.map((item, index) => (
          <div className="pct-card" key={index}>
            <div className="ct-card">
              <img src={item.icon} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CTScanTypes;

