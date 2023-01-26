import { useArticle } from "../../hook/useArticle";
import { Link } from "react-router-dom"
import { Spacer } from "react-spacer";
import { useContext } from "react";
import { authContext } from "../../context/authContext";
import { formContext } from "../../context/formContext";

const Home = () => {
    //const [articles, setArticles] =useState([{},{},{}])
    // requête ajax => demande à un serveur => retourner [{},{},{}]
    // API === serveur qui livre des données 
    // appeler via ajax => Firebase (filiale de Google)
    // connecter à une boite mail gmail 
    // firebase.google.com 
    // {"titre" : "article 1" , "contenu" : "lorem ipsum" , "commentaires" : []}
    // {"titre" : "article 2" , "contenu" : "lorem ipsum" }
    // {"titre" : "article 1" , "contenu" : "lorem ipsum" , "prix" : "25", "img" : "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"}
    // https://fir-h3-1265e-default-rtdb.europe-west1.firebasedatabase.app/articles.json NoSQL 
    // {"titre" : "article 1" , "contenu" : "lorem ipsum" , "prix" : "25", "img" : "" }
    // SELECT * FROM articles => SQL 
    // requete ajax pour remplir le tableau vide 
    // effectuer une requête AJAX uniquement lors du chargement du composant
    // https://images.unsplash.com/photo-1662221222462-5ba29f257d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80
    const [articles] = useArticle()
    const { cart, addToCart } = useContext(authContext);
    // const {commande , setCommande} = useContext(dataContext)
    const {submitted, setSubmitted} = useContext(formContext);

    return ( <div className="row">
        <h1>Découvrez nos articles !</h1>
        {articles.map(article => {
            return <article className="col-4 mb-4"  key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <img src={article.img} alt="" className="img-fluid txt-center" />
                    <div className="card-body">
                        {article.contenu }
                    </div>
                <footer className="card-footer d-flex justify-content-between" >
                        <button className="btn border-primary text-primary m-1 " onClick={() => addToCart(article)}>
                            Ajouter au panier
                        </button>
                       
                        <p className="m-1 fw-bold fs-4">
                            { new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}
                        </p>
                    </footer>
                </div>
            </article>
        })}
    </div> );
}

// commentaires clé
// [{auteur : "Alain" , texte : "super"}] valeur
// {  "0" : {"auteur" : "Alain" , "texte" : "super"} }
 
export default Home;