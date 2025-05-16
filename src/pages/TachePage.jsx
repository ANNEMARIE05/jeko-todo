import { useState, useEffect } from "react";
import { LogOut, Search, CirclePlus } from "lucide-react";
import Tache from "../components/Tache";
import Footer from "../components/Footer";

export default function TachePage() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState("");
  const [utilisateur, setUtilisateur] = useState(null);
  const [filtre, setFiltre] = useState("toutes");

  useEffect(() => {
    const utilisateurConnecte = localStorage.getItem("utilisateurConnecte");
    if (utilisateurConnecte) {
      setUtilisateur(JSON.parse(utilisateurConnecte));
    } else {
      window.location.href = "/connexion";
    }

    const tachesStockees = localStorage.getItem("taches");
    if (tachesStockees) {
      setTaches(JSON.parse(tachesStockees));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
  }, [taches]);

  const ajouterTache = () => {
    if (!nouvelleTache.trim()) return;
    const nouvelle = {
      id: Date.now(),
      titre: nouvelleTache.trim(),
      status: false,
      date: new Date().toLocaleString(),
    };
    setTaches([nouvelle, ...taches]);
    setNouvelleTache("");
  };

  const deconnexion = () => {
    const confirmation = confirm("Voulez-vous vraiment vous deconnecter ?")
    if (confirmation) {
      localStorage.removeItem("utilisateurConnecte");
      window.location.href = "/connexion";
    }
  };

  const tachesFiltrees =
    filtre === "toutes" ? taches : filtre === "encours" ? taches.filter((t) => !t.status) : taches.filter((t) => t.status);

  const nbRestantes = taches.filter((t) => !t.status).length;
  const nbTerminees = taches.filter((t) => t.status).length;
  return (
    <div className="min-h-screen bg-blue-100 to-white py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-indigo-600"> Jèko Todo</h1>
            {utilisateur && (
              <p className="text-sm text-gray-500">Salut, {utilisateur.nom}</p>
            )}
          </div>
          <button
            onClick={deconnexion}
            className="text-gray-400 hover:text-red-500 transition"
            title="Se déconnecter"
          >
            <LogOut size={24} />
          </button>
        </div>

        <div className="flex items-center mb-4 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
          <Search className="text-gray-400" size={18} />
          <input
            type="search"
            placeholder="Rechercher une tâche..."
            className="ml-2 w-full outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <input
            type="text"
            placeholder="Ajouter une nouvelle tâche"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-indigo-500"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />
          <button
            onClick={ajouterTache}
            className="p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
            title="Ajouter une tâche"
          >
            <CirclePlus size={20} />
          </button>
        </div>

        <div className="flex justify-between mb-6">
          {["toutes", "encours", "terminer"].map((type) => (
            <button
              key={type}
              className={`flex-1 py-3 mx-1 rounded-lg text-sm font-semibold transition ${
                filtre === type
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFiltre(type)}
            >
              {type === "toutes"
                ? "Toutes"
                : type === "encours"
                ? "En cours"
                : "Terminées"}
            </button>
          ))}
        </div>

        <Tache taches={tachesFiltrees} setTaches={setTaches} />

        <Footer restantes={nbRestantes} terminees={nbTerminees} />
      </div>
    </div>
  );
}
