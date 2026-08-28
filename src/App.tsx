import React, { useState, useEffect } from 'react';
import { Timer, Skull, Brain, AlertTriangle, X, ShieldX, Zap, CreditCard, HelpCircle, FileText, CreditCard as CardIcon, Wallet, ChevronDown, Shield, Clock, ArrowRight } from 'lucide-react';
import ExitIntent from './components/ExitIntent';
import SocialProof from './components/SocialProof';

function App() {
  const [timeLeft, setTimeLeft] = useState('');
  const [stockLeft] = useState(47);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const friday = new Date();
      friday.setDate(friday.getDate() + (5 - friday.getDay()));
      friday.setHours(23, 59, 0, 0);
      
      const difference = friday.getTime() - now.getTime();
      
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      return `${hours}h ${minutes}m`;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 60000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const faqItems = [
    {
      icon: <FileText className="w-6 h-6 text-warning flex-shrink-0" />,
      question: "Como funciona o processo de entrega?",
      answer: "Após a confirmação do pagamento, você receberá INSTANTANEAMENTE o link de download do PDF no seu e-mail cadastrado. Não precisa esperar, pode começar sua transformação agora mesmo."
    },
    {
      icon: <Shield className="w-6 h-6 text-warning flex-shrink-0" />,
      question: "O pagamento é seguro?",
      answer: "Absolutamente. Utilizamos uma das plataformas mais seguras do mercado, com criptografia SSL e proteção anti-fraude. Seus dados estão 100% protegidos."
    },
    {
      icon: <Clock className="w-6 h-6 text-warning flex-shrink-0" />,
      question: "Quanto tempo tenho para fazer o plano?",
      answer: "O plano é estruturado para 7 dias INTENSOS de transformação. Mas você tem acesso vitalício ao material. Só não use isso como desculpa para procrastinar. A mudança precisa começar HOJE."
    },
    {
      icon: <CardIcon className="w-6 h-6 text-warning flex-shrink-0" />,
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos PIX, cartões de crédito (em até 12x), boleto e transferência bancária. Escolha a opção que preferir, mas não deixe o medo te impedir de mudar."
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-warning flex-shrink-0" />,
      question: "Posso começar mesmo sem experiência?",
      answer: "Sim. Na verdade, quanto mais perdida você estiver, mais impacto esse plano terá. Ele foi feito para destruir suas limitações e reconstruir sua identidade do zero."
    },
    {
      icon: <Wallet className="w-6 h-6 text-warning flex-shrink-0" />,
      question: "Tem garantia de reembolso?",
      answer: "Não. Este PDF é para quem está 100% comprometida com a mudança. Se você ainda está em dúvida ou procurando desculpas, talvez não esteja pronta para a verdade que ele contém."
    }
  ];

  return (
    <div className="min-h-screen bg-dark bg-texture text-white">      
      {/* Timer */}
      <div className="fixed top-0 w-full bg-darker py-2 text-center z-50 border-b border-border">
        <p className="text-sm flex items-center justify-center gap-2">
          <Timer className="w-4 h-4 text-warning pulse" />
          Esta página se autodestrói em {timeLeft}
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-16 pb-32 max-w-7xl">
        {/* Headline */}
        <div className="space-y-6 py-20">
          <h1 className="font-anton text-4xl md:text-6xl leading-tight text-center">
            O PLANO DE 7 DIAS PARA PARAR DE SE SABOTAR
          </h1>
          <p className="text-accent text-center text-lg italic floating">
            *Esse PDF não é pra te ajudar. É pra te obrigar a levantar da merda que você se enfiou.*
          </p>
        </div>

        {/* Video Background Section */}
        <div className="relative h-[400px] my-12 rounded-lg overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1609743522653-52354461eb27?auto=format&fit=crop&w=1920"
          >
            <source src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d2765f4f4b956456b218f32e02ad5d3f9e347&profile_id=175" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <p className="font-archivo text-3xl text-center text-warning px-4">
              "A mudança começa quando a dor da mesma merda<br />
              se torna maior que o medo da transformação"
            </p>
          </div>
        </div>

        {/* Subheadline */}
        <div className="space-y-8 py-12 max-w-3xl mx-auto">
          <p className="font-archivo text-2xl text-center leading-relaxed">
            Você diz que quer mudar.<br />
            Mas se sabota antes de tentar.<br />
            Este plano é a última surra emocional antes de você se tornar quem sempre teve medo de ser.
          </p>
        </div>

        {/* Secondary Headline */}
        <div className="space-y-4 py-12 max-w-3xl mx-auto text-center text-lg">
          <p>Se continuar lendo, você vai se ver.</p>
          <p>Se fechar a página, você vai se odiar.</p>
          <p>O plano começa agora.</p>
          <p className="text-accent">A dor é o preço. E você já está pagando.</p>
        </div>

        {/* Microstory */}
        <div className="bg-darker p-8 rounded-lg my-16 max-w-2xl mx-auto border border-border">
          <p className="text-lg leading-relaxed">
            "Este plano nasceu depois de uma tentativa de suicídio. Uma mulher quebrada, chorando em posição fetal, escrevendo tudo o que nunca teve coragem de ouvir. Hoje ela não existe mais. Mas você está exatamente onde ela estava naquele dia."
          </p>
        </div>

        {/* Truth Block */}
        <div className="bg-darker p-8 rounded-lg my-16 max-w-2xl mx-auto border border-border space-y-4">
          <p className="text-lg">Você quer mudar.</p>
          <p className="text-lg">Mas continua repetindo o ciclo de sempre.</p>
          <p className="text-lg">Compra cursos, vê vídeos, ouve frases bonitas...</p>
          <p className="text-lg">Mas vive igual.</p>
          <p className="text-lg">Este plano não é bonito.</p>
          <p className="text-lg text-accent">Vai te destruir.</p>
          <p className="text-lg">Vai te obrigar a ver o que você escondeu de si mesma por ANOS.</p>
          <p className="text-lg">E se você não conseguir terminar, perfeito.</p>
          <p className="text-lg">Pelo menos vai provar que continua fraca.</p>
          <p className="text-lg text-warning">Ou... pode provar que hoje é o fim da sua versão covarde.</p>
        </div>

        {/* Symptoms */}
        <div className="py-16 space-y-12 max-w-3xl mx-auto">
          <h2 className="font-anton text-3xl text-warning text-center">
            <div className="flex items-center justify-center gap-4">
              <Skull className="w-8 h-8" />
              SINTOMAS DE UMA SABOTADORA CRÔNICA
            </div>
          </h2>
          <ul className="space-y-4 text-lg max-w-2xl mx-auto">
            <li className="flex items-center gap-4">
              <X className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Diz que vai mudar, mas repete os mesmos erros</span>
            </li>
            <li className="flex items-center gap-4">
              <X className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Troca amor por atenção</span>
            </li>
            <li className="flex items-center gap-4">
              <X className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Veste empoderamento, mas por dentro se sente um lixo</span>
            </li>
            <li className="flex items-center gap-4">
              <X className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Se afasta de quem exige, se apega a quem destrói</span>
            </li>
            <li className="flex items-center gap-4">
              <X className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Acha que está evoluindo, mas só ficou boa em disfarçar</span>
            </li>
          </ul>
          <p className="text-accent italic text-center">Se você está lendo isso com raiva... é porque acertou em cheio.</p>
        </div>

        {/* What You'll Get */}
        <div className="py-16 space-y-12 max-w-3xl mx-auto">
          <h2 className="font-anton text-3xl text-warning text-center">
            <div className="flex items-center justify-center gap-4">
              <Brain className="w-8 h-8" />
              O QUE VOCÊ VAI RECEBER
            </div>
          </h2>
          <ul className="space-y-6 text-lg">
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Um PDF de 7 dias com punhaladas emocionais calculadas
            </li>
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Exercícios que vão desenterrar trauma, culpa e vergonha
            </li>
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Um espelho psicológico onde a mulher que você FINGE ser vai morrer
            </li>
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              E no final... uma versão que você nunca imaginou que existia
            </li>
          </ul>
        </div>

        {/* Who Can't Download */}
        <div className="py-16 space-y-12 max-w-3xl mx-auto">
          <h2 className="font-anton text-3xl text-warning text-center">
            <div className="flex items-center justify-center gap-4">
              <ShieldX className="w-8 h-8" />
              QUEM NÃO PODE BAIXAR
            </div>
          </h2>
          <ul className="space-y-6 text-lg">
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Mulheres frágeis que querem flores, não verdade
            </li>
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Viciadas em drama, que vivem da própria dor
            </li>
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Vítimas profissionais, que culpam o mundo e nunca se olham no espelho
            </li>
            <li className="bg-darker p-6 rounded-lg border border-border text-center">
              Gente que quer continuar se mentindo com frases bonitas
            </li>
          </ul>
          <p className="text-lg text-accent text-center">
            Se você está confortável na sua dor, este PDF será um golpe que você vai rejeitar. Melhor nem clicar.
          </p>
        </div>

        {/* Scarcity */}
        <div className="bg-darker p-8 rounded-lg my-16 max-w-2xl mx-auto border border-border">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-6 h-6 text-warning" />
            <p className="font-archivo text-xl">ATENÇÃO:</p>
          </div>
          <p className="text-lg mb-4">
            Este conteúdo gera um impacto emocional forte. Por isso, apenas {stockLeft} cópias liberadas por semana.
          </p>
          <p className="text-accent italic">
            "Se aparecer 'esgotado' no checkout, você chegou tarde. De novo."
          </p>
        </div>

        {/* Testimonials */}
        <div className="py-16 space-y-8">
          <div className="bg-darker p-8 rounded-lg border border-border">
            <p className="text-lg italic mb-4">
              "Pensei que era só mais um PDF. No dia 4, eu estava vomitando lágrimas."
            </p>
            <p className="text-sm text-gray-400">— Camila, 33</p>
          </div>
          <div className="bg-darker p-8 rounded-lg border border-border">
            <p className="text-lg italic mb-4">
              "Minha psicóloga não teve coragem de me dizer metade do que esse arquivo me disse."
            </p>
            <p className="text-sm text-gray-400">— Thaís, 29</p>
          </div>
          <div className="bg-darker p-8 rounded-lg border border-border">
            <p className="text-lg italic mb-4">
              "No terceiro dia chorei como uma criança. No sétimo, abri minha empresa."
            </p>
            <p className="text-sm text-gray-400">— Rafa, 26</p>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="py-16 max-w-2xl mx-auto">
          <div className="bg-darker rounded-2xl border-2 border-warning overflow-hidden">
            <div className="p-8 space-y-8">
              <h3 className="font-anton text-3xl flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-warning" />
                ESCOLHA SUA TRANSFORMAÇÃO
              </h3>
              
              {/* Basic Plan */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-archivo text-xl">PLANO BÁSICO</h4>
                  <p className="text-2xl font-bold text-warning">R$19,90</p>
                </div>
                <a 
                  href="https://gabrielamendoncaoficial.mycartpanda.com/checkout/183959811:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-warning text-black font-archivo py-4 px-8 rounded-full text-lg hover-danger transition-all duration-300 text-center pulse btn-hover"
                >
                  SIM, EU VOU TRANSFORMAR A DOR EM DISCIPLINA
                </a>
                <p className="text-sm text-gray-400 italic text-center">
                  "É menos que um lanche. Mas mais do que você já teve coragem de investir em verdade."
                </p>
              </div>

              <hr className="border-border" />

              {/* Premium Plan */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-archivo text-xl">MODO INVISÍVEL</h4>
                  <p className="text-2xl font-bold text-warning">R$29,90</p>
                </div>
                <p className="text-lg text-gray-300">
                  Comandos diários + desafios surpresa + reforço mental pelos próximos 7 dias
                </p>
                <a 
                  href="https://gabrielamendoncaoficial.mycartpanda.com/checkout/183964906:1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-transparent text-warning font-archivo py-4 px-8 rounded-full text-lg border-2 border-warning hover:bg-warning hover:text-black transition-all duration-300 text-center"
                >
                  ATIVAR MODO INVISÍVEL
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 max-w-2xl mx-auto">
          <div className="space-y-8">
            <h2 className="font-anton text-3xl flex items-center gap-4 text-warning">
              <HelpCircle className="w-8 h-8" />
              PERGUNTAS FREQUENTES
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-darker rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-warning"
                >
                  <button
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-darker/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <h3 className="font-archivo text-lg">{item.question}</h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-warning transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 pt-0 text-gray-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ExitIntent />
      <SocialProof />
    </div>
  );
}

export default App;