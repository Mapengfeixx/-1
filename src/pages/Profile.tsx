/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  Settings, 
  ShieldCheck, 
  FileText, 
  MessageSquare, 
  Users, 
  Bell, 
  Lock, 
  HelpCircle, 
  Info, 
  LogOut,
  ChevronLeft
} from 'lucide-react';
import Layout from '../components/Layout';

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: FileText, label: '健康档案', path: '/health-file' },
    { icon: FileText, label: '检测报告', path: '/reports' },
    { icon: MessageSquare, label: '问诊记录', path: '/chat' },
    { icon: Users, label: '家庭成员管理', path: '#' },
    { type: 'divider' },
    { icon: Bell, label: '消息通知', path: '#' },
    { icon: Lock, label: '隐私与安全', path: '#' },
    { icon: HelpCircle, label: '帮助中心', path: '#' },
    { icon: Info, label: '关于我们', path: '#' },
  ];

  return (
    <Layout title="我的">
      <div className="space-y-6">
        {/* Profile Card */}
        <section className="glass-card rounded-[32px] p-6 flex items-center gap-4 group cursor-pointer relative overflow-hidden" onClick={() => navigate('/health-file')}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugb6zaJjLqNIMo5-EJY7QbQxGHuJI38kUM0dBjFPseCyEtiJnp0cMejEGO0AtAjgpIUSdxyHZ3DMi34cJKAcuXkl-G-nbw6_vKMgy7ymqbeuRMZ24AEUr57GQ19ssP9f3iZMD_aN-ZY3CoZKt_6ewBJl_WtEFyc9ui2x2eZKoeoi9pgjs0YwzdEHifH0o-ZiYw14oeCl75XWPmRwLCJ4CxxnophNJ-e26RAtI-ZT5ltNWWiPfp5k1N9olq_n__36GHy_fgHRW_3XMw" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-black text-on-surface">张先生</h2>
              <div className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck size={12} fill="currentColor" />
                <span className="text-[10px] font-bold">已完善</span>
              </div>
            </div>
            <p className="text-sm font-bold text-outline uppercase tracking-wider">138****5678</p>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <ChevronRight size={20} />
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 gap-4">
          <div className="glass-card rounded-[32px] p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-outline-variant">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={18} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">头皮健康评分</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-primary">86</span>
                <span className="text-xs font-bold text-outline">分</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '86%' }}></div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-4 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-outline uppercase tracking-widest leading-none">连续护理</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-on-surface">12</span>
                <span className="text-xs font-bold text-outline">天</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="glass-card rounded-2xl p-4 flex flex-col items-center">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">检测</span>
                <span className="text-lg font-black text-on-surface">28次</span>
              </div>
              <div className="glass-card rounded-2xl p-4 flex flex-col items-center">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">用药</span>
                <span className="text-lg font-black text-on-surface">16次</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="glass-card rounded-[32px] overflow-hidden">
          {menuItems.map((item, i) => {
            if (item.type === 'divider') {
              return <div key={i} className="h-px bg-slate-100 w-full" />;
            }
            return (
              <button
                key={i}
                onClick={() => item.path !== '#' && navigate(item.path)}
                className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {item.icon && <item.icon size={20} />}
                  </div>
                  <span className="text-sm font-bold text-on-surface">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1" />
              </button>
            );
          })}
        </section>

        {/* Logout Button */}
        <button 
          onClick={() => navigate('/login')}
          className="w-full py-4 border-2 border-error/20 text-error rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-error/5 transition-all mb-8 shadow-sm"
        >
          <LogOut size={18} />
          退出登录
        </button>
      </div>
    </Layout>
  );
}
