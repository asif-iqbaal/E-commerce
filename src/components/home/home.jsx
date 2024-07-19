import React, { useState,useEffect } from "react";
import Api from '../../api/api'
import shopImage from './shopImage.jpg'
import Card from "../card/card";
import {useNavigate} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Auth from "../appwrite/authentication";
import Loading from "../Loading/Loading";


function Home(){

    const [shoping,setShoping] = useState([]);
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
  if(data){
    setShoping(data);
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
      <div className="w-screen  flex flex-col ">
      <div className="flex h-1/3  bg-slate-100">
          <div className="w-1/2 h-96 flex justify-center items-center">
              <p className="w-2/3 h-full flex justify-center items-center font-serif text-4xl text-slate-800 stroke-gray-300">Shopping With You Joy <br/>
              In Smart Way Choose your best <br/>
              Care your Best 
              </p>
          </div>
          <div className="w-1/2 h-full flex  m-2">
              <img src={shopImage} alt="image" className="h-full w-full shadow-lg shadow-blue-200 m-2 "/>
          </div>
      </div>
      {/*                                     cards Data                                 */}
      <div className="flex flex-wrap w-screen gap-1 justify-center items-center bg-slate-50 overflow-hidden
      ">
          {shoping && shoping.length > 0 && shoping.map((item,index)=>(
         <button className="shadow-lg shadow-blue-200 m-2 "  data-aos="fade-up"data-aos-duration="600"  key={index} onClick={() => handleCardClick(item)}>
           <Card 
           key={index}
          Image={item.image}
          Name={item.title}
          Description={item.description}
          price={item.price}/>
         </button>

      ))}</div>
  </div>

    )}
   
    </>
    );
}
export default Home;