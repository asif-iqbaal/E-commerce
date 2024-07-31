import React,{useState,useEffect} from "react";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";
import Api from '../../api/api'
import Api2 from '../../api/api2.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
import shopImage from './jewelerry.jpg'
import Loading from "../Loading/Loading";
import WaveSvg from "../home/wave";


export default function Jewelery(){
    const [isLoading,SetIsLoading] =useState(true)
    const [shopping,SetShopping] = useState([]);
    const [shop,setShop] =useState([]);
    const data = Api();
    const navigate = useNavigate();

    const handleCardClick = (item) => {
        navigate(`/card/${item.title}`,{state:{...item}} );
      };
      useEffect(()=>{
        AOS.init({
            duration:1200,
            offset:200,
            easing: 'ease-in-out',
            once:true,
        });
        if(data && Api2){
            SetShopping(data);
            setShop(Api2);
            SetIsLoading(false)
        }
      },[data])
    return(
        
        <>
     
        {isLoading ? (
            <div>
                <Loading />
            </div>
        ):(
            <div className="w-full  flex flex-col">
         <div
            className="
      bg-[url('https://m.economictimes.com/thumb/msid-104575525,width-1600,height-900,resizemode-4,imgsize-65448/silver-jewellery-istock.jpg')]
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
                  </p> We provide best product <br />
                  for fashion 
                </p>
                <button className="bg-purple-600 text-white p-4 rounded-full m-2">Learn more</button>
              </div>
             <div className="w-2/4"></div>
            </div>
            <div className="w-[100%] ">
              <WaveSvg />
            </div>
          </div>
        <div className="flex flex-wrap gap-1 justify-center items-center bg-slate-50
        ">
            {shopping && shopping.length > 0 && shopping.map((item,index)=>(
                
           item.category ===  "jewelery" ? (
            <button className="shadow-lg shadow-blue-200 m-1" data-aos="fade-up"data-aos-duration="600"  key={index} onClick={() => handleCardClick(item)}>
             <Card 
             key={index}
            Image={item.image}
            Name={item.title}
            Description={item.description}
            price={item.price}/>
           </button>
           ) : null

        ))}
         {shop && shop.length > 0 && shop.map((item,index)=>(
        item.category === "jewelry" ? (
          <button className="shadow-lg shadow-blue-200 m-1" data-aos="fade-up"data-aos-duration="600"  key={index} onClick={() => handleCardClick(item)}>
           <Card 
           key={index}
          Image={item.image}
          Name={item.title}
          Description={item.description}
          price={item.price}/>
         </button>
         ) : null

      ))}
        </div>
        </div>
        )}
        
        </>
        
    );
}