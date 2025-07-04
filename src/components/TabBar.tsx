'use client'

import { setCookie } from 'cookies-next';
import React, { useState } from 'react'



interface TabBarProps {
  currentTab?: number;
  tabOptions?: number[]
}
export const TabBar = ({currentTab = 1,tabOptions = [1,2,3,4]}: TabBarProps) => {
    const [selectedTab, setSelectedTab] = useState(currentTab)

    const onTabSelected = (tab :number) =>{
        setSelectedTab(tab)
        setCookie('selectedTab', tab.toString())
    }
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))] space-x-2 rounded-xl bg-gray-200 p-2">
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            type="radio"
            checked={selectedTab === tab}
            id="1"
            className="peer hidden"
            onChange={() => onTabSelected(tab)}
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="transition-all duration-200 ease-in-out block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};