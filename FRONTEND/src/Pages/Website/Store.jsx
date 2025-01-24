import Container from "../../Components/Container";
import Sidebar from "../../Components/WebSite/Sidebar";
import { CgMenuGridO } from "react-icons/cg";
import { FiAlignJustify } from "react-icons/fi";
import ProductBox from "../../Components/WebSite/ProductBox";
export default function Store() {
  const productList = [
    {
      image: "./images/New Apple Mac Mini.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "4",
      hot: true,
    },
    {
      image: "./images/design-hero_2x.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "3",
      hot: false,
    },
    {
      image: "./images/Apple Macbook Air.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "3.5",
      hot: true,
    },
    {
      image: "./images/airpods-max-hero-select-202011_FMT_WHH.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "2",
      hot: false,
    },
    {
      image: "./images/Apple Macbook Air.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "4",
      hot: true,
    },
    {
      image:
        "./images/52a2df80-98ec-4e1b-9cfc-71a68d7575b3_1.4fbf81e4bfa56bc8feffa82b5b15ca83.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "3",
      hot: false,
    },
    {
      image: "./images/MQHX2.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "3.5",
      hot: true,
    },
    {
      image: "./images/Apple Watch 21-1.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "2",
      hot: false,
    },
  ];
  return (
    <div className="w-full text-center flex flex-col">
      <div className="p-2 bg-gray-200 order-2 md:order-1">
        <h1>Store</h1>
      </div>
      <Container className="flex py-8 order-1 md:order-2">
        <div className="grid md:grid-cols-7 md:space-x-8 w-full">
          <div className="hidden md:block col-span-2">
            <Sidebar />
          </div>
          <div className="md:col-span-5">
            <section className="bg-[#2E90E5] h-[450px] md:h-[350px]">
              <Container className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="text-white flex flex-col items-center justify-center  px-4">
                  <div className="flex flex-col items-start gap-6">
                    <h1 className="text-4xl">iPhone 6 Plus</h1>
                    <p>
                      Performance and design. Taken
                      <br /> right to the edge.
                    </p>
                    <button className="underline uppercase font-semibold">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                  <img
                    className="absolute bottom-0 h-full lg:h-full"
                    src="images/2_corousel.png"
                    alt=""
                  />
                </div>
              </Container>
            </section>
            <div className="p-3 rounded bg-gray-200 my-4">
              <div className="flex justify-between">
                <div className="flex justify-between text-sm md:font-normal gap-2 md:gap-4">
                  <span>13 Items</span>
                  <span>Sort By</span>
                  <select name="" className="rounded" id="">
                    <option value="">Phone</option>
                  </select>
                  <span>Show</span>
                  <select name="" className="rounded" id="">
                    <option value="">23</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3">
                  <CgMenuGridO />
                  <FiAlignJustify />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
              {productList.map((elem, index) => {
                return (
                  <ProductBox
                    key={index}
                    image={elem.image}
                    title={elem.title}
                    price={elem.price}
                    discount={elem.discount}
                    rating={elem.rating}
                    hot={elem.hot}
                  />
                );
              })}
            </div>

            <nav
              aria-label="Page navigation example"
              className="hidden md:flex md:justify-center"
            >
              <ul className="flex items-center -space-x-px h-10 text-base">
                {[...Array(5)].map((_, i) => {
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-center px-4 h-10 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {i + 1}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex justify-between md:hidden">
              {/* Previous Button */}
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >
                Previous
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
