import React from 'react';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const SeConnecter = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const connexion = (e) => {
        e.preventDefault();
        console.log('bravo vous êtes connecté', email, password);
        localStorage.setItem('email user', email);
        localStorage.setItem('password user', password);
        const emailUser = localStorage.getItem('email user');
        const passwordUser = localStorage.getItem('password user');

        if ((emailUser === "vincent@vincent" && passwordUser === "parrot") ||
            (emailUser === "employe@employe" && passwordUser === "employe")) {
            navigate("/");
            window.location.reload();
        } else {
            alert('Vous n\'êtes pas autorisé à utiliser l\'espace pro');
        }
    }

    const deconnexion = (e) => {
        e.preventDefault();
        localStorage.removeItem('email user');
        localStorage.removeItem('password user');
        navigate("/");
        //window.location.reload();
    }

    return (
        <div>
            <Navigation />
            <h1>Espace professionnel</h1>
            <div className="conteneurConnexion">
                <form className="formulaireConnexion">
                    {localStorage.getItem('email user') !== null && localStorage.getItem('password user') !== null ?
                        <>
                            <legend>Vous êtes connecté en tant que {localStorage.getItem('email user')}</legend>
                            <button onClick={deconnexion}>
                                Se déconnecter
                            </button>
                        </>
                        :
                        <div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email"></label>

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="votre mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password"></label>

                            <div className="boutonConnexion">
                                <button onClick={connexion}>
                                    Se connecter
                                </button>
                            </div>
                        </div>
                    }
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SeConnecter;