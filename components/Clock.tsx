'use client'

import { useState, useEffect } from 'react'
import { config } from '@/config'

export default function Clock() {
  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' })
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      
      if (config.clock.format24Hour) {
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0')
        setTime({ hours, minutes, seconds })
      } else {
        let hours = now.getHours()
        const ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12 || 12
        const hoursStr = String(hours).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0')
        setTime({ hours: `${hoursStr} ${ampm}`, minutes, seconds })
      }

      if (config.clock.dateFormat !== 'none') {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
        
        const day = days[now.getDay()]
        const month = months[now.getMonth()]
        const dateNum = now.getDate()
        const year = now.getFullYear()
        
        if (config.clock.dateFormat === 'short') {
          setDate(`${month} ${dateNum}, ${year}`)
        } else {
          setDate(`${day}, ${month} ${dateNum}, ${year}`)
        }
      }
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="datetime-section">
      <div className="datetime-box">
        <span className="label">{config.stats.labels.datetime}</span>
        <div className="time">
          {time.hours}:{time.minutes}
          {config.clock.showSeconds && `:${time.seconds}`}
        </div>
        {config.clock.dateFormat !== 'none' && (
          <div className="date">{date}</div>
        )}
      </div>
    </section>
  )
}
