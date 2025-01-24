import Container from "../Container";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="my-13 md:h-[450px] p-8 border-t-2">
        <Container className="flex flex-col h-full justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-start gap-4 p-5">
              <img src="./images/ishop.svg" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 p-5">
              <h1 className="font-semibold text-xl">Follow Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the.
              </p>
              <div className="flex gap-4">
                <FaFacebookF color="#385C8E" />
                <FaTwitter color="#03A9F4" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 p-5">
              <h1 className="font-semibold text-xl">Contact Us</h1>
              <p>
                iShop: address @building 124 Call us now: 0123-456-789 Email:
                support@whatever.com
              </p>
            </div>
          </div>
         
          <div className="w-full grid grid-cols-2 justify-around md:grid-cols-6">
            <div className="flex flex-col items-start p-5">
              <h1 className="font-semibold text-xl">Information</h1>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Policies</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-5">
              <h1 className="font-semibold text-xl">Services</h1>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Policies</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-5">
              <h1 className="font-semibold text-xl">Extra</h1>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Policies</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-5">
              <h1 className="font-semibold text-xl">My Account</h1>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Policies</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-5">
              <h1 className="font-semibold text-xl">Usefull Links</h1>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Policies</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
            <div className="flex flex-col items-start p-5">
              <h1 className="font-semibold text-xl">Our Offers</h1>
              <ul>
                <li>About Us</li>
                <li>Information</li>
                <li>Policies</li>
                <li>Term & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="flex w-full p-5 justify-start md:justify-end gap-3">
              <img src="./images/Western_union.svg" alt="" />
              <img src="./images/master_card.svg" alt="" />
              <img src="./images/Paypal.svg" alt="" />
              <img src="./images/visa.svg" alt="" />
          </div>
        </Container>
      </footer>
    </>
  );
}
