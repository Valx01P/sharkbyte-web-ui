'use client'

import { useState } from 'react'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)
  const [compactView, setCompactView] = useState(true)

  // Schedule data - updated to match Excel run of show
  const scheduleData = [
    {
      date: "Nov 7th",
      day: "Friday",
      events: [
        { time: "2:00 PM", title: "Setup", location: "Venue", type: "internal" },
        { time: "4:00 PM", title: "Final checks", location: "Venue", type: "internal" },
        { time: "5:00 PM", title: "Opening Ceremony", location: "Main Hall", type: "public" },
        { time: "7:00 PM", title: "Dinner service prep", location: "Kitchen", type: "internal" },
        { time: "8:00 PM", title: "Dinner service", location: "Cafeteria", type: "public" },
      ]
    },
    {
      date: "Nov 8th",
      day: "Saturday",
      events: [
        { time: "6:00 AM", title: "Breakfast service prep", location: "Kitchen", type: "internal" },
        { time: "7:00 AM", title: "Breakfast service", location: "Cafeteria", type: "public" },
        { time: "8:00 AM", title: "Sponsor event", location: "Conference Room", type: "sponsor" },
        { time: "8:30 AM", title: "Morning activities", location: "Main Hall", type: "public" },
        { time: "10:00 AM", title: "Workshop session", location: "Room 205", type: "public" },
        { time: "11:00 AM", title: "Networking break", location: "Lobby", type: "public" },
        { time: "11:15 AM", title: "Lunch service prep", location: "Kitchen", type: "internal" },
        { time: "12:00 PM", title: "Lunch service", location: "Cafeteria", type: "public" },
        { time: "1:30 PM", title: "Sponsor table prep", location: "Main Hall", type: "internal" },
        { time: "2:00 PM", title: "MDC table", location: "Main Hall", type: "public" },
        { time: "2:15 PM", title: "ROO Capital", location: "Main Hall", type: "public" },
        { time: "7:45 PM", title: "Dinner service prep", location: "Kitchen", type: "internal" },
        { time: "8:30 PM", title: "Dinner service", location: "Cafeteria", type: "public" },
      ]
    },
    {
      date: "Nov 9th",
      day: "Sunday",
      events: [
        { time: "7:00 AM", title: "Breakfast service prep", location: "Kitchen", type: "internal" },
        { time: "8:00 AM", title: "Breakfast service", location: "Cafeteria", type: "public" },
        { time: "9:00 AM", title: "Final preparations", location: "Main Hall", type: "public" },
        { time: "11:00 AM", title: "Project setup", location: "Demo Area", type: "public" },
        { time: "11:30 AM", title: "Lunch service prep", location: "Kitchen", type: "internal" },
        { time: "12:30 PM", title: "Lunch service", location: "Cafeteria", type: "public" },
        { time: "12:45 PM", title: "Sponsor activities", location: "Conference Room", type: "sponsor" },
        { time: "1:00 PM", title: "Judging begins", location: "Demo Area", type: "public" },
        { time: "2:30 PM", title: "Sponsor presentation", location: "Main Hall", type: "sponsor" },
        { time: "3:55 PM", title: "Final submission", location: "Online Portal", type: "internal" },
        { time: "4:30 PM", title: "Project evaluation", location: "Demo Area", type: "public" },
        { time: "7:00 PM", title: "Closing ceremony", location: "Auditorium", type: "public" },
      ]
    }
  ]

  // Get current time in EST
  const getCurrentESTTime = () => {
    return new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  }

  // Parse event time and date to create a comparable Date object
  const parseEventDateTime = (dateStr, timeStr) => {
    const currentYear = new Date().getFullYear();
    
    // Extract day from date string (e.g., "Nov 7th" -> 7)
    const dayMatch = dateStr.match(/(\d+)/);
    if (!dayMatch) return null;
    
    const day = parseInt(dayMatch[1]);
    const month = 10; // November (0-indexed)
    
    // Parse time
    const timeMatch = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeMatch) return null;
    
    let hours = parseInt(timeMatch[1]);
    const minutes = parseInt(timeMatch[2]);
    const period = timeMatch[3].toUpperCase();
    
    // Convert to 24-hour format
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    
    return new Date(currentYear, month, day, hours, minutes);
  }

  // Check if an event has occurred
  const hasEventOccurred = (dayData, eventIndex) => {
    const now = new Date(getCurrentESTTime());
    const eventDateTime = parseEventDateTime(dayData.date, dayData.events[eventIndex].time);
    
    if (!eventDateTime) return false;
    
    return now >= eventDateTime;
  }

  // Get dot color for compact view
  const getDotColor = (dayData, eventIndex) => {
    if (hasEventOccurred(dayData, eventIndex)) {
      return 'bg-green-400';
    }
    return 'bg-gray-400';
  }

  return (
    <section
      id="schedule"
      className="w-screen min-h-screen flex flex-col justify-start items-center relative overflow-hidden pixel-bg-schedule py-18 max-[1350px]:py-22 max-[650px]:py-32"
    >
      {/* TITLE */}
      <div className="mx-4 mb-6 max-[650px]:mb-4 mt-4 max-[650px]:mt-2">
        <div className="bg-gray-900 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-4 max-[650px]:py-2">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">
            Event Schedule
          </h1>
        </div>
      </div>

      {/* TAB NAVIGATION + VIEW TOGGLE */}
      <div className="px-4 max-[650px]:px-0 flex flex-wrap justify-center gap-2 max-[650px]:gap-1 mb-4">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`hover:cursor-pointer px-4 py-2 border-3 pixel-shadow transition-transform duration-300 hover:scale-110 max-[650px]:px-2 max-[650px]:py-1 ${
              activeDay === index
                ? 'bg-gray-900 text-white border-gray-600'
                : 'bg-white text-gray-900 border-gray-600'
            }`}
          >
            <div className="text-sm font-bold max-[650px]:text-xs max-[390px]:text-[19px]">{day.date}</div>
            <div className="text-xs text-gray-500 max-[390px]:text-[19px]">{day.day}</div>
          </button>
        ))}

        {/* Compact toggle button */}
        <button
          onClick={() => setCompactView(!compactView)}
          className="hover:cursor-pointer px-3 py-2 border-2 border-gray-600 bg-gray-900 text-white text-xs pixel-shadow transition-transform duration-300 hover:scale-102 max-[390px]:text-[22px] max-[390px]:px-3"
        >
          {compactView ? 'Timeline View' : 'Compact List View'}
        </button>
      </div>

      {/* SCHEDULE CONTENT */}
      {!compactView ? (
        // ---- TIMELINE VIEW ----
        <div className="mx-4 w-full max-w-lg flex-1 flex flex-col justify-center">
          <div className="overflow-x-auto p-4">
            <div className="flex gap-4 min-w-max max-[650px]:gap-3">
              {scheduleData[activeDay].events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex-shrink-0 relative">
                  <div
                    className="text-white p-4 border-3 border-gray-600 pixel-shadow bg-gray-900 w-56 max-[650px]:w-48 max-[650px]:p-3 max-[500px]:p-1.5 max-[500px]:w-32"
                  >
                    <div className="flex flex-col gap-2 max-[650px]:gap-1">
                      <div className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-base max-[500px]:text-[22px]">
                        {event.time}
                      </div>
                      <div className="font-bold text-center max-[1350px]:text-sm max-[650px]:text-sm max-[500px]:text-[24px]">
                        {event.title}
                      </div>
                      <div className="text-sm text-gray-200 text-center max-[1350px]:text-sm max-[500px]:text-[24px]">
                        {event.location}
                      </div>
                    </div>
                  </div>
                  {eventIndex < scheduleData[activeDay].events.length - 1 && (
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-2lg max-[650px]:text-lg max-[650px]:-right-1.5">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-4 mt-1 mb-4 text-gray-800 font-bold text-sm text-center max-[650px]:text-xs max-[650px]:mb-0 max-[500px]:text-[22px]">
            ← Scroll horizontally →
          </div>
        </div>
      ) : (
        // ---- COMPACT LIST VIEW ----
        <div className="min-[650px]:px-4 max-[650px]:px-0 w-full max-w-lg flex-1">
          <ul className="divide-y divide-gray-700 border-2 border-gray-600 pixel-shadow bg-gray-900 pixel-shadow overflow-y-auto max-h-[40vh]">
            {scheduleData[activeDay].events.map((event, i) => (
              <li
                key={i}
                className="flex items-center justify-between px-3 py-1.5 text-sm text-white max-[650px]:px-2 max-[650px]:py-1"
              >
                <div className="flex-shrink-0 w-20 font-bold text-xs text-gray-300 max-[500px]:text-[20px] max-[500px]:w-10">
                  {event.time}
                </div>
                <div className="flex justify-center flex-col flex-1 px-2">
                  <div className="font-semibold text-[22px] max-[500px]:text-[19px]">{event.title}</div>
                  <span className="text-[20px] text-gray-400 max-[500px]:text-[18px]">{event.location}</span>
                </div>
                <div
                  className={`ml-2 w-2 h-2 rounded-full ${getDotColor(scheduleData[activeDay], i)}`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Schedule