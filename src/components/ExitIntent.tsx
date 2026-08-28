import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const ExitIntent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-darker p-8 rounded-lg max-w-lg w-full border-2 border-warning relative slide-in">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="font-anton text-2xl mb-4 text-warning">ESPERA!</h3>
        <p className="text-lg mb-4">
          Você realmente vai embora agora?
        </p>
        <p className="text-accent mb-6">
          Daqui a 1 ano, você vai olhar para trás e ver que hoje foi o dia que você escolheu
          continuar na mesma merda de sempre.
        </p>
        <a
          href="https://gabrielamendoncaoficial.mycartpanda.com/checkout/183964906:1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-warning text-black font-archivo py-4 rounded-lg hover-danger text-center"
        >
          NÃO, QUERO MUDAR AGORA
        </a>
      </div>
    </div>
  );
};

export default ExitIntent;