/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  UserCircle, 
  RefreshCcw, 
  Calendar, 
  ShieldCheck, 
  Plus, 
  Bug, 
  Pill, 
  Moon, 
  Brain,
  Home,
  LineChart,
  ClipboardList,
  User as UserIcon
} from 'lucide-react';
import Layout from '../components/Layout';

export default function HealthFile() {
  return (
    <Layout title="发安家" subtitle="健康档案" showBack>
      <div className="space-y-section-margin">
        {/* Profile Summary Card */}
        <section className="glass-card rounded-[32px] p-6 mt-4 flex items-center gap-5 relative overflow-hidden border-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugb6zaJjLqNIMo5-EJY7QbQxGHuJI38kUM0dBjFPseCyEtiJnp0cMejEGO0AtAjgpIUSdxyHZ3DMi34cJKAcuXkl-G-nbw6_vKMgy7ymqbeuRMZ24AEUr57GQ19ssP9f3iZMD_aN-ZY3CoZKt_6ewBJl_WtEFyc9ui2x2eZKoeoi9pgjs0YwzdEHifH0o-ZiYw14oeCl75XWPmRwLCJ4CxxnophNJ-e26RAtI-ZT5ltNWWiPfp5k1N9olq_n__36GHy_fgHRW_3XMw" 
                alt="赵先生" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-tertiary-fixed w-7 h-7 rounded-full border-4 border-white flex items-center justify-center text-on-tertiary-fixed shadow-sm">
              <ShieldCheck size={14} fill="currentColor" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black text-on-surface mb-2">赵先生</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/5 text-primary px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                男
              </span>
              <span className="bg-slate-50 text-on-surface-variant px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 border border-slate-100">
                35岁
              </span>
              <span className="bg-gradient-btn text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-sm">
                VIP
              </span>
            </div>
          </div>
        </section>

        {/* Medical History Section */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-2xl font-black text-on-surface">过往病史</h3>
            <button className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shadow-sm hover:scale-105 active:scale-95 transition-all">
              <Plus size={24} />
            </button>
          </div>
          <div className="glass-card rounded-[32px] p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error shrink-0 shadow-inner">
                <Bug size={24} />
              </div>
              <div className="flex-1 pb-4 border-b border-slate-100">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-black text-on-surface">脂溢性皮炎</h4>
                  <span className="text-[10px] font-black text-outline uppercase tracking-widest">2022.05</span>
                </div>
                <p className="text-sm font-medium text-on-surface-variant leading-relaxed">
                  曾有轻度脱屑和瘙痒症状，经治疗已缓解。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 shadow-inner">
                <Pill size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-black text-on-surface">过敏史</h4>
                  <span className="text-[10px] font-black text-outline uppercase tracking-widest">长期</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-slate-50 text-on-surface font-bold text-[11px] rounded-lg border border-slate-100 uppercase tracking-wide">
                    对强碱性洗发水过敏
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}
        <section className="pb-8">
          <h3 className="text-2xl font-black text-on-surface mb-4">生活方式</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-[32px] p-6 relative overflow-hidden group hover:shadow-lg transition-all border-white">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Moon size={64} className="text-secondary" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 shadow-inner">
                <Moon size={24} fill="currentColor" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-outline-variant mb-1">睡眠质量</h4>
              <p className="text-xl font-black text-on-surface">良好</p>
              <p className="text-[11px] font-bold text-outline mt-2 tracking-wide uppercase">平均 7.5 小时</p>
            </div>
            
            <div className="glass-card rounded-[32px] p-6 relative overflow-hidden group hover:shadow-lg transition-all border-white">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Brain size={64} className="text-orange-500" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4 shadow-inner">
                <Brain size={24} fill="currentColor" />
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-outline-variant mb-1">压力水平</h4>
              <p className="text-xl font-black text-on-surface">中等</p>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3 overflow-hidden">
                <div className="bg-orange-400 h-full rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
