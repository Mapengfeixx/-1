/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, 
  UploadCloud, 
  Camera, 
  MessageCircle, 
  History, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import Layout from '../components/Layout';

const doctors = [
  {
    id: '1',
    name: '李医生',
    title: '主任医师',
    department: '皮肤科',
    specialty: '擅长: 脂溢性皮炎 / 脱发 / 头皮炎症等临床治疗与管理。',
    avatar: 'https://lh3.googleusercontent.com/aida/ADBb0uhGpv-BUJvrAc2PWkPpwJCm_eav51v2--2dPLB_G28JRS5Y1Au4SGZLbF-f-NE0eat3y-HQUSrooPQDZ_kBAdxU0q-VqLFeRdF8ETV6efOldU2r3X3LeRuADEm2obFFnXfUiY9SMVEHWbYPGIjXgtg1_acW46B1TMIZ9pan9sfi5vt2rzRSd2L5S7TWRayUZ4s-vH-x1rrXNbglnzN7JABpJE8N8VFlDLaTYlt9Li92w34jYIJpcBeY_pJnEIvCQQAYuTHPO_CkcpQ',
    online: true,
    available: true
  },
  {
    id: '2',
    name: '王医生',
    title: '副主任医师',
    department: '皮肤科',
    specialty: '擅长: 头皮敏感 / 毛囊管理 / 日常头皮健康维护方案制定。',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhNcVaACZ5aftDrr94CnDsEkJAbGiINQBS8Mis9mSuxQY--697nJbaWz-UG3b84gykvGjrmxGCWGaOhIoUVvDqvYo8B5Xpj8SvPnuqc5xrCIgSTzfeHEniuIcQCvKqISq4tAwg2gOZAs52mVcLDba6XZQXVhvtEIEEffaRCKrF62pZfc1mBTapu3sWs4GoMC8YnPCOXdvNlTqQlWLqeG_cmClsz5Oos-HfFYN5FmofRfeBtlm34yODfN7TynaMPVsYQUMuoNGDg8Bx',
    online: false,
    available: true
  }
];

export default function RemoteDiagnosis() {
  const navigate = useNavigate();

  return (
    <Layout title="发安家" subtitle="远程诊断" showBack>
      <div className="space-y-section-margin">
        {/* Banner Section */}
        <header className="py-2">
          <h2 className="text-3xl font-black text-on-background">远程诊断</h2>
        </header>

        {/* Feature Promo Card */}
        <section className="glass-card rounded-[32px] p-6 relative overflow-hidden group border-primary/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-sm border border-white">
              <Stethoscope size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-on-surface mb-1">在线咨询医生</h3>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                上传检测报告与头皮图像，医生可远程查看并给出护理建议。
              </p>
            </div>
          </div>
        </section>

        {/* Upload Action Grid */}
        <section className="grid grid-cols-2 gap-4">
          <button className="glass-card rounded-[32px] p-6 flex flex-col items-center justify-center gap-4 aspect-square hover:bg-white transition-all active:scale-95 group border-white/50">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shadow-inner">
              <UploadCloud size={32} />
            </div>
            <span className="text-sm font-black text-on-surface text-center leading-tight">
              上传本次AI<br/>检测报告
            </span>
          </button>
          <button className="glass-card rounded-[32px] p-6 flex flex-col items-center justify-center gap-4 aspect-square hover:bg-white transition-all active:scale-95 group border-white/50">
            <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform shadow-inner">
              <Camera size={32} />
            </div>
            <span className="text-sm font-black text-on-surface text-center leading-tight">
              上传头皮图像
            </span>
          </button>
        </section>

        {/* Doctor Recommendation List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-[10px] font-black text-outline uppercase tracking-widest leading-none">推荐专家</h3>
            <button className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
              查看全部 <ChevronRight size={12} />
            </button>
          </div>

          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="glass-card rounded-[32px] p-6 flex flex-col gap-5 border-white">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 shrink-0">
                    <img 
                      src={doctor.avatar} 
                      alt={doctor.name} 
                      className="w-full h-full rounded-3xl object-cover border-2 border-white shadow-md"
                    />
                    {doctor.online && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary-fixed border-4 border-white rounded-full animate-pulse shadow-sm"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-black text-on-surface">{doctor.name}</h4>
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold">
                            {doctor.title}
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-outline mt-0.5">{doctor.department}</p>
                      </div>
                      <div className={`flex items-center gap-1 text-[10px] font-bold ${doctor.online ? 'text-tertiary' : 'text-outline'}`}>
                        {doctor.online ? '在线' : '离线'}
                      </div>
                    </div>
                    <p className="text-[11px] font-medium text-on-surface-variant line-clamp-2 leading-relaxed">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate('/chat')}
                  className={`w-full py-4 rounded-2xl font-black text-sm shadow-md transition-all active:scale-[0.98] ${
                    doctor.online 
                      ? 'bg-gradient-btn text-white' 
                      : 'bg-white border border-primary/20 text-primary hover:bg-primary/5'
                  }`}
                >
                  {doctor.online ? '立即咨询' : '预约问诊'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* History Link */}
        <section className="flex justify-center pb-8">
          <button className="flex items-center gap-2 text-primary font-black text-xs hover:underline p-3 group">
            <History size={16} className="group-hover:rotate-[-20deg] transition-transform" />
            历史问诊记录
          </button>
        </section>

        {/* Professional Disclaimer */}
        <footer className="text-center pb-8 border-t border-slate-100 pt-8">
          <p className="text-[10px] text-outline font-medium px-8 leading-relaxed max-w-[300px] mx-auto italic">
            远程诊断建议仅供参考，必要时请前往正规医疗机构就诊。
          </p>
        </footer>
      </div>
    </Layout>
  );
}
