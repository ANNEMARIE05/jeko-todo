import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/background.png';
import { useState } from 'react';

export default function Connexion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const userData = localStorage.getItem(email);

    if (!userData) {
      setError("Aucun compte trouvé avec cet email.");
      return;
    }

    const user = JSON.parse(userData);

    if (user.password !== password) {
      setError("Mot de passe incorrect.");
      return;
    }
    
    localStorage.setItem("utilisateurConnecte", JSON.stringify(user));
    
    navigate("/tachepage");
  };

  return (
    <div
      className="min-h-screen bg-center flex items-center justify-center p-6 text-gray-800 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg bg-white p-8 space-y-6">
        <div className="text-center">
          <Link to={"/"}>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Jèko Todo</h2>
          </Link>
          <p className="text-gray-600">
            Pas de compte ?{" "}
            <Link to={"/inscription"} className="text-indigo-600 hover:text-indigo-800">
              S'inscrire ici
            </Link>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Entrer votre mot de passe"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
