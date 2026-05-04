/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Lightbulb, Maximize, Info, RefreshCcw, Image as ImageIcon } from 'lucide-react';
import Layout from '../components/Layout';

export default function Detect() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const triggerInput = () => {
    fileInputRef.current?.click();
  };

  const resetDetection = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <Layout title="发安家" subtitle="头皮检测" showBack>
      <div className="space-y-6">
        {/* Instruction Card */}
        <div className="glass-card rounded-3xl p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <Info size={24} />
          </div>
          <h2 className="text-lg font-bold text-on-surface mb-2">请将设备摄像头对准头皮区域</h2>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            保持光线充足，距离头皮约 2–3 cm，系统将自动采集图像。
          </p>
        </div>

        {/* Preview Area */}
        <div 
          onClick={triggerInput}
          className="relative w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-inner border-2 border-primary/20 cursor-pointer group"
        >
          {previewUrl ? (
            <img 
              src={previewUrl} 
              alt="Scan Preview" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
              <Camera size={64} className="text-outline mb-4" />
              <span className="text-xs font-bold text-outline">点击拍照或上传</span>
            </div>
          )}

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            capture="environment"
            className="hidden" 
          />
          
          {/* Focus Brackets */}
          <div className="absolute inset-10 border-2 border-white/30 rounded-2xl pointer-events-none">
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-8 border-l-8 border-tertiary-fixed rounded-tl-xl"></div>
            <div className="absolute -top-1 -right-1 w-10 h-10 border-t-8 border-r-8 border-tertiary-fixed rounded-tr-xl"></div>
            <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-8 border-l-8 border-tertiary-fixed rounded-bl-xl"></div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-8 border-r-8 border-tertiary-fixed rounded-br-xl"></div>
          </div>

          {/* Scan Line Animation */}
          {previewUrl && (
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-80 animate-[scan_3s_linear_infinite] z-20 shadow-[0_0_15px_rgba(0,64,224,0.5)]"></div>
          )}
          <style>{`
            @keyframes scan {
              0% { top: 0% }
              100% { top: 100% }
            }
          `}</style>
        </div>

        {/* Device info grid */}
        <div className="grid grid-cols-3 gap-2">
          <button 
            onClick={triggerInput}
            className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white active:scale-95 transition-all"
          >
            <Camera size={20} className={previewUrl ? "text-tertiary" : "text-primary"} />
            <span className="text-[10px] font-bold text-on-surface-variant text-center leading-tight">
              {previewUrl ? '图像已采集' : '摄像头：就绪'}
            </span>
          </button>
          <div className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2">
            <Lightbulb size={20} className="text-secondary" />
            <span className="text-[10px] font-bold text-on-surface-variant text-center leading-tight">补光灯：自动</span>
          </div>
          <div className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2">
            <Maximize size={20} className="text-tertiary" />
            <span className="text-[10px] font-bold text-on-surface-variant text-center leading-tight">高清预览</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <button 
            onClick={() => navigate('/ai-analysis', { state: { capturedImage: previewUrl } })}
            disabled={!previewUrl}
            className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all ${
              previewUrl 
                ? 'bg-gradient-btn text-white' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <Camera size={20} />
            开始AI分析
          </button>
          <button 
            onClick={resetDetection}
            className="w-full bg-white text-primary border border-primary/20 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
          >
            <RefreshCcw size={20} />
            {previewUrl ? '重新拍摄' : '重置状态'}
          </button>
        </div>

        <p className="text-center text-[10px] text-outline font-medium">
          检测结果仅供健康管理参考，异常情况请及时咨询医生。
        </p>
      </div>
    </Layout>
  );
}
