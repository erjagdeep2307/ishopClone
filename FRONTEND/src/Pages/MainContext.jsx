import { createContext,useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
const Context = createContext();
export default function MainContext({children}) {  
   const [category,setCategory] = useState([]);
   const [product,setProduct]=useState([]);
   const BASE_URL = "http://localhost:5000";
   const CATEGORY_URL ="/category"; 
   const PRODUCT_URL ="/product";
   const showToast = (message,flag) => {
        toast(message, { 
            type: flag? "success":"error",
            position: "top-right",
            autoClose: 1000,
        })
   }

   const fetchProduct = (id="")=> {
    axios.get(`${BASE_URL+PRODUCT_URL+"/" + id}`)
    .then((response) => {
        if(response.status===200){
        setProduct(response.data.data);
        }
    })
    .catch((err)=>{
        console.error(err.message);
    })
   }

   const fetchCategory = (id="") => {
        axios.get(`${BASE_URL+CATEGORY_URL+"/" + id}`)
        .then((response) => {
            if(response.status===200){
            setCategory(response.data.data);
            }
        })
        .catch((err)=>{
            console.error(err.message);
        })
   }
    return (
        <Context.Provider value={{ BASE_URL,CATEGORY_URL,showToast,fetchCategory,fetchProduct,product,category}}>
            {children}
            <ToastContainer/>
        </Context.Provider>
  );
}
export { Context };
