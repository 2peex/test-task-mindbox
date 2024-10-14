import React from 'react';
import styles from './TodoTabs.module.css'

interface TodoTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TodoTabs: React.FC<TodoTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
        onClick={() => setActiveTab('all')}
      >
        All
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`}
        onClick={() => setActiveTab('active')}
      >
        Active
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`}
        onClick={() => setActiveTab('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoTabs;