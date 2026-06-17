import { useEffect, useState } from "react";
import { motion } from 'motion/react';
import {X} from 'lucide-react';
const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
const popupImage = new URL('../Public/SSC 2026 result.png', import.meta.url).href;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-2 max-w-lg w-[90%]">
        
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-xl font-bold"
        >
         <X strokeWidth={2.25} />
        </button>

        {/* Popup Image */}
        <img
          src={popupImage}
          alt="Announcement"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Popup;