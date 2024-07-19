import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          offset: 200,
          easing: 'ease-in-out',
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
      

    return (
        <div className='flex flex-col w-screen h-auto font-serif bg-slate-50 overflow-x-hidden'>
            <div className='flex flex-col w-full max-h-full'>
                <div className='m-3 p-7 ml-8 '><p className='text-3xl font-bold'>ShopUI</p></div>
                <div className=' mx-36 '><p data-aos="fade-up"  className='text-lg '>Welcome to ShopUI, your ultimate destination for a seamless and delightful shopping experience. At ShopUI, we pride ourselves on offering a diverse range of high-quality products tailored to meet the unique needs and preferences of our valued customers. Whether you're looking for the latest fashion trends for men and women, elegant and timeless jewelry pieces, or cutting-edge electronics, our extensive catalog has something for everyone. Our mission is to provide you with a convenient and enjoyable shopping experience from the comfort of your home. We meticulously curate our product selection to ensure that you receive the best in style, functionality, and value. With a user-friendly interface, secure payment options, and exceptional customer service, ShopUI is dedicated to making your shopping journey smooth and satisfying. Explore our collections today and discover why ShopUI is your go-to destination for all your shopping needs. Thank you for choosing ShopUI, where quality meets convenience!</p></div>
            </div>
            <div className='flex flex-col'>
                <div className='text-center'><p data-aos="fade-down"  className='m-28 text-5xl font-extrabold'>Products Available</p></div>
            </div>
            <div className='flex  items-center justify-center'>
                <div data-aos="slide-right" className='m-4 p-4 w-1/3 h-16  bg-slate-800 rounded-md flex justify-center items-center hover:shadow-lg shadow-gray-800'><p className='text-lg font-semibold text-white'>Men  Garments</p></div>
                <div data-aos="slide-left" className='m-4 p-4 w-1/3 h-16  bg-slate-800 rounded-md flex justify-center items-center hover:shadow-lg shadow-gray-800'><p className='text-lg font-semibold text-white'>Woomen Garments</p></div>
            </div>
            <div className='flex  items-center justify-center'>
                <div data-aos="slide-right"  className='m-4 p-4 w-1/3 h-16  bg-slate-800 rounded-md flex justify-center items-center hover:shadow-lg shadow-gray-800'><p className='text-lg font-semibold text-white'>Jewellery</p></div>
                <div data-aos="slide-left"  className='m-4 p-4 w-1/3 h-16  bg-slate-800 rounded-md flex justify-center items-center hover:shadow-lg shadow-gray-800'><p className='text-lg font-semibold text-white'>Electronics</p></div>
            </div>
        </div>
    );
}