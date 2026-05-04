/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Droplets, AlertTriangle, CloudRain, Sparkles, Info, Pill, Download, ScanSearch } from 'lucide-react';
import Layout from '../components/Layout';

export default function AIAnalysis() {
  const navigate = useNavigate();
  const location = useLocation();
  const capturedImage = location.state?.capturedImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuALmKVBocUQwaF4PlH7rziOlpCXUuroF0Ee4_yBnom4aBIqUaxH2BK2j7DfSVNj8UDYd9WBDaXB7T1RcyucMuhw7Ej7J0jiAq-f3U12FICtM_Zg6SRbf6ayhM6FptatBfyiXmgW1qpGFGePezwFRTKxHD6CIKSHKeB_4no_uQSt0HXaE2oQojDUtTHKUMYHhInZFwaA_e1NRCyDfbNvcyyeqlgaebwNZmpTZNhndYcguqTiEI2PtXzL1rOEVmGc3xYwCBq2T2CIWY-j";

  return (
    <Layout title="发安家" subtitle="AI识别分析" showBack showMore>
      <div className="space-y-6 pb-8 text-on-surface">
        {/* Diagnostic Header */}
        <div className="flex items-center gap-4 py-2">
          <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error">
            <ScanSearch className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold flex items-center gap-2">
              头皮检测
              <span className="text-[10px] bg-error text-white px-2 py-0.5 rounded shadow-sm uppercase tracking-wider font-black">
                毛囊炎 疑似
              </span>
            </h1>
            <div className="flex items-center gap-3 text-[10px] text-outline font-black uppercase tracking-widest mt-1">
              <span>范围: 13.5mm</span>
              <span>•</span>
              <span>置信度: 92%</span>
            </div>
          </div>
        </div>

        {/* Main Image Section */}
        <section className="glass-card rounded-[32px] overflow-hidden relative group">
          <div className="aspect-square bg-slate-100 relative">
            <img 
              src={capturedImage} 
              alt="Scalp Analysis Result" 
              referrerPolicy="no-referrer"
              loading="eager"
              className="w-full h-full object-cover"
            />
            
            {/* Layer 1: Static "Detected" Box in Image - Simulated since native image is restricted */}
            <div className="absolute top-[34.5%] left-[51.5%] w-[22%] h-[22%] border-2 border-error/40 rounded-md bg-transparent">
            </div>

            {/* Layer 2: AI Dynamic Tracking Overlay - The "Ghosting" pulse */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
                x: [0, 1, -1, 0],
                y: [0, -1, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[35%] left-[52%] w-[22%] h-[22%] border-4 border-error rounded-md bg-error/20 backdrop-blur-[1px] shadow-[0_0_30px_rgba(239,68,68,0.8)] z-10"
            >
              <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 bg-error text-white text-[11px] font-black px-3 py-1.5 rounded-sm shadow-xl whitespace-nowrap">
                毛囊炎 92%
              </div>

              {/* Consultation Link at bottom-right of the box */}
              <div className="absolute bottom-[-10px] right-[-30px] bg-primary text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-1 cursor-pointer hover:bg-primary/90">
                咨询医生 〉
              </div>
              
              {/* Corner Accents - Extra bold */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-[3px] border-l-[3px] border-white"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-[3px] border-r-[3px] border-white"></div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="grid grid-cols-2 gap-3">
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary-container">
              <Droplets size={18} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">头皮油脂水平</span>
            </div>
            <div className="text-xl font-black text-orange-600">偏高</div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-error">
              <AlertTriangle size={18} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">AI识别结果</span>
            </div>
            <div className="text-xl font-black text-error">毛囊炎</div>
            <div className="text-[10px] font-bold text-error/60">累及范围: 13.5mm</div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-secondary">
              <CloudRain size={18} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">脱屑情况</span>
            </div>
            <div className="text-xl font-black text-orange-600">中度</div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-tertiary">
              <Sparkles size={18} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-outline">毛囊状态</span>
            </div>
            <div className="text-xl font-black text-orange-600">需关注</div>
          </div>
        </section>

        {/* Info Card */}
        <section className="glass-card rounded-2xl p-5 flex gap-3">
          <Info size={20} className="text-primary mt-1 shrink-0" />
          <p className="text-sm text-on-surface-variant leading-relaxed">
            系统基于头皮图像特征，对红斑、脱屑、油脂和毛囊状态进行辅助分析。
          </p>
        </section>

        {/* Actions */}
        <section className="flex flex-col gap-3 pt-4">
          <button 
            onClick={() => navigate('/medication')}
            className="w-full bg-gradient-btn text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <Pill size={18} />
            生成用药建议
          </button>
          <button className="w-full bg-white text-primary border border-primary/20 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Download size={18} />
            保存检测报告
          </button>
        </section>

        <p className="text-center text-[10px] text-outline font-medium px-4 leading-relaxed">
          AI结果不能替代医生诊断，若症状持续，请进行远程问诊或线下就医。
        </p>
      </div>
    </Layout>
  );
}
