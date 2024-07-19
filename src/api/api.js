import React from "react";
import { useState,useEffect } from "react";

export default function shop(){
    const [data,setData] = useState(null)
    useEffect(() => {
  //      async function getData() {
//           const url = 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/amz/v2/amazon-deal-filter?domainCode=com';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '08195cb4aamshb1d3d8eb191fbe0p10c4c8jsnd98a3549c8ab',
// 		'x-rapidapi-host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch("https://fakestoreapi.com/products");
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
 //       }
 //       getData();

      async function getData(){
        await fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((res)=>setData(res))
      }
      getData();
      }, []);

    console.log(data);
    return data;
}