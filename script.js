// ============================================
// STATS PAGE FUNCTIONALITY
// ============================================

// Real-time clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    if (!clockElement || !dateElement) return;
    
    const now = new Date();
    
    // Format time (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Format date (day, month date, year)
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    
    dateElement.textContent = `${day}, ${month} ${date}, ${year}`;
}

// Check if we're on stats page and update clock
if (document.getElementById('clock')) {
    updateClock();
    setInterval(updateClock, 1000);
}

// Update all stats (only on stats page)
function updateAllStats() {
    if (!document.getElementById('resolution')) return;
    
    // Performance stats
    const loadTime = Math.round(window.performance.timing.loadEventEnd - window.performance.timing.navigationStart);
    if (loadTime > 0) {
        document.getElementById('load').textContent = `${loadTime} ms`;
    }
    
    const domContent = Math.round(window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart);
    if (domContent > 0 && document.getElementById('domContent')) {
        document.getElementById('domContent').textContent = `${domContent} ms`;
    }
    
    const firstPaint = performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint');
    if (firstPaint && document.getElementById('firstPaint')) {
        document.getElementById('firstPaint').textContent = `${Math.round(firstPaint.startTime)} ms`;
    }
    
    // Simulate ping
    const ping = Math.floor(Math.random() * 50) + 10;
    document.getElementById('ping').textContent = `${ping} ms`;
    
    // Display stats
    document.getElementById('resolution').textContent = `${window.screen.width} x ${window.screen.height}`;
    
    if (document.getElementById('viewport')) {
        document.getElementById('viewport').textContent = `${window.innerWidth} x ${window.innerHeight}`;
    }
    
    if (document.getElementById('pixelRatio')) {
        document.getElementById('pixelRatio').textContent = window.devicePixelRatio.toFixed(1);
    }
    
    if (document.getElementById('colorDepth')) {
        document.getElementById('colorDepth').textContent = `${screen.colorDepth}-bit`;
    }
    
    // System stats
    if (document.getElementById('platform')) {
        const platform = navigator.platform || navigator.userAgentData?.platform || 'Unknown';
        document.getElementById('platform').textContent = platform;
    }
    
    if (document.getElementById('browser')) {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        if (ua.includes('Chrome')) browser = 'Chrome';
        else if (ua.includes('Safari')) browser = 'Safari';
        else if (ua.includes('Firefox')) browser = 'Firefox';
        else if (ua.includes('Edge')) browser = 'Edge';
        document.getElementById('browser').textContent = browser;
    }
    
    if (document.getElementById('cores')) {
        document.getElementById('cores').textContent = navigator.hardwareConcurrency || 'N/A';
    }
    
    if (document.getElementById('memory')) {
        const memory = navigator.deviceMemory;
        document.getElementById('memory').textContent = memory ? `${memory} GB` : 'N/A';
    }
    
    if (document.getElementById('online')) {
        document.getElementById('online').textContent = navigator.onLine ? '✓' : '✗';
    }
    
    // Network stats
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
        if (document.getElementById('connection')) {
            document.getElementById('connection').textContent = connection.effectiveType || 'unknown';
        }
        if (document.getElementById('downlink')) {
            document.getElementById('downlink').textContent = connection.downlink ? `${connection.downlink} Mbps` : 'N/A';
        }
        if (document.getElementById('rtt')) {
            document.getElementById('rtt').textContent = connection.rtt ? `${connection.rtt} ms` : 'N/A';
        }
        if (document.getElementById('saveData')) {
            document.getElementById('saveData').textContent = connection.saveData ? 'on' : 'off';
        }
    }
    
    // Battery stats
    if (navigator.getBattery && document.getElementById('batteryLevel')) {
        navigator.getBattery().then(battery => {
            document.getElementById('batteryLevel').textContent = `${Math.round(battery.level * 100)}%`;
            document.getElementById('batteryCharging').textContent = battery.charging ? 'yes' : 'no';
            
            if (battery.chargingTime === Infinity) {
                document.getElementById('chargingTime').textContent = 'N/A';
            } else {
                const hours = Math.floor(battery.chargingTime / 3600);
                const mins = Math.floor((battery.chargingTime % 3600) / 60);
                document.getElementById('chargingTime').textContent = `${hours}h ${mins}m`;
            }
            
            if (battery.dischargingTime === Infinity) {
                document.getElementById('dischargingTime').textContent = 'N/A';
            } else {
                const hours = Math.floor(battery.dischargingTime / 3600);
                const mins = Math.floor((battery.dischargingTime % 3600) / 60);
                document.getElementById('dischargingTime').textContent = `${hours}h ${mins}m`;
            }
        });
    }
    
    // Location stats
    if (document.getElementById('language')) {
        document.getElementById('language').textContent = navigator.language;
    }
    
    if (document.getElementById('timezone')) {
        const offset = -new Date().getTimezoneOffset() / 60;
        document.getElementById('timezone').textContent = `UTC${offset >= 0 ? '+' : ''}${offset}`;
    }
    
    if (document.getElementById('cookieEnabled')) {
        document.getElementById('cookieEnabled').textContent = navigator.cookieEnabled ? '✓' : '✗';
    }
    
    if (document.getElementById('doNotTrack')) {
        const dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
        document.getElementById('doNotTrack').textContent = dnt === '1' ? 'on' : 'off';
    }
    
    // FPS counter
    let lastTime = performance.now();
    let frames = 0;
    
    function countFPS() {
        if (!document.getElementById('fps')) return;
        
        const currentTime = performance.now();
        frames++;
        
        if (currentTime >= lastTime + 1000) {
            const fps = Math.round((frames * 1000) / (currentTime - lastTime));
            document.getElementById('fps').textContent = fps;
            frames = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(countFPS);
    }
    
    requestAnimationFrame(countFPS);
}

// Session tracking (only on stats page)
if (document.getElementById('timeOnPage')) {
    let sessionStart = Date.now();
    let clicks = 0;
    let keyPresses = 0;
    
    setInterval(() => {
        const seconds = Math.floor((Date.now() - sessionStart) / 1000);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('timeOnPage').textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    }, 1000);
    
    document.addEventListener('click', () => {
        clicks++;
        document.getElementById('clicks').textContent = clicks;
    });
    
    document.addEventListener('keydown', () => {
        keyPresses++;
        document.getElementById('keyPresses').textContent = keyPresses;
    });
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = total > 0 ? Math.round((scrolled / total) * 100) : 0;
        document.getElementById('scrollDepth').textContent = `${percentage}%`;
    });
}

// Initialize stats on page load
if (document.querySelector('.stats-container')) {
    updateAllStats();
}

// ============================================
// PORTFOLIO PAGE FUNCTIONALITY
// ============================================
// ============================================
// PORTFOLIO PAGE FUNCTIONALITY
// ============================================

// Profile carousel functionality (only on portfolio page)
if (document.querySelector('.profile-card')) {
    let currentProfile = 0;
    const profiles = [
        {
            name: "Jack",
            title: "Trader & Developer",
            quote: '"Simplicity is the ultimate sophistication." - Leonardo da Vinci',
            avatar: "J",
            button: "IndexSwapy"
        },
        {
            name: "Alex",
            title: "UI/UX Designer",
            quote: '"Design is not just what it looks like. Design is how it works." - Steve Jobs',
            avatar: "A",
            button: "View Portfolio"
        },
        {
            name: "Sarah",
            title: "Full Stack Engineer",
            quote: '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
            avatar: "S",
            button: "Explore Projects"
        },
        {
            name: "Mike",
            title: "Data Scientist",
            quote: '"In God we trust. All others must bring data." - W. Edwards Deming',
            avatar: "M",
            button: "See Research"
        }
    ];

    function updateProfile() {
        const profile = profiles[currentProfile];
        
        // Update profile content with fade effect
        const profileContent = document.querySelector('.profile-content');
        profileContent.style.opacity = '0';
        
        setTimeout(() => {
            document.querySelector('.profile-name').textContent = profile.name;
            document.querySelector('.profile-title').textContent = profile.title;
            document.querySelector('.quote').textContent = profile.quote;
            document.querySelector('.avatar').textContent = profile.avatar;
            document.querySelector('.cta-button').textContent = profile.button;
            
            // Update pagination dots
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                if (index === currentProfile) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            profileContent.style.opacity = '1';
        }, 200);
    }

    window.nextProfile = function() {
        currentProfile = (currentProfile + 1) % profiles.length;
        updateProfile();
    }

    window.previousProfile = function() {
        currentProfile = (currentProfile - 1 + profiles.length) % profiles.length;
        updateProfile();
    }

    // Auto-rotate profiles every 10 seconds
    setInterval(window.nextProfile, 10000);

    // Add click handlers to pagination dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentProfile = index;
            updateProfile();
        });
    });
    
    // Keyboard shortcuts for profile navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            window.previousProfile();
        } else if (e.key === 'ArrowRight') {
            window.nextProfile();
        }
    });
}

// ============================================
// GLOBAL FUNCTIONALITY
// ============================================

// Greeting based on time of day
function setGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    console.log(`${greeting}! Welcome to your personal dashboard.`);
}

setGreeting();
