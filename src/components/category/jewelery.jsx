import React,{useState,useEffect} from "react";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";
import Api from '../../api/api'
import AOS from 'aos';
import 'aos/dist/aos.css';
import shopImage from './jewelerry.jpg'
import Loading from "../Loading/Loading";


export default function Jewelery(){
    const [isLoading,SetIsLoading] =useState(true)
    const [shopping,SetShopping] = useState([]);
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
        if(data){
            SetShopping(data);
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
        <div className="flex h-1/3  bg-slate-100">
          <div className="w-1/2 h-96 flex justify-center items-center">
              <p className="w-2/3 h-full flex justify-center items-center font-serif text-4xl text-slate-800 stroke-gray-300">
              Add a touch of sparkle to your look with our exquisite jewelry.
              </p>
          </div>
          <div className="w-1/2 h-full flex  m-2">
              <img src={shopImage} alt="image" className="h-full w-full shadow-lg shadow-blue-200 m-2 "/>
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
        </div>
        </div>
        )}
        
        </>
        
    );
}