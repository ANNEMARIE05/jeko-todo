import { CirclePlus,  LogOut,  Search } from "lucide-react"
import Footer from "../components/Footer"
import Tache from "../components/Tache"
import { Link } from "react-router-dom"

export default function TachePage(){
    return(
        <>
            <div className="min-h-screen flex items-center justify-center py-10 bg-blue-50 text-gray-800">
                <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white">
                    <div className="py-2 flex justify-between">
                        <h1></h1>
                        <h1 className="text-3xl font-bold text-indigo-500 mb-2 ">Jèko Todo</h1>
                        <Link to={"/connexion"}>
                            <button className="ml-2 px-2 py-1 rounded-lg text-gray-400 hover:text-red-500 hover:bg-gray-50">
                                <LogOut size={18} />
                            </button>
                        </Link>
                    </div>
                    <div className="py-5 flex">
                        <Search size={18} className="m-2 text-gray-400"/>
                        <input 
                            type="search" 
                            name="" id="" 
                            placeholder="Rechercher" 
                            className="w-full p-2 rounded-md bg-white border border-gray-200"
                        />
                    </div>
                    <div className="flex bg-gray-50 p-1 space-x-2 rounded-lg">
                        <input 
                            type="text" name="" id="" 
                            placeholder="Ajouter une nouvelle tâche"
                            className="p-3 w-full rounded-lg"
                        />
                        <div className="p-3 bg-indigo-500 hover:bg-indigo-600 m-1 rounded-lg">
                            <CirclePlus size={18} className="text-white"/>
                        </div>
                    </div>
                    <div className="flex bg-gray-50 p-1 space-x-2 rounded-lg my-5">
                        <button className="w-200 p-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white">Toutes</button>
                        <button className="w-200 p-2 rounded-lg hover:bg-gray-300 text-gray-700">En cours</button>
                        <button className="w-200 p-2 rounded-lg hover:bg-gray-300 text-gray-700">Terminer</button>
                    </div>
                    <div className="overflow-auto h-[220px]">
                        <Tache />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}