import React, { useState } from "react";
import "./shopsection.scss";
import { Label, Select } from "flowbite-react";
import img1 from "../../../assets/img/master-slide-02.jpg";
import img2 from "../../../assets/img/master-slide-01.jpg";
import img3 from "../../../assets/img/master-slide-04.jpg";
import img4 from "../../../assets/img/banner-02.jpg";
import img5 from "../../../assets/img/banner-03.jpg";
import img6 from "../../../assets/img/banner-04.jpg";
import img7 from "../../../assets/img/banner-05.jpg";
import img8 from "../../../assets/img/banner-07.jpg";
import img9 from "../../../assets/img/banner-09.jpg";
import img10 from "../../../assets/img/item-10.jpg";
import img11 from "../../../assets/img/item-11.jpg";
import img12 from "../../../assets/img/item-12.jpg";
import img13 from "../../../assets/img/item-13.jpg";
import img14 from "../../../assets/img/item-03.jpg";
import img15 from "../../../assets/img/item-04.jpg";
import img16 from "../../../assets/img/item-15.jpg";
import img17 from "../../../assets/img/item-07.jpg";
import img18 from "../../../assets/img/banner-08.jpg";
import img19 from "../../../assets/img/shop-item-09.jpg";
import img20 from "../../../assets/img/blog-01.jpg";
import img21 from "../../../assets/img/blog-02.jpg";
import img22 from "../../../assets/img/blog-03.jpg";
import { useNavigate } from "react-router-dom";

export const Shopsection = () => {
  const [Mydrises, setMyDrises] = useState([
    {
      id: 1,
      title: "Boxy T-Shirt with Roll Sleeve Detail",
      images: img10,
      price: "$20.00",
      category: "old",
    },

    {
      id: 2,
      title: "Boxy1 T-Shirt with Roll Sleeve Detail",
      images: img11,
      price: "$20.00",
      category: "old",
    },

    {
      id: 3,
      title: "Boxy3 T-Shirt with Roll Sleeve Detail",
      images: img12,
      price: "$30.00",
      category: "old",
    },

    {
      id: 4,
      title: "Boxy4 T-Shirt with Roll Sleeve Detail",
      images: img13,
      price: "$10.00",
      category: "New",
    },

    {
      id: 5,
      title: "Boxy5 T-Shirt with Roll Sleeve Detail",
      images: img14,
      price: "$30.00",
      category: "New",
    },

    {
      id: 6,
      title: "Boxy6 T-Shirt with Roll Sleeve Detail",
      images: img15,
      price: "$20.00",
      category: "New",
    },
  ]);

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [Myinput, setMyinput] = useState(Mydrises);

  const filterItems = (category) => {
    if (category === "all") {
      return Mydrises;
    } else {
      return Mydrises.filter((item) => item.category === category);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterElement = (event) => {
    let newTab = Myinput.filter((element) =>
      element.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setMyDrises(newTab);
  };

  return (
    <>
      <div>
        <div className="bannerr h-[35%]">
          <p className="text-white text-6xl w-full h-[100%] flex justify-center items-center">
            PRODUCT
          </p>
        </div>
      </div>

      <div
        className="flex flex-row   
       p-5"
      >
        <div className="side w-[20%]   ">
          <div className="p-5 flex flex-col justify-evenly h-[20%] ">
            <h1 className="font-bold text-2xl">Categories</h1>
            <h3
              onClick={() => handleCategoryChange("All")}
              className="text-gray-400"
            >
              All
            </h3>
            <h3
              onClick={() => handleCategoryChange("Old")}
              className="text-gray-400"
            >
              OLD
            </h3>
            <h3
              onClick={() => handleCategoryChange("New")}
              className="text-gray-400"
            >
              New
            </h3>
          </div>

          <div className="p-5">
            <h1 className="font-bold text-2xl">Price</h1>
            <div className="flex flex-col justify-evenly h-[10%]">
              <div className="flex items-center gap-2">
                <div>
                  <input type="checkbox" id="cbx" style={{ display: "none" }} />
                  <label htmlFor="cbx" className="check">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                      <polyline points="1 9 7 14 15 4" />
                    </svg>
                  </label>
                </div>

                <div className="flex ">
                  <h3>0-20</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <input type="checkbox" id="cbx" style={{ display: "none" }} />
                  <label htmlFor="cbx" className="check">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                      <polyline points="1 9 7 14 15 4" />
                    </svg>
                  </label>
                </div>

                <div className="flex ">
                  <h3>0-40</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div>
                  <div className="inputt-container ">
                    <input
                      onChange={(e) => filterElement(e)}
                      type="text"
                      name="text"
                      className="input"
                      placeholder="search..."
                    />
                    <span className="icon">
                      <svg
                        width="19px"
                        height="19px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            opacity={1}
                            d="M14 5H20"
                            stroke="#000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            opacity={1}
                            d="M14 8H17"
                            stroke="#000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                            stroke="#000"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            opacity={1}
                            d="M22 22L20 20"
                            stroke="#000"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-3 ">
          <div className=" flex p-3 gap-4">
            <div className="max-w-md w-[20%]">
              <div className="mb-2 block"></div>
              <Select id="Filtre" required>
                <option>All</option>
                <option>OLD</option>
                <option>New</option>
              </Select>
            </div>

            <div className="max-w-md w-[20%]">
              <div className="mb-2 block"></div>
              <Select id="Price" required>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>ALL</option>
              </Select>
            </div>
            <div className="flex items-center">
              <p className="text-black float-end opacity-30">
                Showing 1 to 6 of 8 items
              </p>
            </div>
          </div>
          <div></div>

          <div className="flex flex-wrap gap-8  p-3 ">
            {Mydrises.map((element, index) => (
              <div className="flex flex-col gap-2 w-[30%] " key={index}>
                <div className="overflow-hidden">
                  <img
                    src={element.images}
                    alt=""
                    className="hover:scale-110 transition"
                  />
                </div>

                <p
                  onClick={() => navigate(`/product/${element.title}`)}
                  className=" w-[70%] cursor-pointer hover:text-red-500  "
                >
                  {element.title}{" "}
                </p>
                <p className="w-[60%] ">{element.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
