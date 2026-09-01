/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Download, Sparkles } from 'lucide-react';
import SalesNotification from './components/SalesNotification';
import UpsellRFEF from './components/UpsellRFEF';

export default function App() {
  const [viewMode, setViewMode] = useState<'upsell' | 'thankyou_accepted' | 'thankyou_declined'>('upsell');

  useEffect(() => {
    document.title = "+2000 Sesiones de Entrenamiento de Fútbol";
  }, []);

  // Scroll to top helper when state changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white">
      
      {/* Dynamic top-left small sales notifications */}
      <SalesNotification />

      {/* ================= CONDITIONAL FUNNEL PAGE RENDERING ================= */}

      {viewMode === 'upsell' && (
        <UpsellRFEF 
          onAccept={() => setViewMode('thankyou_accepted')}
          onDecline={() => setViewMode('thankyou_declined')}
        />
      )}
        {(viewMode === 'thankyou_accepted' || viewMode === 'thankyou_declined') && (
          <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white relative">
            
            {/* Soccer field decoration overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

            <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative z-10 text-center space-y-8">
              
              {/* Header Success Checkmark */}
              <div className="flex flex-col items-center space-y-3">
                <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                  {viewMode === 'thankyou_accepted' ? '¡COMPRA COMPLETA CON UPSELL!' : '¡COMPRA COMPLETADA CON ÉXITO!'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight">
                  ¡Gracias por tu confianza!
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Hemos enviado las credenciales de acceso y tu manual digital directamente a tu bandeja de correo electrónico.
                </p>
              </div>

              {/* Order Summary receipt card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-2.5 flex items-center justify-between">
                  <span>Resumen de tu Pedido</span>
                  <span className="text-red-600 font-mono text-[10px]">CÓD: ESP-77291B</span>
                </p>
                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex justify-between items-center text-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Megapack de Entrenamientos de Fútbol</span>
                    </div>
                    <span className="font-bold font-mono text-slate-700">9,36€</span>
                  </li>

                  {viewMode === 'thankyou_accepted' ? (
                    <li className="flex justify-between items-center text-amber-900 bg-amber-50 border border-amber-200 p-2.5 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-600 flex-shrink-0 animate-pulse" />
                        <span className="font-bold">98 Ejercicios de Entrenamiento de Fútbol de la Selección Española</span>
                      </div>
                      <span className="font-black font-mono text-amber-700">12,48€</span>
                    </li>
                  ) : (
                    <li className="flex justify-between items-center text-slate-400 italic p-1 border-t border-slate-200 pt-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">✕</span>
                        <span>98 Ejercicios de Entrenamiento de Fútbol de la Selección Española</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-400">Rechazado</span>
                    </li>
                  )}
                </ul>

                <div className="border-t border-slate-200 pt-3 flex justify-between items-center font-bold text-slate-900 text-sm sm:text-base">
                  <span>Total Cargado:</span>
                  <span className="font-mono text-amber-600 text-lg sm:text-xl font-black">
                    {viewMode === 'thankyou_accepted' ? 'U$18,60' : 'U$9,30'}
                  </span>
                </div>
              </div>

              {/* Simulated Downloads Block */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-amber-700 font-black uppercase tracking-wider bg-amber-50 py-2.5 px-4 rounded-xl border border-amber-200 inline-block">
                  📥 ACCESO DE DESCARGA INSTANTÁNEO
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {viewMode === 'thankyou_accepted' && (
                    <button 
                      onClick={() => alert("Simulación de Descarga: Los 98 Ejercicios de Entrenamiento de Fútbol de la Selección Española se han descargado correctamente.")}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:brightness-110 text-white font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg animate-pulse"
                    >
                      <Download className="h-4 w-4" />
                      <span>Descargar 98 Ejercicios</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Back to main sales page indicator */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => setViewMode('upsell')}
                  className="text-xs text-slate-500 hover:text-slate-700 underline font-medium cursor-pointer transition-colors"
                >
                  Volver a la página anterior
                </button>
              </div>

            </div>
          </div>
        )}
    </div>
  );
}


