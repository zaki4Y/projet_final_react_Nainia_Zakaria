import "./firstSection.scss";
import { Carousel } from "flowbite-react";
import { Tabs } from "flowbite-react";
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

import { Card } from "flowbite-react";

import { useEffect, useState } from "react";

export const FirstSection = () => {
  const [Myblog, setMyBlog] = useState([
    {
      title: "Black Friday Guide: Best Sales & Discount Codes",
      images: img20,
      date: "by fashe-theme Admin on Dec 28,2017",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
    },

    {
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      images: img21,
      date: "by fashe-theme Admin on Dec 28,2017",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
    },

    {
      title: "New York SS 2018 Street Style: By Annina Mislin",
      images: img22,
      date: "by fashe-theme Admin on Dec 28,2017",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
    },
  ]);

  return (
    <>
      <div className="h-56  sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <div>
            <img src={img1} alt="..." />
            <div>
              <h4>Women Collection 2018</h4>
              <h1>New Arrivals</h1>
            </div>
          </div>

          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
        </Carousel>
      </div>

      <div className="flex justify-center  items-center">
        <div className="flex flex-wrap justify-center w-[80%]  items-center p-5 gap-2">
          <div className="overflow-hidden relative">
            <img
              className="hover:scale-110 transition"
              src={img4}
              height={500}
              width={350}
              alt=""
            />
            <div className="buttons absolute ">
              <button className="btn">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <img
              className="hover:scale-110 transition"
              src={img5}
              height={500}
              width={350}
              alt=""
            />
            <div className="buttons absolute ">
              <button className="btn">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <img
              className="hover:scale-110 transition"
              src={img6}
              height={500}
              width={350}
              alt=""
            />
            <div className="buttons absolute ">
              <button className="btn">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <img
              className="hover:scale-110 transition"
              src={img7}
              height={500}
              width={350}
              alt=""
            />
            <div className="buttons absolute ">
              <button className="btn">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <img
              className="hover:scale-110 transition"
              src={img8}
              height={500}
              width={350}
              alt=""
            />
            <div className="buttons absolute ">
              <button className="btn">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative">
            <img
              className="hover:scale-110 transition"
              src={img9}
              height={500}
              width={350}
              alt=""
            />
            <div className="buttons absolute ">
              <button className="btn">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="text-4xl font-bold text-center pt-4">
            FEATURED PRODUCTS
          </p>
        </div>

        <div className="flex justify-around items-center gap-5 p-5">
          <div className="flex flex-wrap justify-center   gap-2  w-[100%]  ">
            <Tabs aria-label="Pills" style="pills">
              <Tabs.Item active className="text-center" title="NEW">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex gap-5 flex-wrap  overflow-hidden">
                    <div>
                      <img src={img10} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                    <div>
                      <img src={img11} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                    <div>
                      <img src={img12} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                    <div>
                      <img src={img13} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                  </div>
                </p>
              </Tabs.Item>

              <Tabs.Item active className="text-center" title="OLD">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex gap-5 flex-wrap  overflow-hidden">
                    <div>
                      <img src={img14} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                    <div>
                      <img src={img15} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                    <div>
                      <img src={img16} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                    <div>
                      <img src={img17} width={350} alt="" />
                      <div className="p-3">
                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                        <h3>$20.00</h3>
                      </div>
                    </div>
                  </div>
                </p>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>

        <div className="bg-gray-100 p-10">
          <div className="flex justify-center  gap-3 items-center">
            <div className="relative overflow-hidden">
              <div className="hover:scale-110 transition">
                <img src={img18} width={600} alt="" />
              </div>

              <div className="textt absolute text-white flex justify-center items-center">
                <h3 className="font-bold text-3xl">The Beauty</h3>
                <h1 className="font-bold text-6xl">LOOKBOOK</h1>
                <p className="tex-2xl">VIEW COLLECTION</p>
              </div>
            </div>
            <div className="">
              <div className=" bg-white xl:w-[100%] xl:h-[75%] w-[90vw]  xl:mb-0 mb-8 p-7 flex flex-col justify-center items-center">
                <div className=" w-[55%] h-[60%] mb-2 hover:scale-105 transition">
                  <img src={img19} width={600} alt="" className="" />
                </div>
                <h1 className="text-2xl">Boxy2 T-Shirt with Roll Sleeve</h1>
                <p className="text-xl font-extralight">$20.00</p>
                <div className="boxs flex flex-row gap-4 mt-4">
                  <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                    <p className="text-lg font-serif">112</p>
                    <p className="font-thin">days</p>
                  </div>
                  <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                    <p className="text-lg font-serif">10</p>
                    <p className="font-thin">Hrs</p>
                  </div>
                  <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                    <p className="text-lg font-serif">55</p>
                    <p className="font-thin">mins</p>
                  </div>
                  <div className="bg-white border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                    <p className="text-lg font-serif">48</p>
                    <p className="font-thin">secs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-5">
          <div>
            <h1 className="font-bold text-4xl text-center">OUR BLOG</h1>
          </div>
          <div className="flex  justify-center items-center ">
            <div className="xl:w-[90%] w-[100%] mt-2 flex flex-wrap h-[50%]  justify-center gap-2 items-center p-8">
              {Myblog.map((element, index) => (
                <Card
                  className="max-w-sm hover:scale-105 transition "
                  key={index}
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={element.images}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {element.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {element.date}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {element.discription}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="follow xl:h-[50vh] p-5 xl:block flex flex-col justify-evenly">
          <p className="text-4xl font-bold text-center pt-4">
            @ FIND US ON INSTAGRAM !
          </p>

          <div className="all_last flex xl:flex-row flex-col justify-evenly items-center xl:h-[100%] xl:gap-0 gap-16">
            <div className="first xl:w-[20%] ">
              <p className="text-2xl font-thin text-center">
                Free Delivery WorldWide
              </p>
              <p className="text-md font-thin text-center">
                Mirum est notare quam littera gothica
              </p>
            </div>

            <div className="second xl:w-[20%] ">
              <p className="text-2xl font-thin text-center">30 Days Return</p>
              <p className="text-md font-thin text-center">
                Simply return it within 30 days for an exchange.
              </p>
            </div>

            <div className="third xl:w-[20%]">
              <p className="text-2xl font-thin text-center">Store Opening</p>
              <p className="text-md font-thin text-center">
                Shop open from Monday to Sunday
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
