/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Detect from './pages/Detect';
import AIAnalysis from './pages/AIAnalysis';
import Medication from './pages/Medication';
import Records from './pages/Records';
import RemoteDiagnosis from './pages/RemoteDiagnosis';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import DeviceManagement from './pages/DeviceManagement';
import HealthFile from './pages/HealthFile';
import Reports from './pages/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/ai-analysis" element={<AIAnalysis />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/records" element={<Records />} />
        <Route path="/remote-diagnosis" element={<RemoteDiagnosis />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/device" element={<DeviceManagement />} />
        <Route path="/health-file" element={<HealthFile />} />
        <Route path="/reports" element={<Reports />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
