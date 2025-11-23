import React from 'react';
import { NAV_ITEMS } from '../constants';

interface SideMenuProps {
  categoryLabel: string; // e.g., "RESIDENTIAL DOORS"
  activeLabel: string; // e.g., "Buying A Garage Door"
}

const SideMenu: React.FC<SideMenuProps> = ({ categoryLabel, activeLabel }) => {
  const sidebarItems = NAV_ITEMS.find(item => item.label === categoryLabel)?.subItems || [];

  return (
    <div className="w-full md:w-1/4 shrink-0 hidden md:block">
      <div className="border-r border-gray-100 pr-6 h-full">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className={`block py-2 px-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                  item.label === activeLabel 
                    ? "text-[#ED1C24] border-l-2 border-l-[#ED1C24] bg-gray-50" 
                    : "text-gray-600 hover:text-[#ED1C24]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
