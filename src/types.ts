/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  title: string;
  description: string;
  category: 'core' | 'soft' | 'tool';
}

export interface Tool {
  name: string;
  iconName: string;
  colorClass: string;
  bgClass: string;
}

export interface WorkExample {
  title: string;
  badge: string;
  description: string;
  beforeData: DataRow[];
  afterData: DataRow[];
}

export interface DataRow {
  id: number;
  studentName: string;
  className: string;
  mathGrade: string;
  physicsGrade: string;
  averageGrade?: string;
  status?: string;
  isDuplicate?: boolean;
}

export interface ExperienceItem {
  role: string;
  institution: string;
  location: string;
  period: string;
  tasks: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
}
