/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  MoreVertical, 
  Plus, 
  Send, 
  Maximize, 
  BarChart3,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: '1',
      type: 'user',
      content: {
        type: 'image',
        url: 'https://lh3.googleusercontent.com/aida/ADBb0uhatr8EM_jZMSySEFVKE5PuBeprpWTkWaAdNiB4WD5E-ZOPV_N_wec6lZj0V71Q7iz0MqlhkHpeR6yxcRs8ZkxTRR6kDGG4ERj1iIYupE1Ald6Q3bBIXbBgsP_Nfb4wNtE8cYDzrzXBkht9TZZWGUA3qSi1VH6jixlFXovp6YLs9R8UCJPGEFyggAbq2sfJp0DBCuSGAiKizZHHjGO5nHtwH51-Q2buGPWBleHAWpYUo36VZwIbSgP7SLK8FuLQ_hfEznpEPqdoPXc',
        label: 'Scalp Image'
      },
      time: '10:30',
      read: true
    },
    {
      id: '2',
      type: 'user',
      content: {
        type: 'image',
        url: 'https://lh3.googleusercontent.com/aida/ADBb0uiBfx2BS8rkhJSzqV4NJRhKYafs7jlUf6De-AJcomn8k2TMoIIcNAczomKx1ydHOg-O9fs3K5CKBqy0meivmbJXYscFCrIvTeXJOv4VogpwIDIb5-XQAYqP6QfRSCHygJldF49SACTOVS6W1Hp_3OobEGrCWpjLEjDY-eP6Lgy6TJI6kJkoDLG0lJL3jEEiX32IBPe8HvPN7kUNXA4IFdXUGolMdTeiheLkEQhx8DEAczuGpNRkpbg7JwOYd3j50ccdO2iIcmzHhEY',
        label: 'AI Analysis'
      },
      time: '10:30',
      read: true
    },
    {
      id: '3',
      type: 'doctor',
      content: {
        type: 'text',
        text: '您好，我已经收到了您的报告，我稍后会告诉您详细的用药意见。'
      },
      time: '10:31'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative pb-safe">
      {/* Top Header */}
      <header className="bg-white/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-slate-100 flex justify-between items-center px-4 h-16 shadow-sm">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="text-primary hover:bg-slate-100 p-2 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhGpv-BUJvrAc2PWkPpwJCm_eav51v2--2dPLB_G28JRS5Y1Au4SGZLbF-f-NE0eat3y-HQUSrooPQDZ_kBAdxU0q-VqLFeRdF8ETV6efOldU2r3X3LeRuADEm2obFFnXfUiY9SMVEHWbYPGIjXgtg1_acW46B1TMIZ9pan9sfi5vt2rzRSd2L5S7TWRayUZ4s-vH-x1rrXNbglnzN7JABpJE8N8VFlDLaTYlt9Li92w34jYIJpcBeY_pJnEIvCQQAYuTHPO_CkcpQ" 
                alt="Dr. Li" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-on-background">Dr. Li</span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(0,125,87,0.5)]"></div>
                <span className="text-[10px] text-outline font-bold uppercase tracking-widest">Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-sm font-black text-on-background">
          问诊中
        </div>

        <button className="text-slate-400 p-2 hover:bg-slate-100 rounded-full">
          <MoreVertical size={20} />
        </button>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto px-5 pt-20 pb-28 space-y-8 flex flex-col w-full max-w-3xl mx-auto">
        <div className="flex justify-center mt-2">
          <span className="bg-white/60 backdrop-blur-sm text-[10px] font-black text-outline-variant px-4 py-1 rounded-full shadow-sm border border-white uppercase tracking-widest">
            2026/05/02 10:30
          </span>
        </div>

        {messages.map((msg, i) => (
          <motion.div 
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex w-full ${msg.type === 'user' ? 'justify-end' : 'justify-start gap-3'}`}
          >
            {msg.type === 'doctor' && (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm shrink-0 self-end">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhGpv-BUJvrAc2PWkPpwJCm_eav51v2--2dPLB_G28JRS5Y1Au4SGZLbF-f-NE0eat3y-HQUSrooPQDZ_kBAdxU0q-VqLFeRdF8ETV6efOldU2r3X3LeRuADEm2obFFnXfUiY9SMVEHWbYPGIjXgtg1_acW46B1TMIZ9pan9sfi5vt2rzRSd2L5S7TWRayUZ4s-vH-x1rrXNbglnzN7JABpJE8N8VFlDLaTYlt9Li92w34jYIJpcBeY_pJnEIvCQQAYuTHPO_CkcpQ" 
                  alt="Dr. Li" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className={`flex flex-col gap-1 max-w-[75%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`rounded-3xl p-1 shadow-sm overflow-hidden relative ${
                msg.type === 'user' ? 'bg-primary rounded-tr-sm text-white' : 'bg-white rounded-tl-sm text-on-surface border border-white'
              }`}>
                {msg.content.type === 'image' ? (
                  <div className="relative group">
                    <img 
                      src={msg.content.url} 
                      alt={msg.content.label} 
                      className="rounded-2xl max-h-64 h-auto w-full object-cover border border-white/20"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">{msg.content.label}</span>
                      <Maximize size={14} className="text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-sm font-medium leading-relaxed">
                    {msg.content.text}
                  </div>
                )}
              </div>
              
              {msg.type === 'user' && msg.read && (
                <span className="text-[10px] font-bold text-outline pr-1 uppercase tracking-widest">Read</span>
              )}
            </div>
          </motion.div>
        ))}
      </main>

      {/* Input Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 p-4 pb-safe flex items-center justify-center z-50">
        <div className="w-full max-w-3xl flex items-center gap-3">
          <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 shadow-inner active:scale-95 transition-all">
            <Plus size={24} />
          </button>
          
          <div className="flex-1 relative group">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-12 bg-slate-50 rounded-full px-6 text-sm font-medium border-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-300" 
              placeholder="输入消息..." 
              type="text"
            />
            {/* Some apps have a search or specific action here */}
          </div>

          <button className="w-12 h-12 rounded-full bg-gradient-btn text-white flex items-center justify-center shadow-lg active:scale-95 transition-all relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Send size={18} fill="white" className="relative z-10 ml-1" />
          </button>
        </div>
      </footer>
    </div>
  );
}
