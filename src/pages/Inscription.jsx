import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.png';

export default function Inscription() {
    return (

        <div className="min-h-screen bg-center flex items-center justify-center p-6 text-gray-800 bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-white p-8 space-y-6">
                <div className="text-center">
                    <Link to={"/"}> <h2 className="text-3xl font-bold text-gray-800 mb-2">Jèko Todo</h2> </Link>
                    <p className="text-gray-600">Avez-vous déjà un compte ? <Link to={"/connexion"} className='text-indigo-600 hover:text-indigo-800'>Se connecter</Link> </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Nom et prenom
                        </label>
                        <input
                            type="nom"
                            id="nom"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all border-gray-300"
                            placeholder="Entrer votre nom et prenom"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="Email"
                            id="Email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all border-gray-300"
                            placeholder="Entrer votre email"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all border-gray-300"
                            placeholder="Entrer votre mot de passe"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Confirmation de mot de passe
                        </label>
                        <input
                            type="confirmPassword"
                            id="confirmPassword"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all border-gray-300"
                            placeholder="confirmer votre mot de passe"
                        />
                    </div>
                    <Link to={"/connexion"}>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            S'inscrire
                        </button>
                    </Link>
                </form>
            </div>
        </div>
        
    );
}