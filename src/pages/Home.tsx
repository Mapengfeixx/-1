/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Bluetooth, 
  BatteryLow, 
  Droplets, 
  CheckCircle2, 
  ScanSearch, 
  BrainCircuit, 
  Stethoscope, 
  History, 
  Smartphone, 
  ArrowRight, 
  Info
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  { icon: ScanSearch, label: '头皮检测', color: 'bg-primary/10 text-primary', path: '/detect' },
  { icon: BrainCircuit, label: 'AI识别分析', color: 'bg-secondary/10 text-secondary', path: '/ai-analysis' },
  { icon: Droplets, label: '精准给药', color: 'bg-tertiary/10 text-tertiary', path: '/medication' },
  { icon: History, label: '用药记录', color: 'bg-blue-100 text-blue-600', path: '/records' },
  { icon: Stethoscope, label: '远程诊断', color: 'bg-purple-100 text-purple-600', path: '/remote-diagnosis' },
  { icon: Smartphone, label: '设备管理', color: 'bg-slate-100 text-slate-600', path: '/device' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout title="发安家">
      <div className="space-y-section-margin">
        {/* Welcome Section */}
        <header className="py-2">
          <h1 className="text-3xl font-black text-on-surface">上午好，张先生</h1>
          <p className="text-on-surface-variant font-medium mt-1">科学护理头皮，精准健康管理</p>
        </header>

        {/* Device Status Card */}
        <section className="glass-card rounded-[32px] p-6 relative overflow-hidden">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-48 aspect-square rounded-[32px] overflow-hidden bg-slate-50 border border-white/50 p-4">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhzqPygBt7sBRNh1d7H95MIfZ_dmaOwAsgPXPr0mVQGh1YbtmUanLv-tNX6L63w1Wk7Rg72FIlVZ-KHaDTBhQfphdzCCAi5z465xwOiALTL3czv9ionWy_U4o_FBG7wOfrolLWcX6BoqJqN3oJ4KAGBFj4WUgGwP_p7ao07LfQ--NjN_bqxvB9KswfFMGySKcDT_xu2Y75n-xFN1iTI0t_DRO2Vo1jh9eS67qjKk6-NUh812w_eF5Yem8BrlZ1-EIumICZpRKICHg" 
                alt="Device" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/50 rounded-2xl p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <Bluetooth size={16} className="text-primary" />
                <span className="text-[10px] uppercase tracking-wider text-outline">连接状态</span>
              </div>
              <span className="font-bold text-on-surface">设备已连接</span>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <BatteryLow size={16} className="text-tertiary" />
                <span className="text-[10px] uppercase tracking-wider text-outline">电量剩余</span>
              </div>
              <span className="font-bold text-on-surface">82%</span>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <Droplets size={16} className="text-secondary" />
                <span className="text-[10px] uppercase tracking-wider text-outline">药液余量</span>
              </div>
              <span className="font-bold text-on-surface">90%</span>
            </div>
            <div className="bg-white/50 rounded-2xl p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={16} className="text-error" />
                <span className="text-[10px] uppercase tracking-wider text-outline">头皮状态</span>
              </div>
              <span className="font-bold text-error">毛囊炎 疑似</span>
              <span className="text-[10px] font-mono font-bold text-outline-variant mt-1">检测值: 13.5mm</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-3 gap-3">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => navigate(service.path)}
              className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-transform active:scale-95"
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center`}>
                <service.icon size={24} />
              </div>
              <span className="text-[11px] font-bold text-on-surface-variant text-center leading-tight">
                {service.label}
              </span>
            </button>
          ))}
        </section>

        {/* Trend Card */}
        <section className="glass-card rounded-[32px] p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-on-surface">头皮护理趋势</h2>
            <button className="text-primary text-[12px] font-bold flex items-center gap-1">
              查看详情 <ArrowRight size={14} />
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* SVG Progress Circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 transform overflow-visible" viewBox="0 0 128 128">
                {/* Background Track */}
                <circle 
                  cx="64" cy="64" r="58" 
                  className="stroke-primary/10 fill-none" 
                  strokeWidth="10" 
                />
                {/* Progress Path */}
                <motion.circle 
                  cx="64" cy="64" r="58" 
                  className="stroke-primary fill-none transition-all duration-1000 ease-out" 
                  strokeWidth="10" 
                  strokeDasharray="364.4" 
                  initial={{ strokeDashoffset: 364.4 }}
                  animate={{ strokeDashoffset: 364.4 * (1 - 0.86) }}
                  strokeLinecap="round"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(0, 64, 224, 0.3))"
                  }}
                />
              </svg>
              
              <div className="text-center z-10 relative">
                <span className="text-4xl font-black text-primary leading-none">86</span>
                <span className="text-[10px] text-outline font-black block mt-1 uppercase tracking-widest">分</span>
              </div>
              
              {/* Inner Subtitle/Glow */}
              <div className="absolute inset-4 rounded-full bg-primary/5 blur-md -z-10"></div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <History size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-outline">最近一次用药</div>
                  <div className="text-xs font-bold font-mono">2026/05/02 08:30</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-outline">本周用药次数</div>
                  <div className="text-xs font-bold uppercase">3次</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                  <Droplets size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-outline">本周用药总量</div>
                  <div className="text-xs font-bold uppercase tracking-wide">2.7 ml</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tip Section */}
        <section className="bg-primary/5 rounded-2xl p-5 border border-primary/10 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Info size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-on-surface mb-1">护理建议</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              检测到疑似毛囊炎区域（13.5mm），建议及时咨询医生，并按照医疗建议进行针对性护理。
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
