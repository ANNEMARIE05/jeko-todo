import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  Circle,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export default function Tache({ taches, setTaches }) {
  const [detail, setDetail] = useState(null);

  const toggleStatus = (id) => {
    const maj = taches.map((tache) =>
      tache.id === id ? { ...tache, status: !tache.status } : tache
    );
    setTaches(maj);
  };

  const supprimerTache = (id) => {
    const reste = taches.filter((t) => t.id !== id);
    setTaches(reste);
  };

  const toggleDetail = (id) => {
    setDetail(detail === id ? null : id);
  };

  return (
    <>
      {taches.length === 0 ? (
        <p className="text-center text-gray-400 mt-4">
          Aucune tâche pour le moment
        </p>
      ) : (
        taches.map((tache) => (
          <div
            key={tache.id}
            className="bg-gray-100 border border-gray-200 rounded-lg mb-3 transition"
          >
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-3">
                {tache.status ? (
                  <CheckCircle
                    size={22}
                    onClick={() => toggleStatus(tache.id)}
                    className="text-green-500 cursor-pointer hover:scale-110 transition"
                    title="Marquer comme non terminée"
                  />
                ) : (
                  <Circle
                    size={22}
                    onClick={() => toggleStatus(tache.id)}
                    className="text-gray-400 cursor-pointer hover:scale-110 transition"
                    title="Marquer comme terminée"
                  />
                )}
                <h1
                  className={`text-md font-medium ${
                    tache.status
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {tache.titre}
                </h1>
              </div>

              <div className="flex items-center space-x-2 text-gray-400">
                <button
                  className="hover:text-red-500 hover:bg-gray-200 p-1 rounded-full"
                  onClick={() => supprimerTache(tache.id)}
                  title="Supprimer"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  onClick={() => toggleDetail(tache.id)}
                  className="hover:text-indigo-500"
                  title="Détails"
                >
                  {detail === tache.id ? (
                    <ArrowDown size={18} />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Détails */}
            {detail === tache.id && (
              <div className="bg-gray-100 px-4 py-2 rounded-b-xl text-sm">
                <p className="text-gray-600">
                  Ajoutée le :{" "}
                  <span className="font-medium">{tache.date}</span>
                </p>
                <p className="text-gray-600 mt-1">
                  Statut :{" "}
                  <span className="font-medium">
                    {tache.status ? "Terminée" : "En cours"}
                  </span>
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </>
  );
}
