import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import backgroundImage from '../assets/images/background.png';

export default function Inscription() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    nom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [erreur, setErreur] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, email, password, confirmPassword } = userData;

    if (!nom || !email || !password || !confirmPassword) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    if (password !== confirmPassword) {
      setErreur("Les mots de passe ne correspondent pas.");
      return;
    }

    const utilisateurExistant = localStorage.getItem(email);
    if (utilisateurExistant) {
      setErreur("Un compte avec cet email existe déjà.");
      return;
    }

    const nouvelUtilisateur = { nom, email, password };
    localStorage.setItem(email, JSON.stringify(nouvelUtilisateur));

    navigate('/connexion');
  };

  return (
    <div
      className="min-h-screen bg-center flex items-center justify-center p-6 text-gray-800 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-white p-8 space-y-6">
        <div className="text-center">
          <Link to="/">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Jèko Todo</h2>
          </Link>
          <p className="text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link to="/connexion" className="text-indigo-600 hover:text-indigo-800">Se connecter</Link>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Nom et prénom</label>
            <input
              type="text"
              id="nom"
              value={userData.nom}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Entrer votre nom et prénom"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Entrer votre email"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Créer un mot de passe"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Confirmer mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Confirmer votre mot de passe"
              required
            />
          </div>

          {erreur && <p className="text-red-500 text-sm">{erreur}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
