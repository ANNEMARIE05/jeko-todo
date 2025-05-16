export default function Footer({ restantes, terminees }) {
    return (
      <div className="flex justify-between mt-4 p-2 border-t-2 border-gray-100 text-gray-500 text-sm">
        <div>
          Tâches restantes : <span className="font-semibold">{restantes}</span>
        </div>
        <div>
          Tâches terminées : <span className="font-semibold">{terminees}</span>
        </div>
      </div>
    );
  }
  