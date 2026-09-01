import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Clock, 
  Shield, 
  Star, 
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Flame,
  Layers,
  Activity,
  Award,
  Users,
  Compass,
  Repeat,
  ShieldAlert,
  FastForward,
  TrendingUp,
  FileCheck
} from 'lucide-react';

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [secondsLeft, setSecondsLeft] = useState(1540); // 25:40 timer

  // 25m 40s Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 1540;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hotmart Sales Funnel Widget script initialization
  useEffect(() => {
    const initSalesFunnel = () => {
      if ((window as any).checkoutElements) {
        try {
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (e) {
          console.warn('Hotmart checkoutElements mount:', e);
        }
      }
    };

    if ((window as any).checkoutElements) {
      initSalesFunnel();
    } else {
      const scriptId = 'hotmart-checkout-elements-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.async = true;
        script.onload = () => {
          setTimeout(initSalesFunnel, 100);
        };
        document.head.appendChild(script);
      } else {
        script.addEventListener('load', () => setTimeout(initSalesFunnel, 100));
      }
    }
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToOffer = () => {
    const el = document.getElementById('oferta-exclusiva');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 8 Categories inside the manual
  const contentModules = [
    {
      title: "Pase y Control",
      desc: "Ejercicios de precisión, controles orientados, rondos dinámicos y secuencias de pases bajo presión.",
      badge: "Fundamento",
      icon: Compass,
      color: "from-red-500 to-amber-500",
      bgLight: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200"
    },
    {
      title: "Finalización",
      desc: "Remates en carrera, situaciones de 1vs1 contra portero, centros laterales y disparos tras combinaciones.",
      badge: "Definición",
      icon: Target,
      color: "from-amber-500 to-yellow-500",
      bgLight: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200"
    },
    {
      title: "Técnica Individual",
      desc: "Conducción orientada, regate, perfiles corporales, fintas y dominio de ambas piernas en juego real.",
      badge: "Habilidad",
      icon: Sparkles,
      color: "from-red-600 to-rose-600",
      bgLight: "bg-rose-50",
      textColor: "text-rose-700",
      borderColor: "border-rose-200"
    },
    {
      title: "Táctica Colectiva",
      desc: "Posicionamiento en el campo, basculaciones, líneas de pase, ocupación de espacios y repliegues.",
      badge: "Estrategia",
      icon: Layers,
      color: "from-slate-800 to-slate-950",
      bgLight: "bg-slate-50",
      textColor: "text-slate-800",
      borderColor: "border-slate-200"
    },
    {
      title: "Velocidad y Coordinación",
      desc: "Circuitos de agilidad con balón, aceleraciones, cambios de ritmo y toma de decisiones rápida.",
      badge: "Físico-Técnico",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      bgLight: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      title: "Trabajo Defensivo",
      desc: "Presión tras pérdida, temporizaciones, coberturas, duelos individuales y defensa en bloque compacto.",
      badge: "Solidez",
      icon: ShieldAlert,
      color: "from-red-600 to-red-800",
      bgLight: "bg-red-50",
      textColor: "text-red-800",
      borderColor: "border-red-200"
    },
    {
      title: "Ataque y Creación",
      desc: "Creación y aprovechamiento de espacios, desmarques de apoyo y ruptura, y superioridades numéricas.",
      badge: "Ofensiva",
      icon: TrendingUp,
      color: "from-amber-600 to-red-600",
      bgLight: "bg-amber-50",
      textColor: "text-amber-800",
      borderColor: "border-amber-200"
    },
    {
      title: "Transiciones Rápidas",
      desc: "Transición ataque-defensa y defensa-ataque, contragolpes letales y reorganización inmediata.",
      badge: "Dinámica",
      icon: FastForward,
      color: "from-slate-900 to-red-900",
      bgLight: "bg-slate-50",
      textColor: "text-slate-900",
      borderColor: "border-slate-200"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden selection:bg-red-600 selection:text-white font-sans pb-24">
      
      {/* Athletic Football Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      {/* Subtle Spain Red & Gold Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ================= HEADER SCARCITY TICKER (RED + YELLOW BAR) ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#dc2626] text-white py-2 px-4 shadow-[0_4px_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2 sm:gap-3.5 border-b border-red-700">
        <span className="text-lg sm:text-xl">🔥</span>
        <span className="text-[11px] sm:text-[14px] md:text-[15px] font-black tracking-wide text-white uppercase select-none">
          ¡OFERTA VÁLIDA SOLO HOY!
        </span>
        <div className="flex items-center gap-1.5 bg-black/25 border border-white/20 rounded-xl px-2.5 py-1 text-xs sm:text-sm font-black text-amber-300 font-mono shadow-inner">
          <Clock className="h-3.5 sm:h-4 sm:w-4 w-3.5 text-amber-300 shrink-0" />
          <span>{formatTimer(secondsLeft)}</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10 relative z-10 space-y-8 sm:space-y-12">
        
        {/* ================= STEP 3 PROGRESS BAR ================= */}
        <section className="bg-white border border-slate-200 py-3 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left rounded-2xl max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] sm:text-xs font-black text-slate-800 tracking-wider uppercase">
              PASO 3 DE 4: <span className="text-red-600 font-black">¡FALTA POCO PARA FINALIZAR!</span> TU PEDIDO PRINCIPAL YA ESTÁ RESERVADO
            </span>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto md:min-w-[210px]">
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200 shadow-inner">
              <div className="bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 h-full rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]" style={{ width: '95%' }}></div>
            </div>
            <span className="text-[10px] font-mono font-black text-red-600 shrink-0 select-none">95% COMPLETADO</span>
          </div>
        </section>

        {/* ================= HERO SECTION ================= */}
        <section className="text-center space-y-5 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-red-700 uppercase tracking-widest mx-auto shadow-sm">
            <Flame className="w-3.5 h-3.5 text-red-600" />
            <span>OPORTUNIDAD ÚNICA PARA ENTRENADORES</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-950 font-sans uppercase">
            98 EJERCICIOS DE ENTRENAMIENTO DE FÚTBOL DE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-500">SELECCIÓN ESPAÑOLA</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Descubre 98 ejercicios prácticos para crear entrenamientos más dinámicos, organizados y efectivos.
          </p>

          {/* Featured Hero Showcase Image */}
          <div className="pt-2 flex flex-col items-center justify-center max-w-3xl mx-auto">
            <div className="relative group rounded-3xl bg-white p-2.5 sm:p-4 border-2 border-slate-200 shadow-xl transition-all duration-300 hover:border-red-400 w-full flex flex-col items-center justify-center overflow-hidden">
              <img 
                src="https://i.ibb.co/s9bHr3YD/Chat-GPT-Image-29-de-ago-de-2026-22-12-41.png" 
                alt="98 Ejercicios de Entrenamiento de Fútbol de la Selección Española" 
                width={640}
                height={512}
                className="w-full h-auto max-w-2xl object-contain rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* ================= KEY VALUE HIGHLIGHTS ================= */}
        <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-1.5">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest font-mono">TODO EN UN SOLO LUGAR</span>
              <h2 className="text-xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                Diseñado para Facilitar tu Trabajo en el Campo
              </h2>
            </div>

            {/* 6 Key bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 hover:border-red-300 transition-all">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">98 ejercicios de entrenamiento</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Una amplia biblioteca con variantes y progresiones claras.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 hover:border-red-300 transition-all">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Ejercicios prácticos y fáciles de aplicar</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Esquemas visuales listos para llevar al terreno de juego.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 hover:border-red-300 transition-all">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Más variedad para tus sesiones</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Evita la monotonía y mantén a tus futbolistas motivados.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 hover:border-red-300 transition-all">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Ahorra horas de planificación</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Estructura entrenamientos profesionales en cuestión de minutos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 hover:border-red-300 transition-all">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Nuevas ideas para tus entrenamientos</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Renueva tu metodología con tareas dinámicas y modernas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 hover:border-red-300 transition-all">
                <div className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  <Check className="h-4 w-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Ideal para entrenadores y categorías base</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Adaptable desde fútbol formativo hasta equipos senior.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION: ¿TE QUEDAS SIN IDEAS PARA PLANIFICAR TUS ENTRENAMIENTOS? ================= */}
        <section className="bg-white border-2 border-red-100 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-red-200">
              💡 SOLUCIÓN PRÁCTICA
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tight leading-tight">
              ¿Te quedas sin ideas para planificar tus entrenamientos?
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Planificar semana tras semana puede ser agotador cuando falta tiempo o inspiración. Contar con un repertorio organizado de <strong className="text-slate-900 font-extrabold">98 ejercicios prácticos</strong> te permite ahorrar horas frente al papel, aportar variedad constante a tus sesiones y asegurar que cada minuto en el campo tenga un propósito claro.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              
              {/* Box 1: El problema */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider">
                  <span>✕</span>
                  <span>Sin una guía estructurada:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Horas buscando ejercicios dispersos en internet.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Repetición de las mismas tareas de siempre.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Falta de progresión táctica y desmotivación del grupo.</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: La solución */}
              <div className="bg-red-50/50 border border-red-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>Con los 98 Ejercicios:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Sesiones armadas en 5 minutos con esquemas claros.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Variedad constante para mantener alta la intensidad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Trabajo integral de técnica, táctica, ataque y defensa.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </section>

        {/* ================= SECTION: ¿QUÉ ENCONTRARÁS DENTRO? ================= */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-black font-mono text-red-600 uppercase tracking-widest block">
              CONTENIDO DETALLADO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tight">
              ¿Qué Encontrarás Dentro?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Una estructura organizada en 8 bloques temáticos para trabajar todos los aspectos del fútbol moderno:
            </p>
          </div>

          {/* 8 Theme Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentModules.map((module, idx) => {
              const IconComp = module.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm hover:shadow-md hover:border-red-400 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`h-10 w-10 rounded-xl ${module.bgLight} ${module.textColor} border ${module.borderColor} flex items-center justify-center shadow-xs transition-transform group-hover:scale-105`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${module.bgLight} ${module.textColor} border ${module.borderColor}`}>
                        {module.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-950 tracking-tight">
                      {module.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {module.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>Bloque {idx + 1}</span>
                    <span className="text-red-600 group-hover:translate-x-0.5 transition-transform">✓ Incluido</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION (SOLO ENFOCADO EN: AHORRO DE TIEMPO, VARIEDAD, FACILIDAD, UTILIDAD) ================= */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-black font-mono text-red-600 uppercase tracking-widest block">
              EXPERIENCIAS DE ENTRENADORES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
              Lo Que Dicen Quienes Ya Lo Aplican
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Opiniones centradas en la practicidad, el ahorro de tiempo y la variedad en las sesiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Testimonial 1 - Ahorro de tiempo */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm hover:border-red-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Ahorro de Tiempo
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "Antes tardaba horas cada tarde armando la sesión. Con este material elijo el bloque que necesito y en 5 minutos tengo el entrenamiento listo y perfectamente estructurado."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img 
                  src="https://i.ibb.co/mrNtKLvp/Nedjeljko-Josipovic.jpg" 
                  alt="Nedjeljko-Josipovic" 
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-slate-200 shadow-sm shrink-0 bg-slate-100"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-slate-950 font-extrabold text-xs uppercase tracking-wider">Carlos M.</h5>
                  <span className="text-[10px] text-red-600 font-semibold block">Entrenador Categoría Juvenil</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Variedad y dinamismo */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm hover:border-red-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Variedad de Ejercicios
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "Mis jugadores ya no se aburren repitiendo lo mismo. La cantidad y calidad de variantes hace que cada práctica sea dinámica, entretenida y muy intensa."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img 
                  src="https://i.ibb.co/tMRxZnpq/dickman-pre-season.webp" 
                  alt="dickman-pre-season" 
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-slate-200 shadow-sm shrink-0 bg-slate-100"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-slate-950 font-extrabold text-xs uppercase tracking-wider">Javier O.</h5>
                  <span className="text-[10px] text-red-600 font-semibold block">Entrenador de Fútbol Base</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Facilidad para planificar y utilidad */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm hover:border-red-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Facilidad y Utilidad
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "Las fichas son muy visuales y claras. Cualquier entrenador puede aplicarlas sin complicaciones desde el primer día. Una herramienta indispensable en mi mochila."
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img 
                  src="https://i.ibb.co/ynd9h7Kj/treinador-de-futebol-ensinando-seus-alunos-23-2149708026.avif" 
                  alt="treinador-de-futebol-ensinando-seus-alunos-23-2149708026" 
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover border border-slate-200 shadow-sm shrink-0 bg-slate-100"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-slate-950 font-extrabold text-xs uppercase tracking-wider">Miguel S.</h5>
                  <span className="text-[10px] text-red-600 font-semibold block">Director y Preparador Deportivo</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FINAL OFFER BLOCK (#oferta-exclusiva) ================= */}
        <section id="oferta-exclusiva" className="bg-white border-2 border-amber-400 rounded-3xl p-5 sm:p-8 md:p-10 text-center relative overflow-hidden shadow-xl space-y-5 max-w-3xl mx-auto text-slate-900 scroll-mt-20">
          
          {/* Subtle red & yellow glows */}
          <div className="absolute right-0 top-0 -z-10 h-36 w-36 rounded-full bg-amber-100/60 blur-3xl pointer-events-none"></div>
          <div className="absolute left-0 bottom-0 -z-10 h-36 w-36 rounded-full bg-red-100/60 blur-3xl pointer-events-none"></div>

          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-white text-red-700 border-2 border-red-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mx-auto shadow-sm">
              🔥 OFERTA ESPECIAL ADICIONAL DEL 90%
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-none uppercase">
              CONSIGUE LOS 98 EJERCICIOS AHORA
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Esta oferta especial con descuento del 90% solo está disponible en esta página y desaparecerá de forma permanente al salir.
            </p>
          </div>

          {/* Pricing container */}
          <div className="max-w-md mx-auto py-4 border-y border-slate-200 space-y-3">
            
            {/* Price anchors */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] min-[360px]:text-xs sm:text-sm font-semibold text-slate-500 whitespace-nowrap flex-nowrap">
              <span className="text-slate-600 flex items-center gap-1">Valor Oficial: <span className="line-through text-red-500 font-extrabold">97,00€</span></span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-mono font-bold uppercase text-[9px] min-[360px]:text-[10px] tracking-wider shrink-0">
                Ahorras 84,52€
              </span>
            </div>

            {/* Price Callout */}
            <div className="flex flex-col items-center justify-center my-1 select-none whitespace-nowrap">
              <div className="flex items-center justify-center flex-nowrap gap-0.5 sm:gap-1">
                <span className="text-[3.75rem] min-[360px]:text-[4.5rem] sm:text-[7.5rem] md:text-[8.5rem] font-black text-red-600 tracking-tighter leading-none shrink-0 drop-shadow-sm">
                  12,48€
                </span>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 leading-tight font-mono font-medium">
              PAGO ÚNICO • ACCESO DIGITAL COMPLETO • DESCARGA DE INMEDIATO
            </p>
          </div>

          {/* HOTMART - Sales Funnel Widget */}
          <div className="w-full max-w-md mx-auto my-3 min-h-[60px]">
            <div id="hotmart-sales-funnel"></div>
          </div>

          {/* SSL and security indicators */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest pt-3 border-t border-slate-200">
            <span className="flex items-center gap-1">🔒 Conexión SSL</span>
            <span className="flex items-center gap-1">🛡️ Garantía de 7 días</span>
            <span className="flex items-center gap-1">⚡ Acceso Inmediato</span>
          </div>

        </section>

        {/* ================= GUARANTEE SECTION ================= */}
        <section className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 flex flex-col md:flex-row items-center gap-4 sm:gap-6 max-w-3xl mx-auto shadow-sm">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 flex-shrink-0 shadow-sm">
            <Shield className="h-8 sm:h-10 sm:w-10 stroke-[1.5]" />
          </div>
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] font-mono text-red-600 font-extrabold uppercase tracking-widest block">GARANTÍA DE SATISFACCIÓN INCONDICIONAL</span>
            <h3 className="text-base sm:text-lg font-black text-slate-950 uppercase">Garantía Incondicional de 7 Días</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prueba los 98 ejercicios de entrenamiento durante 7 días completos. Si consideras que no te ayudan a ahorrar tiempo y hacer tus entrenamientos más dinámicos, solicita el reembolso inmediato del 100% de tu dinero. Sin preguntas ni complicaciones.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
