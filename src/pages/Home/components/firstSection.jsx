import "./firstSection.scss";
import { Carousel, Tabs, Card } from "flowbite-react";
import { useContext } from "react";
import { MyContext } from "../../../utils/ContextProvider";

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

import { useState } from "react";

export const FirstSection = () => {
  const { darkMode } = useContext(MyContext);
  const [Myblog, setMyBlog] = useState([
    {
      title: "Black Friday Guide: Best Sales & Discount Codes",
      images: img20,
      date: "by fashe-theme Admin on Dec 28,2017",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
      price: "$20.00",
    },

    {
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      images: img21,
      date: "by fashe-theme Admin on Dec 28,2017",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
      price: "$20.00",
    },

    {
      title: "New York SS 2018 Street Style: By Annina Mislin",
      images: img22,
      date: "by fashe-theme Admin on Dec 28,2017",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
      price: "$20.00",
    },
  ]);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="h-[50vh] sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <div className="lg:h-[fit-content] h-[90vh] ">
            <div className="relative lg:h-[fit-content] h-[100%] ">
              <img src={img1} alt="..." className="h-[100%] "/>
              <div className="absolute carosel flex flex-col items-center gap-3 text-white dark:text-gray-200">
                <h4 className="font-poppins font-medium text-lg tracking-wide">Women Collection 2024</h4>
                <h1 className="font-playfair font-bold text-6xl">New Arrivals</h1>
                <button className="btn-53 font-poppins">
                  <div className="original">Button</div>
                  <div className="letters">
                    <span>B</span>
                    <span>U</span>
                    <span>T</span>
                    <span>T</span>
                    <span>O</span>
                    <span>N</span>
                  </div>
                </button>
              </div>
            </div>

          </div>

          <div className="lg:h-[fit-content] h-[90vh] ">
            <div className="relative lg:h-[fit-content] h-[100%] ">
              <img src={img2} alt="..." className="h-[100%] "/>
              <div className="absolute carosel flex flex-col items-center gap-3 text-white dark:text-gray-200">
                <h4 className="font-poppins font-medium text-lg tracking-wide">Women Collection 2024</h4>
                <h1 className="font-playfair font-bold text-6xl">New Arrivals</h1>
                <button className="btn-53 font-poppins">
                  <div className="original">Button</div>
                  <div className="letters">
                    <span>B</span>
                    <span>U</span>
                    <span>T</span>
                    <span>T</span>
                    <span>O</span>
                    <span>N</span>
                  </div>
                </button>
              </div>
            </div>

          </div>

          <div className="lg:h-[fit-content] h-[90vh] ">
            <div className="relative lg:h-[fit-content] h-[100%] ">
              <img src={img3} alt="..." className="h-[100%] "/>
              <div className="absolute carosel flex flex-col items-center gap-3 text-white dark:text-gray-200">
                <h4 className="font-poppins font-medium text-lg tracking-wide">Women Collection 2024</h4>
                <h1 className="font-playfair font-bold text-6xl">New Arrivals</h1>
                <button className="btn-53 font-poppins">
                  <div className="original">Button</div>
                  <div className="letters">
                    <span>B</span>
                    <span>U</span>
                    <span>T</span>
                    <span>T</span>
                    <span>O</span>
                    <span>N</span>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </Carousel>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center w-[80%] items-center p-5 gap-2">
          <div className="overflow-hidden relative group cursor-pointer">
            <img
              className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              src={img4}
              height={500}
              width={350}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            <div className="buttons absolute">
              <button className="btn group-hover:bg-red-600 dark:group-hover:bg-red-500">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" className="dark:text-white" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative group cursor-pointer">
            <img
              className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              src={img5}
              height={500}
              width={350}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            <div className="buttons absolute">
              <button className="btn group-hover:bg-red-600 dark:group-hover:bg-red-500">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" className="dark:text-white" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative group cursor-pointer">
            <img
              className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              src={img6}
              height={500}
              width={350}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            <div className="buttons absolute">
              <button className="btn group-hover:bg-red-600 dark:group-hover:bg-red-500">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" className="dark:text-white" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative group cursor-pointer">
            <img
              className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              src={img7}
              height={500}
              width={350}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            <div className="buttons absolute">
              <button className="btn group-hover:bg-red-600 dark:group-hover:bg-red-500">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" className="dark:text-white" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative group cursor-pointer">
            <img
              className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              src={img8}
              height={500}
              width={350}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            <div className="buttons absolute">
              <button className="btn group-hover:bg-red-600 dark:group-hover:bg-red-500">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" className="dark:text-white" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden relative group cursor-pointer">
            <img
              className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
              src={img9}
              height={500}
              width={350}
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            <div className="buttons absolute">
              <button className="btn group-hover:bg-red-600 dark:group-hover:bg-red-500">
                <span />
                <p data-text="TAKE IT" data-title="DRESSES" className="dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Tabs className="border-none">
            <Tabs.Item active title="NEW">
              <div className="flex gap-5 flex-wrap overflow-hidden">
                <div className="group relative cursor-pointer">
                  <img 
                    src={img10} 
                    width={350} 
                    alt="Product 1" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Boxy T-Shirt with Roll Sleeve</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$20.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img11} 
                    width={350} 
                    alt="Product 2" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Classic Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$25.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img12} 
                    width={350} 
                    alt="Product 3" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Vintage Inspired Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$30.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img13} 
                    width={350} 
                    alt="Product 4" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Summer Collection Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$35.00</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="OLD">
              <div className="flex gap-5 flex-wrap overflow-hidden">
                <div className="group relative cursor-pointer">
                  <img 
                    src={img14} 
                    width={350} 
                    alt="Product 5" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Vintage Blouse</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$22.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img15} 
                    width={350} 
                    alt="Product 6" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Classic Shirt</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$18.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img16} 
                    width={350} 
                    alt="Product 7" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Summer Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$28.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img17} 
                    width={350} 
                    alt="Product 8" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Elegant Evening Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$40.00</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>

      <div className="py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-center font-playfair text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Featured Products
        </h2>
        <div className="container mx-auto px-4">
          <Tabs className="border-none">
            <Tabs.Item active title="NEW">
              <div className="flex gap-5 flex-wrap overflow-hidden">
                <div className="group relative cursor-pointer">
                  <img 
                    src={img10} 
                    width={350} 
                    alt="Product 1" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Boxy T-Shirt with Roll Sleeve</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$20.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img11} 
                    width={350} 
                    alt="Product 2" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Classic Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$25.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img12} 
                    width={350} 
                    alt="Product 3" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Vintage Inspired Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$30.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img13} 
                    width={350} 
                    alt="Product 4" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Summer Collection Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$35.00</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>

            <Tabs.Item title="OLD">
              <div className="flex gap-5 flex-wrap overflow-hidden">
                <div className="group relative cursor-pointer">
                  <img 
                    src={img14} 
                    width={350} 
                    alt="Product 5" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Vintage Blouse</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$22.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img15} 
                    width={350} 
                    alt="Product 6" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Classic Shirt</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$18.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img16} 
                    width={350} 
                    alt="Product 7" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Summer Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$28.00</p>
                  </div>
                </div>
                <div className="group relative cursor-pointer">
                  <img 
                    src={img17} 
                    width={350} 
                    alt="Product 8" 
                    className="transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="p-4 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="product-title text-xl mb-2 font-poppins">Elegant Evening Dress</h3>
                    <p className="price-text text-lg text-gray-700 dark:text-gray-300 font-poppins">$40.00</p>
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>

      <div className="bg-gray-100 p-10 dark:bg-gray-800">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-4xl font-bold text-gray-900 dark:text-white">Our Collection</h2>
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-400 mt-2">Discover our latest styles</p>
        </div>
        <div className="flex justify-center  gap-3 items-center">
          <div className="relative overflow-hidden">
            <div className="hover:scale-110 transition">
              <img src={img18} width={600} alt="" />
            </div>

            <div className="textt absolute text-white dark:text-gray-200 flex justify-center items-center">
              <h3 className="font-bold text-3xl">The Beauty</h3>
              <h1 className="font-bold text-6xl">LOOKBOOK</h1>
              <p className="tex-2xl">VIEW COLLECTION</p>
            </div>
          </div>
          <div className="">
            <div className=" bg-white dark:bg-gray-700 xl:w-[100%] xl:h-[75%] w-[90vw]  xl:mb-0 mb-8 p-7 flex flex-col justify-center items-center">
              <div className=" w-[55%] h-[60%] mb-2 hover:scale-105 transition">
                <img src={img19} width={600} alt="" className="" />
              </div>
              <h1 className="text-2xl dark:text-white">Boxy2 T-Shirt with Roll Sleeve</h1>
              <p className="text-xl font-extralight dark:text-gray-200">$20.00</p>
              <div className="boxs flex flex-row gap-4 mt-4">
                <div className="bg-white dark:bg-gray-600 border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                  <p className="text-lg font-serif dark:text-white">112</p>
                  <p className="font-thin dark:text-gray-200">days</p>
                </div>
                <div className="bg-white dark:bg-gray-600 border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                  <p className="text-lg font-serif dark:text-white">10</p>
                  <p className="font-thin dark:text-gray-200">Hrs</p>
                </div>
                <div className="bg-white dark:bg-gray-600 border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                  <p className="text-lg font-serif dark:text-white">55</p>
                  <p className="font-thin dark:text-gray-200">mins</p>
                </div>
                <div className="bg-white dark:bg-gray-600 border w-[15vw] xl:w-[5vw] xl:h-[4vw] flex flex-col justify-center items-center">
                  <p className="text-lg font-serif dark:text-white">48</p>
                  <p className="font-thin dark:text-gray-200">secs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-5">
        <div>
          <h1 className="font-bold text-4xl text-center dark:text-white">OUR BLOG</h1>
        </div>
        <div className="flex  justify-center items-center ">
          <div className="xl:w-[90%] w-[100%] mt-2 flex flex-wrap h-[50%]  justify-center gap-2 items-center p-8">
            {Myblog.map((element, index) => (
              <Card
                className="max-w-sm hover:scale-105 transition dark:bg-gray-700"
                key={index}
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={element.images}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">
                  {element.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 font-poppins">
                  {element.date}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-300 font-poppins">
                  {element.discription}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="follow xl:h-[50vh] p-5 xl:block flex flex-col justify-evenly">
        <p className="text-4xl font-bold text-center pt-4 dark:text-white">
          @ FIND US ON INSTAGRAM !
        </p>

        <div className="all_last flex xl:flex-row flex-col justify-evenly items-center xl:h-[100%] xl:gap-0 gap-16">
          <div className="first xl:w-[20%] ">
            <p className="text-2xl font-thin text-center dark:text-white">
              Free Delivery WorldWide
            </p>
            <p className="text-md font-thin text-center dark:text-gray-200">
              Mirum est notare quam littera gothica
            </p>
          </div>

          <div className="second xl:w-[20%] ">
            <p className="text-2xl font-thin text-center dark:text-white">30 Days Return</p>
            <p className="text-md font-thin text-center dark:text-gray-200">
              Simply return it within 30 days for an exchange.
            </p>
          </div>

          <div className="third xl:w-[20%]">
            <p className="text-2xl font-thin text-center dark:text-white">Store Opening</p>
            <p className="text-md font-thin text-center dark:text-gray-200">
              Shop open from Monday to Sunday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
