'use client';

import { useEffect, useState } from 'react';
import { config } from '@/config';

export default function SimpleStats() {
  const [stats, setStats] = useState({
    // Session stats
    timeOnPage: '0s',
    clicks: 0,
    keyPresses: 0,
    
    // Display stats
    resolution: '0 x 0',
    viewport: '0 x 0',
    pixelRatio: '0',
    colorDepth: '0',
    
    // Performance stats
    loadTime: '0 ms',
    domReady: '0 ms',
    
    // System stats
    platform: 'unknown',
    browser: 'unknown',
    cores: '0',
    memory: '0',
  });

  useEffect(() => {
    let startTime = Date.now();
    let clicks = 0;
    let keyPresses = 0;

    // Update session stats
    const updateSession = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const mins = Math.floor(elapsed / 60);
      const secs = elapsed % 60;
      setStats(prev => ({
        ...prev,
        timeOnPage: mins > 0 ? `${mins}m ${secs}s` : `${secs}s`,
        clicks,
        keyPresses,
      }));
    };

    const clickHandler = () => {
      clicks++;
      updateSession();
    };

    const keyHandler = () => {
      keyPresses++;
      updateSession();
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyHandler);

    const sessionInterval = setInterval(updateSession, 1000);

    // Get display stats
    const updateDisplay = () => {
      setStats(prev => ({
        ...prev,
        resolution: `${screen.width} x ${screen.height}`,
        viewport: `${window.innerWidth} x ${window.innerHeight}`,
        pixelRatio: window.devicePixelRatio.toString(),
        colorDepth: `${screen.colorDepth}-bit`,
      }));
    };

    updateDisplay();
    window.addEventListener('resize', updateDisplay);

    // Get performance stats
    if (typeof window !== 'undefined' && window.performance) {
      const perfData = performance.timing;
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
      const domReady = perfData.domContentLoadedEventEnd - perfData.navigationStart;
      
      setStats(prev => ({
        ...prev,
        loadTime: loadTime > 0 ? `${loadTime} ms` : '0 ms',
        domReady: domReady > 0 ? `${domReady} ms` : '0 ms',
      }));
    }

    // Get system stats
    const getBrowser = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Chrome')) return 'Chrome';
      if (ua.includes('Safari')) return 'Safari';
      if (ua.includes('Edge')) return 'Edge';
      return 'Unknown';
    };

    setStats(prev => ({
      ...prev,
      platform: navigator.platform,
      browser: getBrowser(),
      cores: navigator.hardwareConcurrency?.toString() || 'unknown',
      memory: (navigator as any).deviceMemory ? `${(navigator as any).deviceMemory} GB` : 'unknown',
    }));

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
      window.removeEventListener('resize', updateDisplay);
      clearInterval(sessionInterval);
    };
  }, []);

  return (
    <>
      {config.stats.showSession && (
        <div className="stat-box">
          <span className="label">{config.stats.labels.session}</span>
          <div className="stat-item">
            <span>time</span>
            <span className="stat-value">{stats.timeOnPage}</span>
          </div>
          <div className="stat-item">
            <span>clicks</span>
            <span className="stat-value">{stats.clicks}</span>
          </div>
          <div className="stat-item">
            <span>keys</span>
            <span className="stat-value">{stats.keyPresses}</span>
          </div>
        </div>
      )}

      {config.stats.showDisplay && (
        <div className="stat-box">
          <span className="label">{config.stats.labels.display}</span>
          <div className="stat-item">
            <span>resolution</span>
            <span className="stat-value">{stats.resolution}</span>
          </div>
          <div className="stat-item">
            <span>viewport</span>
            <span className="stat-value">{stats.viewport}</span>
          </div>
          <div className="stat-item">
            <span>dpr</span>
            <span className="stat-value">{stats.pixelRatio}</span>
          </div>
        </div>
      )}

      {config.stats.showPerformance && (
        <div className="stat-box">
          <span className="label">{config.stats.labels.performance}</span>
          <div className="stat-item">
            <span>load</span>
            <span className="stat-value">{stats.loadTime}</span>
          </div>
          <div className="stat-item">
            <span>dom ready</span>
            <span className="stat-value">{stats.domReady}</span>
          </div>
          <div className="stat-item">
            <span>ping</span>
            <span className="stat-value">54 ms</span>
          </div>
        </div>
      )}

      {config.stats.showSystem && (
        <div className="stat-box">
          <span className="label">{config.stats.labels.system}</span>
          <div className="stat-item">
            <span>browser</span>
            <span className="stat-value">{stats.browser}</span>
          </div>
          <div className="stat-item">
            <span>platform</span>
            <span className="stat-value">{stats.platform}</span>
          </div>
          <div className="stat-item">
            <span>cores</span>
            <span className="stat-value">{stats.cores}</span>
          </div>
        </div>
      )}
    </>
  );
}
