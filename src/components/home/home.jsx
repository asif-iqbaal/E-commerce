import React, { useState, useEffect, useRef } from "react";
import Api from '../../api/api'
import Api2 from '../../api/api2.json'
import shopImage from './shopImage.jpg'
import Card from "../card/card";
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Auth from "../appwrite/authentication";
import Loading from "../Loading/Loading";
import WaveSvg from "./wave";


function Home() {

  const [shoping, setShoping] = useState([]);
  const [shop, setShop] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const shoping = Api();
  const navigate = useNavigate();
  //console.log(shoping);
  useEffect(() => {
    const accountDetails = async () => {
      try {
        const acc = await Auth.getAccount();
        console.log("account details", acc);
      } catch (error) {
        console.log("account error", error);
      }
    }
    accountDetails();
  }, [])

  const style = {
    backgroundImage: 'url(https://media.istockphoto.com/id/1257563298/photo/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-text.webp?b=1&s=170667a&w=0&k=20&c=6wi1NI8r8eh0fLP_UjzUVcpmYuwn1mvwgchlyoia92E=)',
    backgroundSize: 'cover',
    height: '50vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  };

  const data = Api();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once - while scrolling down
    });


  }, []);

  useEffect(() => {
    if (data && Api2) {
      setShoping(data);
      setShop(Api2)
      setIsLoading(false);
    }
  }
    , [data]);

  const handleCardClick = (item) => {
    navigate(`/card/${item.title}`, { state: { ...item } });
  };

  return (
    <>

      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="w-screen my-2 flex flex-col bg-white"  >
          <div
            className="
      bg-[url('https://www.hdwallpapers.in/download/gray_eyes_and_blonde_hair_girl_model_with_dark_gray_background_hd_model-2560x1440.jpg')]
      bg-cover bg-center mx-20 rounded-lg
      flex flex-col justify-center items-center  " data-aos="zoom-out-down"
          >
            <div className="flex w-full justify-center items-center h-[80vh]">
              <div className="w-2/4 h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  {/* <img src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/steam-64.png" alt="image"
            className="rounded-full" />
            <p className="pt-3">We give you that what you need</p> */}
                </div>
                <p className="w-2/3 h-1/2 flex flex-col justify-center items-center font-serif text-4xl text-white">
                  <p className="text-white text-5xl font-semibold"> Shopping With You
                  </p> Joy
                  In Smart Way Choose your best <br />
                  Care your Best
                </p>
                <button className="bg-purple-600 text-white p-4 rounded-full m-2">Learn more</button>
              </div>
              <div className="w-2/4 h-full flex m-4 justify-center   items-end flex-col">
                <div className="w-40 h-[70px] bg-white m-2  flex justify-center items-center
              rounded-lg font-sans font-semibold
              " style={{ clipPath: 'polygon(0 10px, 150px 0, 100% 0, 100% 80px, 150px 80%, 0 100%)' }}
                  data-aos="slide-left"><p>Lifestyle</p></div>
                <div className="w-40 h-[70px] bg-white m-2 flex justify-center items-center 
              rounded-lg font-sans font-semibold"
                  style={{ clipPath: 'polygon(0 10px, 150px 0, 100% 0, 100% 80px, 150px 80%, 0 100%)' }}
                  data-aos="slide-left">
                  <p>Lifestyle</p></div>
                <div className="bg-gradient-to-b from-gray-500 to-white
              rounded-lg w-40 h-[150px] bg-white m-2 flex justify-center flex-col
               items-center font-sans font-semibold">
                  <p >Lifestyle</p>
                  <div className="bg-purple-700 m-2 rounded-full p-3  text-white">Read me</div>
                </div>
              </div>
            </div>
            <div className="w-[100%] ">
              <WaveSvg />
            </div>
          </div>
          {/*                                     cards Data                                 */}
          <div className="flex flex-wrap w-screen gap-1 justify-center items-center 
       overflow-hidden 
      ">
            <div className=" w-full h-full flex px-20 bg-white ">
              <div className="w-2/6">
              <img src={"https://w0.peakpx.com/wallpaper/22/957/HD-wallpaper-grey-eyes-girl-model-is-wearing-black-dress-and-lipstick-on-mouth-in-blur-background-girls.jpg"} alt=""
              className="bg-cover "  data-aos="slide-right" data-aos-duration="200" />
              <img src={"https://cdn.anscommerce.com/live/image/catalog/brandstore/philips/popularcategory_la.jpg"} alt="" 
              className="bg-cover  " data-aos="slide-up" data-aos-duration="400" />
              
              </div>
              <div className="w-4/6 h-full">
              <img src={"https://www.cnet.com/a/img/resize/0302d07e10ba8dc211f7b4e25891ad46dda31976/hub/2023/02/05/f52fdc98-dafc-4d05-b20e-8bd936b49a53/oneplus-11-review-cnet-lanxon-promo-8.jpg?auto=webp&fit=crop&height=675&width=1200"}alt=""
              className="bg-cover" data-aos="slide-left"  data-aos-duration="300" />
              </div>
            </div>

            <div className=" h-full  w-full flex flex-wrap justify-center px-40">
              {shoping && shoping.length > 0 && shoping.map((item, index) => {


                return <button className="shadow-lg bg-white m-1 shadow-gray-400  " data-aos-once="true" data-aos="fade-up" data-aos-duration="400" key={index} onClick={() => handleCardClick(item)}>

                  <Card
                    key={index}
                    Image={item.image}
                    Name={item.title}

                  />

                </button>

              })

              }
            </div>


            <div
            className="
      bg-[url('https://images-cdn.ubuy.co.in/63683e67a118666038431922-nike-air-jordan-4-retro-shoes-red.jpg')]
      bg-cover bg-center mx-20 rounded-lg w-1/2
      flex flex-col justify-center items-center  " data-aos="zoom-out-down " data-aos-duration="500" 
          >
            <div className="flex w-full justify-center items-center h-[80vh]">
              <div className="w-2/4 h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  {/* <img src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/steam-64.png" alt="image"
            className="rounded-full" />
            <p className="pt-3">We give you that what you need</p> */}
                </div>
                <p className=" w-full h-1/2  origin-bottom -rotate-12 flex flex-col justify-center items-center font-serif text-6xl text-white">
                  <p className="font-bold">NIke shoes</p>
                </p>
                
              </div>
              
            </div>
           
          </div>

            {shop && shop.length > 0 && shop.map((item, index) => (
              <button className="shadow-lg bg-white shadow-gray-400  m-2 " data-aos-once="false" data-aos="fade-up" data-aos-duration="1000" key={index} onClick={() => handleCardClick(item)}>
                <Card
                  key={index}
                  Image={item.image}
                  Name={item.title}
                  Description={item.description}
                  price={item.price} />
              </button>

            ))}
          </div>
        </div>

      )}

    </>
  );
}
export default Home;