/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface User {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  isVip: boolean;
  avatar: string;
}

export interface ScalpReport {
  id: string;
  date: string;
  time: string;
  category: 'Normal' | 'Oily' | 'Folliculitis';
  title: string;
  tags: string[];
  status: 'Healthy' | 'Warning' | 'Needs Improvement';
  imageUrl: string;
}

export interface MedicationLog {
  id: string;
  date: string;
  time: string;
  dosage: string;
  completed: boolean;
  aiTip?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
  specialty: string;
  avatar: string;
  online: boolean;
  available: boolean;
}
