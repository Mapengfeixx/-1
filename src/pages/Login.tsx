/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Smartphone, Lock, EyeOff, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-container-low to-white flex flex-col px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-container/20 blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-tertiary-container/10 blur-[100px] pointer-events-none z-0"></div>

      <main className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto w-full pt-16">
        <header className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-black text-primary mb-2 tracking-tight">发安家</h1>
          <p className="text-on-surface-variant text-center px-4 font-medium">
            AI识别头皮状态，智能守护家庭头皮健康
          </p>
        </header>

        <div className="w-full flex justify-center mb-10 px-6">
          <div className="relative w-full aspect-square max-w-[240px] rounded-[32px] bg-white/40 backdrop-blur-md shadow-lg border border-white/60 p-4 flex items-center justify-center">
            <img 
              alt="Device" 
              className="w-full h-full rounded-[24px] object-contain" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhzqPygBt7sBRNh1d7H95MIfZ_dmaOwAsgPXPr0mVQGh1YbtmUanLv-tNX6L63w1Wk7Rg72FIlVZ-KHaDTBhQfphdzCCAi5z465xwOiALTL3czv9ionWy_U4o_FBG7wOfrolLWcX6BoqJqN3oJ4KAGBFj4WUgGwP_p7ao07LfQ--NjN_bqxvB9KswfFMGySKcDT_xu2Y75n-xFN1iTI0t_DRO2Vo1jh9eS67qjKk6-NUh812w_eF5Yem8BrlZ1-EIumICZpRKICHg"
            />
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full mb-8">
          <div className="relative group">
            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors z-10" size={20} />
            <input 
              className="w-full bg-white/70 backdrop-blur-xl border border-white shadow-sm rounded-xl py-4 pl-12 pr-4 text-on-background placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 h-[56px]" 
              placeholder="请输入手机号码" 
              type="tel"
            />
          </div>
          
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors z-10" size={20} />
            <input 
              className="w-full bg-white/70 backdrop-blur-xl border border-white shadow-sm rounded-xl py-4 pl-12 pr-12 text-on-background placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 h-[56px]" 
              placeholder="请输入密码" 
              type="password"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors" type="button">
              <EyeOff size={20} />
            </button>
          </div>

          <div className="flex justify-between items-center px-1 mt-1 mb-2">
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-all" type="button">验证码登录</button>
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-all" type="button">忘记密码？</button>
          </div>

          <button 
            className="w-full h-[56px] rounded-full bg-gradient-btn text-white font-bold text-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all relative overflow-hidden group" 
            type="submit"
          >
            <span className="relative z-10">登录</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <div className="text-center mt-2">
            <span className="text-sm text-outline font-medium">还没有账号？</span>
            <Link to="/register" className="text-sm text-primary hover:text-secondary transition-colors font-bold ml-1">
              立即注册
            </Link>
          </div>
        </form>

        <div className="flex flex-col items-center mt-auto pb-4">
          <div className="flex items-center w-full gap-4 mb-6 px-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-outline-variant/30"></div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-outline-variant">快捷登录</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-outline-variant/30"></div>
          </div>
          
          <button className="w-12 h-12 rounded-full bg-white shadow-md border border-white flex items-center justify-center text-[#07C160] hover:scale-105 active:scale-95 transition-all mb-8">
            <MessageCircle size={24} fill="currentColor" />
          </button>

          <p className="text-[10px] text-outline/60 text-center max-w-[240px] leading-relaxed font-medium">
            本系统提供头皮健康管理参考<br/>具体诊疗请以医生意见为准
          </p>
        </div>
      </main>
    </div>
  );
}
