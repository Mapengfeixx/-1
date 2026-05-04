/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, AlertTriangle, CheckCircle2, ChevronRight, RefreshCw, BarChart2 } from 'lucide-react';
import Layout from '../components/Layout';

export default function Reports() {
  const navigate = useNavigate();

  const reports = [
    {
      id: '1',
      title: '轻度毛囊炎',
      date: '2026/05/02 08:30',
      status: '需关注',
      statusColor: 'text-error bg-error/10',
      accentColor: 'bg-error',
      tags: ['头皮出油', '毛孔堵塞'],
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uiBfx2BS8rkhJSzqV4NJRhKYafs7jlUf6De-AJcomn8k2TMoIIcNAczomKx1ydHOg-O9fs3K5CKBqy0meivmbJXYscFCrIvTeXJOv4VogpwIDIb5-XQAYqP6QfRSCHygJldF49SACTOVS6W1Hp_3OobEGrCWpjLEjDY-eP6Lgy6TJI6kJkoDLG0lJL3jEEiX32IBPe8HvPN7kUNXA4IFdXUGolMdTeiheLkEQhx8DEAczuGpNRkpbg7JwOYd3j50ccdO2iIcmzHhEY'
    },
    {
      id: '2',
      title: '正常',
      date: '2026/04/22 14:15',
      status: '健康',
      statusColor: 'text-tertiary bg-tertiary/10',
      accentColor: 'bg-tertiary',
      tags: ['水分充足', '毛囊健康'],
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uggn82Y-oeda4QY_fDiuQ38KXKYnHWJsOEXMmoa4uWqgavNi9B2i2kfTWPRcOgSl8JNU9--Ov5IBKtWu1AOF2OdSnQklCvWWpGnlYnhBJVkCXcrKLokfpFbByQ1NI6gDxuEapu1cdX6nlLGltaSMD1eXV0_pJhm9zqMJU8geP_MoUghLH4uDxoyEQbxMipt_goNLeAgZTSk6DCanaLFuWSc2loszVXRUz_453o-pQQ2Jvzo-J6srTTETEdRv6x-aWsuejcN24wutfU'
    },
    {
      id: '3',
      title: '油性头皮',
      date: '2026/03/10 09:45',
      status: '需改善',
      statusColor: 'text-secondary bg-secondary/10',
      accentColor: 'bg-secondary',
      tags: ['油脂分泌旺盛'],
      imageUrl: 'https://lh3.googleusercontent.com/aida/ADBb0uhatr8EM_jZMSySEFVKE5PuBeprpWTkWaAdNiB4WD5E-ZOPV_N_wec6lZj0V71Q7iz0MqlhkHpeR6yxcRs8ZkxTRR6kDGG4ERj1iIYupE1Ald6Q3bBIXbBgsP_Nfb4wNtE8cYDzrzXBkht9TZZWGUA3qSi1VH6jixlFXovp6YLs9R8UCJPGEFyggAbq2sfJp0DBCuSGAiKizZHHjGO5nHtwH51-Q2buGPWBleHAWpYUo36VZwIbSgP7SLK8FuLQ_hfEznpEPqdoPXc'
    }
  ];

  return (
    <Layout title="发安家" subtitle="检测报告" showBack showMore>
      <div className="space-y-section-margin pb-8">
        {/* Search & Filter */}
        <section className="space-y-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors" size={20} />
            <input 
              className="w-full glass-card rounded-2xl py-4 pl-12 pr-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline-variant font-medium shadow-inner" 
              placeholder="搜索报告日期或结果..." 
              type="text"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
            <button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-primary text-white font-bold text-xs shadow-md shadow-primary/20">全部</button>
            <button className="whitespace-nowrap px-6 py-2.5 rounded-full glass-card text-on-surface-variant font-bold text-xs hover:bg-white transition-colors">异常报告</button>
            <button className="whitespace-nowrap px-6 py-2.5 rounded-full glass-card text-on-surface-variant font-bold text-xs hover:bg-white transition-colors">最近一月</button>
            <button className="whitespace-nowrap px-6 py-2.5 rounded-full glass-card text-on-surface-variant font-bold text-xs hover:bg-white transition-colors">毛囊炎</button>
          </div>
        </section>

        {/* Reports List */}
        <section className="space-y-4">
          {reports.map((report) => (
            <article 
              key={report.id}
              onClick={() => navigate('/ai-analysis')}
              className="glass-card rounded-[32px] p-5 relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all active:scale-[0.99]"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${report.accentColor}`}></div>
              
              <div className="flex gap-5">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-100 shadow-inner">
                  <img src={report.imageUrl} alt={report.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-black text-on-surface">{report.title}</h3>
                      <p className="text-[10px] font-bold text-outline uppercase tracking-widest mt-1 font-mono">{report.date}</p>
                    </div>
                    <div className={`${report.statusColor} px-3 py-1 rounded-full flex items-center gap-1`}>
                      {report.statusColor.includes('error') ? <AlertTriangle size={12} /> : <CheckCircle2 size={12} />}
                      <span className="text-[10px] font-black uppercase tracking-widest leading-none">{report.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {report.tags.map((tag, i) => (
                        <span key={i} className="bg-slate-50 text-slate-500 px-2 py-1 rounded-md text-[10px] font-bold border border-slate-100 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ChevronRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Load More */}
        <div className="flex justify-center pt-4">
          <button className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:opacity-80 transition-all p-4 group">
            <RefreshCw size={18} className="group-active:rotate-180 transition-transform" />
            加载更多历史报告
          </button>
        </div>
      </div>
    </Layout>
  );
}
