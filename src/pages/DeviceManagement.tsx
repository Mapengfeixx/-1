/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Bluetooth, 
  BatteryLow, 
  Droplets, 
  CheckCircle2, 
  Wind, 
  Lightbulb, 
  SlidersHorizontal,
  RefreshCw,
  Waves,
  FlaskConical,
  ArrowUpCircle,
  Info
} from 'lucide-react';
import Layout from '../components/Layout';

export default function DeviceManagement() {
  return (
    <Layout title="发安家" subtitle="设备管理" showBack>
      <div className="space-y-8 pb-8">
        <div>
          <h2 className="text-3xl font-black text-on-surface">设备管理</h2>
          <p className="text-sm font-bold text-outline mt-1 uppercase tracking-widest">管理您的智能护发设备</p>
        </div>

        {/* Device Card */}
        <section className="glass-card rounded-[40px] p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-28 h-28 rounded-3xl overflow-hidden bg-white shadow-inner flex items-center justify-center p-2 shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhzqPygBt7sBRNh1d7H95MIfZ_dmaOwAsgPXPr0mVQGh1YbtmUanLv-tNX6L63w1Wk7Rg72FIlVZ-KHaDTBhQfphdzCCAi5z465xwOiALTL3czv9ionWy_U4o_FBG7wOfrolLWcX6BoqJqN3oJ4KAGBFj4WUgGwP_p7ao07LfQ--NjN_bqxvB9KswfFMGySKcDT_xu2Y75n-xFN1iTI0t_DRO2Vo1jh9eS67qjKk6-NUh812w_eF5Yem8BrlZ1-EIumICZpRKICHg" 
                alt="Smart ScalpCare S1" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-sm shadow-tertiary"></div>
                <span className="text-[10px] font-black tracking-widest text-tertiary uppercase">已连接</span>
              </div>
              <h3 className="text-2xl font-black text-on-surface mb-4 leading-tight">Smart ScalpCare S1</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <BatteryLow size={14} className="text-outline" />
                  <span className="text-xs font-black text-on-surface-variant font-mono">82%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplets size={14} className="text-primary" />
                  <span className="text-xs font-black text-on-surface-variant font-mono">90%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between h-32 hover:bg-white transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-white">
                <Bluetooth size={20} />
              </div>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">已连接</span>
            </div>
            <h4 className="text-sm font-black text-on-surface">蓝牙状态</h4>
          </div>

          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between h-32 hover:bg-white transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shadow-sm border border-white">
                <Lightbulb size={20} />
              </div>
              <span className="text-[10px] font-black text-secondary uppercase tracking-widest">自动</span>
            </div>
            <h4 className="text-sm font-black text-on-surface">光疗模式</h4>
          </div>

          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between h-32 hover:bg-white transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shadow-sm border border-white">
                <Wind size={20} />
              </div>
              <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">标准</span>
            </div>
            <h4 className="text-sm font-black text-on-surface">喷涂强度</h4>
          </div>

          <div className="glass-card rounded-2xl p-5 flex flex-col justify-between h-32 hover:bg-white transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary shadow-sm border border-white">
                <SlidersHorizontal size={20} />
              </div>
              <span className="text-[10px] font-black text-tertiary uppercase tracking-widest">正常</span>
            </div>
            <h4 className="text-sm font-black text-on-surface">药仓校准</h4>
          </div>
        </section>

        {/* Info Rows */}
        <section className="space-y-3">
          <div className="glass-card rounded-2xl p-5 flex justify-between items-center group cursor-pointer border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-white transition-all">
                <Waves size={18} />
              </div>
              <span className="text-sm font-bold text-on-surface">清洁提醒</span>
            </div>
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">7天后</span>
          </div>
          <div className="glass-card rounded-2xl p-5 flex justify-between items-center group cursor-pointer border-white/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-outline group-hover:bg-primary group-hover:text-white transition-all">
                <Info size={18} />
              </div>
              <span className="text-sm font-bold text-on-surface">固件版本</span>
            </div>
            <span className="text-xs font-black text-on-surface-variant uppercase tracking-widest">V1.2.0</span>
          </div>
        </section>

        {/* Major Actions */}
        <section className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-btn text-white py-5 rounded-[20px] font-black text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all">
            <RefreshCw size={18} />
            重新连接设备
          </button>
          <button className="bg-white border-2 border-primary/20 text-primary py-5 rounded-[20px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
            <Waves size={18} />
            喷头清洁
          </button>
          <button className="bg-white border-2 border-outline-variant/30 text-on-surface py-5 rounded-[20px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <FlaskConical size={18} />
            药仓校准
          </button>
          <button className="bg-white border-2 border-outline-variant/30 text-on-surface py-5 rounded-[20px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <ArrowUpCircle size={18} />
            固件升级
          </button>
        </section>

        {/* Tip */}
        <section className="bg-primary/5 rounded-2xl p-5 border border-primary/10 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <Info size={18} />
          </div>
          <p className="text-xs font-bold text-on-surface-variant leading-relaxed">
            建议每周清洁喷头一次，避免药液残留影响给药精度。
          </p>
        </section>
      </div>
    </Layout>
  );
}
