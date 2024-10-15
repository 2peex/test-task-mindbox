import React from "react";
import styles from "./TodoTabs.module.css";
import {motion} from 'framer-motion'

interface TodoTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsButton: React.FC<TodoTabsProps & { title: string }> = ({
  activeTab,
  setActiveTab,
  title,
}) => {
  const tabValue = title.toLowerCase();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`${styles.tab} ${activeTab === tabValue ? styles.active : ""}`}
      onClick={() => {
        setActiveTab(tabValue);
      }}
    >
      {title}
    </motion.button>
  );
};

const TabTitle = ["All", "Active", "Completed"];

const TodoTabs: React.FC<TodoTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabs}>
      {TabTitle.map((item) => (
        <TabsButton
          key={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title={item}
        />
      ))}
    </div>
  );
};

export default TodoTabs;
