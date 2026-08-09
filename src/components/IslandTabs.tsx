import { useState, type ReactNode } from 'react';

interface Tab {
  label: string;
  content: ReactNode;
}

export default function IslandTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  if (tabs.length === 1) {
    return <>{tabs[0].content}</>;
  }

  return (
    <>
      <div className="island-tabs">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            className={`island-tab-btn${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs[active].content}
    </>
  );
}
