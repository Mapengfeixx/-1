/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Bluetooth, Droplets, CheckCircle2, FileText, Minus, Plus, Play, Info } from 'lucide-react';
import Layout from '../components/Layout';

export default function Medication() {
  const [dosage, setDosage] = useState(0.1);

  const adjustDosage = (amount: number) => {
    setDosage(prev => Math.max(0, Math.min(1, Number((prev + amount).toFixed(1)))));
  };

  return (
    <Layout title="发安家" subtitle="精准给药" showBack>
      <div className="space-y-6">
        {/* Status Section */}
        <div className="glass-card rounded-[32px] p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-sm shadow-tertiary"></div>
              <span className="text-xs font-bold text-tertiary uppercase tracking-wider">设备已连接</span>
            </div>
            <Bluetooth size={20} className="text-primary" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col items-start gap-1">
              <Droplets size={18} className="text-secondary opacity-80" />
              <span className="text-[10px] font-bold text-outline uppercase tracking-wider">药液余量</span>
              <span className="text-xl font-black text-on-surface">90%</span>
            </div>
            <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col items-start gap-1">
              <CheckCircle2 size={18} className="text-tertiary opacity-80" />
              <span className="text-[10px] font-bold text-outline uppercase tracking-wider">喷头状态</span>
              <span className="text-xl font-black text-on-surface">正常</span>
            </div>
          </div>
        </div>

        {/* Recommendation Card */}
        <div className="glass-card rounded-[32px] p-6">
          <h2 className="text-xs font-black text-primary mb-6 flex items-center gap-2 uppercase tracking-widest">
            <FileText size={16} />
            智能推荐方案
          </h2>
          
          <div className="space-y-4">
            {[
              { label: '推荐药液', value: '莫匹罗星软膏' },
              { label: '推荐剂量', value: '0.1 ml' },
              { label: '推荐时长', value: '10 秒' },
              { label: '使用频率', value: '每周 7-8次' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-surface-container-highest pb-3 last:border-0 last:pb-0">
                <span className="text-sm text-outline font-medium">{item.label}</span>
                <span className="text-sm font-bold text-on-surface">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dose Adjustment */}
        <div className="flex flex-col items-center justify-center py-8">
          <span className="text-xs font-bold text-outline uppercase tracking-widest mb-8">目标给药剂量 (ml)</span>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => adjustDosage(-0.1)}
              className="w-16 h-16 rounded-full bg-surface-container-highest text-primary flex items-center justify-center hover:bg-primary/10 active:scale-95 transition-all shadow-sm"
            >
              <Minus size={28} />
            </button>
            
            <div className="relative w-40 h-40 flex items-center justify-center">
              <span className="text-6xl font-black text-primary tabular-nums tracking-tighter">
                {dosage.toFixed(1)}
              </span>
              {/* Circular progress could be added here */}
            </div>

            <button 
              onClick={() => adjustDosage(0.1)}
              className="w-16 h-16 rounded-full bg-surface-container-highest text-primary flex items-center justify-center hover:bg-primary/10 active:scale-95 transition-all shadow-sm"
            >
              <Plus size={28} />
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-4">
          <button className="w-full h-16 rounded-[24px] bg-gradient-btn text-white font-black text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-[0.98] transition-all">
            <Play size={20} fill="currentColor" />
            开始精准给药
          </button>
          
          <div className="flex items-start gap-4 bg-primary/5 p-5 rounded-2xl border border-primary/10">
            <Info size={18} className="text-secondary shrink-0 mt-0.5" />
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
              请保持喷头贴近头皮，避免接触眼睛及破损皮肤。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
