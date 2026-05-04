/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Droplets, Clock, ChevronRight, FileEdit, Download, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

export default function Records() {
  const navigate = useNavigate();

  const historyEntries = [
    {
      id: '1',
      date: '2026/05/02 08:30',
      dosage: '0.1 ml',
      status: '已完成',
      aiTip: '继续规律护理',
      tipIcon: Sparkles,
      tipColor: 'text-primary'
    },
    {
      id: '2',
      date: '2026/04/30 21:10',
      dosage: '0.8 ml',
      status: '已完成',
      aiTip: '注意减少抓挠',
      tipIcon: AlertCircle,
      tipColor: 'text-secondary'
    }
  ];

  return (
    <Layout title="发安家" subtitle="用药记录" showBack>
      <div className="space-y-section-margin">
        {/* Weekly Stats Section */}
        <section className="glass-card rounded-[32px] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-on-surface opacity-60">本周统计 (5/2 - 5/9)</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-primary/5 rounded-3xl p-5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/5">
                <Calendar size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">用药次数</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-primary">3</span>
                  <span className="text-xs font-bold text-outline">次</span>
                </div>
              </div>
            </div>

            <div className="bg-tertiary/5 rounded-3xl p-5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-tertiary shadow-sm border border-tertiary/5">
                <Droplets size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">用药总量</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-tertiary">2.7</span>
                  <span className="text-xs font-bold text-outline">ml</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-secondary shadow-sm">
                <Clock size={18} />
              </div>
              <span className="text-xs font-bold text-on-surface-variant">平均单次用量</span>
            </div>
            <span className="text-sm font-black text-secondary">0.1 ml</span>
          </div>
        </section>

        {/* List Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-on-surface px-1">护理明细</h2>
          
          {historyEntries.map((entry) => (
            <div key={entry.id} className="glass-card rounded-[32px] p-6 relative overflow-hidden group hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">时间</div>
                  <div className="text-lg font-black text-on-surface font-mono">{entry.date}</div>
                </div>
                <div className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider">{entry.status}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">使用剂量</div>
                <div className="text-xl font-black text-on-surface">{entry.dosage}</div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-4 flex items-center gap-3 border border-primary/10">
                <entry.tipIcon size={16} className={entry.tipColor} />
                <span className={`text-xs font-bold ${entry.tipColor}`}>AI 建议：{entry.aiTip}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Footer Actions */}
        <section className="grid grid-cols-2 gap-4 pt-4 pb-8">
          <button className="flex items-center justify-center gap-2 py-4 border-2 border-primary/20 text-primary rounded-2xl font-bold hover:bg-primary/5 transition-all shadow-sm">
            <FileEdit size={18} />
            添加备注
          </button>
          <button className="flex items-center justify-center gap-2 py-4 bg-gradient-btn text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all">
            <Download size={18} />
            导出护理报告
          </button>
        </section>
      </div>
    </Layout>
  );
}
