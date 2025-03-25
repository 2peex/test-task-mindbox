import React from "react";
import styles from "./TodoTabs.module.scss";
import { motion } from "framer-motion";
import { TEXTS, ANIMATION } from "../../constants";

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
      whileHover={ANIMATION.HOVER}
      whileTap={ANIMATION.TAP}
      transition={ANIMATION.KEYFRAMES}
      className={`${styles.tab} ${
        activeTab === tabValue ? styles.active : TEXTS.EMPTY_STROKE
      }`}
      onClick={() => setActiveTab(tabValue)}
    >
      {title}
    </motion.button>
  );
};

const TodoTabs: React.FC<TodoTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabs}>
      {Object.values(TEXTS.TABS).map((item) => (
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
