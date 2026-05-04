/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  SignalHigh, 
  BatteryLow, 
  ChevronLeft, 
  MoreHorizontal,
  Home,
  LineChart,
  ClipboardList,
  User as UserIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  showMore?: boolean;
  hideNav?: boolean;
}

export default function Layout({ 
  children, 
  title = "发安家", 
  subtitle, 
  showBack = false, 
  showMore = false,
  hideNav = false 
}: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: '首页', path: '/home' },
    { icon: LineChart, label: '检测', path: '/detect' },
    { icon: ClipboardList, label: '记录', path: '/records' }, // Using ClipboardList for '档案' if '记录' is also here
    { icon: UserIcon, label: '我的', path: '/profile' },
  ];

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen bg-gradient-page flex flex-col">
      {/* Top App Bar */}
      {!isAuthPage && (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm safe-top">
          <div className="flex justify-between items-center px-6 h-16 w-full max-w-lg mx-auto">
            {showBack ? (
              <button 
                onClick={() => navigate(-1)}
                className="text-primary hover:bg-slate-100/50 rounded-full p-2 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            ) : (
              <div className="text-primary p-2">
                <SignalHigh size={24} />
              </div>
            )}

            <div className="flex flex-col items-center">
              <span className="text-xl font-black text-slate-900 tracking-widest leading-none">
                {title}
              </span>
              {subtitle && (
                <span className="text-[10px] font-bold tracking-tight text-primary mt-1">
                  {subtitle}
                </span>
              )}
            </div>

            {showMore ? (
              <button className="text-slate-400 hover:bg-slate-100/50 rounded-full p-2 transition-all">
                <MoreHorizontal size={24} />
              </button>
            ) : (
              <div className="text-primary p-2">
                <BatteryLow size={24} />
              </div>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`flex-1 w-full max-w-lg mx-auto ${!isAuthPage ? 'pt-16 pb-24' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full px-5 py-6"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      {!hideNav && !isAuthPage && (
        <nav className="fixed bottom-0 w-full z-50 bg-white/95 backdrop-blur-2xl border-t border-white/30 rounded-t-[32px] shadow-lg pb-safe">
          <div className="max-w-lg mx-auto flex justify-around items-center h-20 px-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-primary/5' 
                      : 'text-slate-400 hover:text-primary transition-colors'
                  }`}
                >
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
