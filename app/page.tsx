'use client';

import { useEffect, useState } from 'react';
import { config } from '@/config';
import Clock from '@/components/Clock'
import SimpleStats from '@/components/SimpleStats'
import SimpleBookmarks from '@/components/SimpleBookmarks'

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!config.loader.enabled) {
      setIsReady(true);
      return;
    }

    // Wait for performance data to be ready
    const checkReady = () => {
      if (typeof window !== 'undefined' && window.performance) {
        const perfData = performance.timing;
        if (perfData.loadEventEnd > 0) {
          setTimeout(() => setIsReady(true), 100);
        } else {
          setTimeout(checkReady, 50);
        }
      } else {
        setTimeout(() => setIsReady(true), 500);
      }
    };

    checkReady();
  }, []);

  if (!isReady) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="spinner"></div>
          <p>{config.loader.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Clock />
      <div className="stats-section">
        <SimpleStats />
      </div>
      <SimpleBookmarks />
    </div>
  )
}
