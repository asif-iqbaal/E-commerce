import React, { useState,useEffect,useRef } from "react";
import Api from '../../api/api'
import Api2 from '../../api/api2.json'
import shopImage from './shopImage.jpg'
import Card from "../card/card";
import {useNavigate} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Auth from "../appwrite/authentication";
import Loading from "../Loading/Loading";


function Home(){

    const [shoping,setShoping] = useState([]);
    const [shop,setShop] =useState([]);
    const [isLoading,setIsLoading] =useState(true);
    //const shoping = Api();
    const navigate = useNavigate();
    //console.log(shoping);
    useEffect(()=>{
    const accountDetails = async()=>{
      try {
        const acc = await Auth.getAccount();
        console.log("account details",acc);
      } catch (error) {
        console.log("account error",error);
      }
    }
    accountDetails();
    },[])
 
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

  useEffect(() =>{
  if(data && Api2){
    setShoping(data);
    setShop(Api2)
    setIsLoading(false);
  }
} 
,[data]);

  const handleCardClick = (item) => {
    navigate(`/card/${item.title}`,{state:{...item}} );
  };
  
    return(
    <>
 
    {isLoading ? (
      <div>
        <Loading />
      </div>
    ):(
      <div className="w-screen  flex flex-col bg-gradient-to-b from-white to-gray-100 "  >
      <div
     
      className="
      bg-[url('https://png.pngtree.com/background/20211216/original/pngtree-shopping-in-the-morning-picture-image_1522971.jpg')]
      bg-cover bg-center 
      flex justify-center items-center h-[90vh] " data-aos="zoom-out-down" 
         >
          <div className="w-1/3 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/steam-64.png" alt="image"
            className="rounded-full" />
            <p className="pt-3">We give you that what you need</p>
          </div>
              <p className="w-2/3 h-1/2 flex flex-col justify-center items-center font-serif text-4xl text-slate-800">
             <p className="text-orange-500 text-6xl"> Shopping With You</p> Joy
            In Smart Way Choose your best <br/>
              Care your Best 
              </p>
              <button className="bg-purple-600 text-white p-4 rounded-full m-2">Learn more</button>
          </div>
          <div className="w-2/3 h-full flex m-4  ">
              {/* <img src="https://png.pngtree.com/background/20211216/original/pngtree-shopping-in-the-morning-picture-image_1522971.jpg" alt="image" className="h-full w-full rounded-full "/> */}
          </div>
          
      </div>
      {/*                                     cards Data                                 */}
      <div className="flex flex-wrap w-screen gap-1 justify-center items-center  overflow-hidden px-40
      ">
          {shoping && shoping.length > 0 && shoping.map((item,index)=>(
         <button className="shadow-lg shadow-gray-400 m-4 " data-aos-once="false"  data-aos="fade-up"data-aos-duration="600"  key={index} onClick={() => handleCardClick(item)}>
           <Card 
           key={index}
          Image={item.image}
          Name={item.title}
          Description={item.description}
          price={item.price}/>
         </button>

      ))}
  <div className="w-screen h-auto m-2  text-center flex justify-center items-center rounded-full" data-aos="slide-up"
  style={style}
  >
    <h2 className="text-5xl font-mono font-bold text-gray-800">Our Special Product</h2>
  </div>

        {shop && shop.length > 0 && shop.map((item,index)=>(
         <button className="shadow-lg shadow-gray-400  m-2 "data-aos-once="false"  data-aos="fade-up"data-aos-duration="1000"  key={index} onClick={() => handleCardClick(item)}>
           <Card 
           key={index}
          Image={item.image}
          Name={item.title}
          Description={item.description}
          price={item.price}/>
         </button>

      ))}
      </div>
  </div>

    )}
   
    </>
    );
}
export default Home;