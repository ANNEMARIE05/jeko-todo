import { ArrowDown, ArrowRight, CheckCircle, Circle, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Tache(){
    const [detail, setDetail] = useState(false)
    const [check, setCheck] = useState(false)
    return(
        <>
            <div className="bg-gray-50 rounded-xl my-2">
                <div className="flex justify-between  p-4">
                    <div className="flex space-x-2">
                        {check ? <CheckCircle size={22} onClick={ () =>setCheck(!check)} className="text-green-400" /> : <Circle size={22} onClick={ () =>setCheck(!check)}  className="text-gray-400"/>}
                        <h1 className={`${check && "line-through text-gray-400"}`}>Voici ma prémière tâche a ajouter </h1>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                    <button
                      className="ml-2 p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-200"
                    >
                      <Trash2 size={18} />
                    </button>
                        {detail ? <ArrowDown size={18} onClick={ () =>setDetail(!detail)}/> : 
                        <ArrowRight onClick={ () =>setDetail(!detail)} size={18} />}
                    </div>
                </div>
                {detail && <div className="p-4 bg-gray-100 rounded-b-xl text-sm">
                    <p className="text-gray-600">
                        Tâche ajoutée le: {Date.now()}
                    </p>
                    <p className="mt-1 text-gray-600">
                        Status: {check ? 'Terminée ✅' : 'En cours 🔄'}
                    </p>
                </div>}
            </div>
        </>
    )
}