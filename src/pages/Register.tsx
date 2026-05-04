/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Smartphone, Lock, Pin, EyeOff, CheckSquare, Square } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState('user');
  const [agreed, setAgreed] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-page flex flex-col px-5 pb-8">
      <header className="pt-16 mb-8 text-center">
        <h1 className="text-4xl font-black text-primary mb-2 tracking-tight">发安家</h1>
        <h2 className="text-2xl font-bold text-on-surface mb-1">创建账号</h2>
        <p className="text-on-surface-variant font-medium">开启智能头皮健康管理服务</p>
      </header>

      <div className="glass-card rounded-3xl p-6 mb-6 max-w-md mx-auto w-full">
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Identity Selection */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-outline mb-2">选择身份</label>
            <div className="flex bg-surface-container-low rounded-xl p-1 gap-1">
              {[
                { id: 'user', label: '普通用户' },
                { id: 'family', label: '家庭成员' },
                { id: 'doctor', label: '医生' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIdentity(item.id)}
                  className={`flex-1 py-3 text-center rounded-lg text-xs font-bold transition-all ${
                    identity === item.id 
                      ? 'bg-white shadow-sm text-primary' 
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Phone Number */}
          <div className="relative group">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-outline mb-2">手机号码</label>
            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary" size={18} />
              <input 
                className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium" 
                placeholder="请输入手机号码" 
                type="tel"
              />
            </div>
          </div>

          {/* Verification Code */}
          <div className="relative group">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-outline mb-2">验证码</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Pin className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary" size={18} />
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium" 
                  placeholder="请输入验证码" 
                  type="text"
                />
              </div>
              <button 
                type="button"
                className="px-6 bg-surface-container-low text-primary border border-primary/10 rounded-xl text-[12px] font-bold whitespace-nowrap hover:bg-surface-container-high transition-colors"
              >
                获取验证码
              </button>
            </div>
          </div>

          {/* Password */}
          <div className="relative group">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-outline mb-2">设置密码</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary" size={18} />
              <input 
                className="w-full pl-12 pr-12 py-4 bg-white border border-outline-variant/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium" 
                placeholder="至少8位字母或数字组合" 
                type="password"
              />
              <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-outline cursor-pointer hover:text-on-surface" size={18} />
            </div>
          </div>

          {/* Legal Checkbox */}
          <div className="flex items-start gap-2 pt-2">
            <button 
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`mt-0.5 transition-colors ${agreed ? 'text-primary' : 'text-outline-variant'}`}
            >
              {agreed ? <CheckSquare size={18} /> : <Square size={18} />}
            </button>
            <p className="text-[12px] font-medium text-on-surface-variant leading-relaxed">
              我已阅读并同意 <a href="#" className="text-primary font-bold">《用户协议》</a> 和 <a href="#" className="text-primary font-bold">《隐私政策》</a>
            </p>
          </div>

          {/* Action Button */}
          <button 
            disabled={!agreed}
            className={`w-full py-4 rounded-full font-bold text-lg shadow-lg transition-all active:scale-[0.98] mt-4 ${
              agreed ? 'bg-gradient-btn text-white' : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`} 
            type="submit"
          >
            注册并登录
          </button>
        </form>
      </div>

      <div className="text-center">
        <Link to="/login" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
          已有账号？去登录
        </Link>
      </div>
    </div>
  );
}
