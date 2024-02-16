import { createContext, useState } from "react"

import img10 from "../assets/img/item-10.jpg";
import img11 from "../assets/img/item-11.jpg";
import img12 from "../assets/img/item-12.jpg";
import img13 from "../assets/img/item-13.jpg";
import img14 from "../assets/img/item-03.jpg";
import img15 from "../assets/img/item-04.jpg";






export const MyContext = createContext()


export const MyProvider = ({ children }) => {
    const [Mydrises, setMyDrises] = useState([
        {
          id: 1,
          title: "Boxy T-Shirt with Roll Sleeve Detail",
          images: img10,
          price: "$20.00",
          category: 'old',
          
        },
    
        {
          id: 2,
          title: "Boxy1 T-Shirt with Roll Sleeve Detail",
          images: img11,
          price: "$20.00",
          category: 'old',
          
        },
    
        {
          id: 3,
          title: "Boxy3 T-Shirt with Roll Sleeve Detail",
          images: img12,
          price: "$30.00",
          category: 'old',
          
        },
    
        {
          id: 4,
          title: "Boxy4 T-Shirt with Roll Sleeve Detail",
          images: img13,
          price: "$10.00",
          category: 'New',
          
        },
    
        {
          id: 5,
          title: "Boxy5 T-Shirt with Roll Sleeve Detail",
          images: img14,
          price: "$30.00",
          category: 'New',
          
        },
    
        {
          id: 6,
          title: "Boxy6 T-Shirt with Roll Sleeve Detail",
          images: img15,
          price: "$20.00",
          category: 'New',
          
        },
      ]);
    return (
        <>

            <MyContext.Provider value={ [Mydrises, setMyDrises] } >
                {children}
            </MyContext.Provider>

        </>
    )







}