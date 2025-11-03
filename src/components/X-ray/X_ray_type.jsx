import { div } from 'framer-motion/client';
import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function X_ray_type() {
  return (
    <div>
        <div className="">
            <div className="x-ray-types-section">
                <div className="x-ray-types-right">
                    {[
                    { title: "Chest", icon: "images/Chest.png" },
                    { title: "Spine", icon: "images/Spine2.png" },
                    { title: "Skull", icon: "images/Skull.png" },
                    { title: "Limb", icon: "images/Limb.png" },
                    { title: "Dental", icon: "images/Dental.png" },
                    ].map((item, index) => (
                    <div className="pct-card" key={item.title || index}>
                    <div className="ct-card">
                        <img src={item.icon} alt={item.title} />
                    </div>
                      <p>{item.title}</p>
                    </div>
                    ))}
                </div>
                <div className="x-ray-types-left">
                    <h2>
                    Types of X-Rays We Offer
                    </h2>

                    <p>
                    Experience the difference of advanced X-ray imaging. Our facility features state-of-the-art digital X-ray systems that deliver crystal-clear images with minimal radiation exposure. This technology enables our radiologists to identify even subtle findings with exceptional precision. Whether you need a standard X-ray or a specialized diagnostic study, our modern equipment and expert team provide fast, accurate results you can rely on.
                    </p>

                    <button className="ct-btn">
                    Book Now <span><BsArrowUpRightCircleFill size={30}  /></span>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default X_ray_type