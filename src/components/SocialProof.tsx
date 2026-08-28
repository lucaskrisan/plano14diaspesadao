import React, { useEffect, useState } from 'react';

const names = [
  'Ana C.', 'Maria L.', 'Julia S.', 'Beatriz M.', 'Carolina F.',
  'Daniela R.', 'Fernanda T.', 'Gabriela P.', 'Helena S.', 'Isabel M.'
];

const SocialProof: React.FC = () => {
  const [currentPurchase, setCurrentPurchase] = useState({ name: '', time: 0 });

  useEffect(() => {
    const showRandomPurchase = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomTime = Math.floor(Math.random() * 5) + 1;
      setCurrentPurchase({ name: randomName, time: randomTime });
    };

    const interval = setInterval(showRandomPurchase, 5000);
    showRandomPurchase();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-darker p-4 rounded-lg border border-warning shadow-lg slide-in bg-blur z-50">
      <p className="text-sm">
        <span className="text-warning">{currentPurchase.name}</span> comprou há{' '}
        <span className="text-warning">{currentPurchase.time}</span> minuto
        {currentPurchase.time > 1 ? 's' : ''}
      </p>
    </div>
  );
};

export default SocialProof;