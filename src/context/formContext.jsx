import { createContext , useState } from "react"
import React from "react";
import { Link, NavLink, useNavigate, Route } from 'react-router-dom';
import { authContext } from "./authContext";
import axios from "axios";
import { useContext } from "react";

export const formContext = React.createContext();

export function FormProvider({children}) {
    const [formData, setFormData] = useState({ nom : "", email : "", adresse: "", commentaire :""});
    const [formDataCopy, setFormDataCopy] = useState({nom : "", email : "", adresse: "", commentaire :""});
    const [submitted, setSubmitted] = useState(false);
    const { cart, removeFromCart } = useContext(authContext);

    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      setFormDataCopy({...formData, [name]: value});
    }

    const postDataToFirebase = async (cart, formData) => {
      try {
          const res = await 
          axios.post(`${import.meta.env.VITE_API}commandes.json`, {cart, formData});
          console.log(res.data);
      } catch (err) {
          console.error(err);
      }
  }

    function handleSubmit(event) {
      event.preventDefault();
      // Save formData to context
      if (cart.length > 0 && formData.nom && formData.adresse && formData.email) {
        setSubmitted(true);
        postDataToFirebase(cart, formData);
      } else {
        if(formData.nom && formData.adresse && formData.email)
        {
          alert("Le panier est vide, ajoutez des articles avant de soumettre le formulaire")
        } else{
        alert("Veuillez remplir entièrement le formulaire de contact");
        }
      }
      //add formData to server or store in a database
      setFormData({ nom : '', email: '', address: '', comments: '' });
      
      
    }
  
    return (
      <formContext.Provider value={{ formData, formDataCopy, handleChange, handleSubmit, submitted }}>
        {children}
      </formContext.Provider>
    );
  }
  export default FormProvider ; 