import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import ProductBox from "../../Components/WebSite/ProductBox";
import FacilityCard from "../../Components/WebSite/FacilityCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../../Components/WebSite/SliderCard";
export default function Dashboard() {
  const navMenu = [
    {
      menu: "All",
      link: "/Store",
    },
    {
      menu: "Mac",
      link: "/Store",
    },
    {
      menu: "iPod",
      link: "/Store",
    },
    {
      menu: "iPhone",
      link: "/Store",
    },
    {
      menu: "iPad",
      link: "/Store",
    },
    {
      menu: "Accesseries",
      link: "/Store",
    },
  ];
  const facilities = [
    {
      icon: "./images/shipping.svg",
      title: "free Shipping",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    },
    {
      icon: "./images/refund.svg",
      title: "100% refund",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    },
    {
      icon: "./images/support.svg",
      title: "support 24/7",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.",
    },
  ];
  const productList = [
    {
      image: "./images/Apple Macbook Air.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "4",
      hot: true,
    },
    {
      image: "./images/Apple Macbook Air.png",
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
      image: "./images/Apple Macbook Air.png",
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
      image: "./images/Apple Macbook Air.png",
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
      image: "./images/Apple Watch 21-1.png",
      title: "Macbook Pro",
      price: "435",
      discount: "400",
      rating: "2",
      hot: false,
    },
  ];
  const sliderItem=[
    {
    icon:"./images/beats_solo_2.png",
    title:"Beats Solo 2 On Ear Headphones - Black",
    rating:5,
    price:"$677"
  },
  {
    icon:"./images/H-squared.png",
    title:"H-Squared tvTray",
    rating:3,
    price:"$577"
  },
  {
    icon:"./images/Netatmo_rain.png",
    title:"Netatmo Rain Gauge",
    rating:3,
    price:"$357"
  },
];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    centerMode: true, // Enable center mode
  centerPadding: "20px",
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show only one slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="banner-bg h-[350px] md:h-[400px]">
        <Container className="relative h-full">
          <img
            src="images/2_corousel.png"
            className="absolute h-full right-0 bottom-0"
            alt="Mobile Image"
          />
        </Container>
      </div>
      <Container className="text-center py-8">
        <p className="text-2xl uppercase font-semibold">best sellers</p>
        <ul className="hidden md:flex py-2 justify-center items-center gap-4 font-semibold">
          {navMenu.map((m, index) => {
            return (
              <li key={index}>
                <Link
                  to={m.link}
                  className="hover:text-sky-700  cursor-pointer"
                >
                  {m.menu}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto w-[70%] mt-4">
          <select className="bg-gray-100 border-2 rounded w-full p-2 focus:outline-none  md:hidden">
            {navMenu.map((m, index) => (
              <option key={index} value={m.link}>
                {m.menu}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10">
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
        <div className="mt-4">
          <button className="bg-sky-600 text-white rounded-md px-2 py-1">
            Load More
          </button>
        </div>
      </Container>
      <section className="bg-[#2E90E5] h-[550px] md:h-[450px]">
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
              className="absolute bottom-0 h-full lg:h-[106%]"
              src="images/2_corousel.png"
              alt=""
            />
          </div>
        </Container>
      </section>
      <section className="my-13 md:h-[450px]">
        <Container className="flex flex-col md:flex-row h-full justify-center items-center gap-3">
          {facilities.map((elem, index) => {
            return (
              <FacilityCard
                key={index}
                icon={elem.icon}
                title={elem.title}
                content={elem.content}
              />
            );
          })}
        </Container>
      </section>
      <section className="my-13 md:h-[450px] p-8">
        <Container className="flex flex-col h-full justify-center items-center gap-3">
          <h1 className="font-semibold text-xl uppercase">featured products</h1>
          <div className="w-full h-full">
            <Slider {...sliderSettings}>
              {
                sliderItem.map(
                  (item,index)=>{
                 return <div key={index} className="mx-4 h-full flex justify-center items-center bg-white hover:border-2 hover:rounded-sm">
                <SliderCard title={item.title} icon={item.icon} price={item.price} rating={item.rating} />
              </div>
                })
              }
            </Slider>
          </div>
        </Container>
      </section>
    </div>
  );
}
