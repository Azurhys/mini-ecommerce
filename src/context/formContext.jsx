import { createContext , useState } from "react"
import React from "react";
import { Link, NavLink, useNavigate, Route } from 'react-router-dom';


export const formContext = React.createContext();

export function FormProvider({children}) {
    const [formData, setFormData] = useState({ nom : "", email : "", adresse: "", commentaire :""});
    const [formDataCopy, setFormDataCopy] = useState({nom : "", email : "", adresse: "", commentaire :""});
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      setFormDataCopy({...formData, [name]: value});
    }


    function handleSubmit(event) {
      event.preventDefault();
      // Save formData to context
      setSubmitted(true);
      //add formData to server or store in a database
      setFormData({ name: '', email: '', address: '', comments: '' });
    }
  
    return (
      <formContext.Provider value={{ formData, formDataCopy, handleChange, handleSubmit, submitted }}>
        {children}
      </formContext.Provider>
    );
  }
  export default FormProvider ; 