import create from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  pollingInterval: number;
  jobsPerPage: number;
  confirmQueueActions: boolean;
  confirmJobActions: boolean;
  setSettings: (settings: Partial<Omit<SettingsState, 'setSettings'>>) => void;
  filter: string;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      pollingInterval: 5,
      jobsPerPage: 10,
      confirmJobActions: true,
      confirmQueueActions: true,
      setSettings: (settings) => set(() => settings),
      filter:''
    }),
    {
      name: 'board-settings',
    }
  )
);
