'use client'

import { useState } from 'react'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)
  const [compactView, setCompactView] = useState(true)

// Schedule data - public and sponsor events only
  const scheduleData = [
    {
      date: "Nov 7th",
      day: "Friday",
      events: [
        { time: "5:00 PM", title: "Opening Ceremony", location: "Main Hall", type: "public" },
        { time: "8:00 PM", title: "Dinner service", location: "Cafeteria", type: "public" },
      ]
    },
    {
      date: "Nov 8th",
      day: "Saturday",
      events: [
        { time: "7:00 AM", title: "Breakfast service", location: "Cafeteria", type: "public" },
        { time: "8:00 AM", title: "Sponsor event", location: "Conference Room", type: "sponsor" },
        { time: "8:30 AM", title: "Morning activities", location: "Main Hall", type: "public" },
        { time: "10:00 AM", title: "Workshop session", location: "Room 205", type: "public" },
        { time: "11:00 AM", title: "Networking break", location: "Lobby", type: "public" },
        { time: "12:00 PM", title: "Lunch service", location: "Cafeteria", type: "public" },
        { time: "2:00 PM", title: "MDC table", location: "Main Hall", type: "public" },
        { time: "2:15 PM", title: "ROO Capital", location: "Main Hall", type: "public" },
        { time: "8:30 PM", title: "Dinner service", location: "Cafeteria", type: "public" },
      ]
    },
    {
      date: "Nov 9th",
      day: "Sunday",
      events: [
        { time: "8:00 AM", title: "Breakfast service", location: "Cafeteria", type: "public" },
        { time: "9:00 AM", title: "Final preparations", location: "Main Hall", type: "public" },
        { time: "11:00 AM", title: "Project setup", location: "Demo Area", type: "public" },
        { time: "12:30 PM", title: "Lunch service", location: "Cafeteria", type: "public" },
        { time: "12:45 PM", title: "Sponsor activities", location: "Conference Room", type: "sponsor" },
        { time: "1:00 PM", title: "Judging begins", location: "Demo Area", type: "public" },
        { time: "2:30 PM", title: "Sponsor presentation", location: "Main Hall", type: "sponsor" },
        { time: "4:30 PM", title: "Project evaluation", location: "Demo Area", type: "public" },
        { time: "7:00 PM", title: "Closing ceremony", location: "Auditorium", type: "public" },
      ]
    }
  ]

  // Event type styling - added internal, public, sponsor types
  const getEventTypeStyle = (type) => {
    const styles = {
      internal: "bg-gradient-to-r from-[#2c5282] to-[#1a365d]",
      public: "bg-gradient-to-r from-[#2f855a] to-[#1c4532]",
      sponsor: "bg-gradient-to-r from-[#d69e2e] to-[#b7791f]",
      admin: "bg-gradient-to-r from-[#2d3748] to-[#1a202c]",
      ceremony: "bg-gradient-to-r from-[#553c9a] to-[#2d1b69]",
      networking: "bg-gradient-to-r from-[#2c5282] to-[#1a365d]",
      food: "bg-gradient-to-r from-[#2f855a] to-[#1c4532]",
      coding: "bg-gradient-to-r from-[#4a5568] to-[#2d3748]",
      workshop: "bg-gradient-to-r from-[#38b2ac] to-[#285e61]",
      mentorship: "bg-gradient-to-r from-[#5a67d8] to-[#3c366b]",
      presentation: "bg-gradient-to-r from-[#b83280] to-[#702459]",
    }
    return styles[type] || "bg-gradient-to-r from-[#2d3748] to-[#1a202c]"
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
          className="hover:cursor-pointer px-3 py-2 border-2 border-gray-600 bg-gray-900 text-white text-xs pixel-shadow hover:bg-gray-800 transition-colors max-[390px]:text-[22px] max-[390px]:px-3"
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
                    className={`${getEventTypeStyle(
                      event.type
                    )} text-white p-4 border-3 border-gray-600 pixel-shadow transition-transform duration-300 hover:scale-102 w-56 max-[750px]:w-48 max-[750px]:p-3 max-[500px]:p-1.5 max-[500px]:w-32`}
                  >
                    <div className="flex flex-col gap-2 max-[650px]:gap-1">
                      <div className="text-sm font-bold text-center max-[1350px]:text-sm max-[750px]:text-[22px]">
                        {event.time}
                      </div>
                      <div className="font-bold text-center max-[1350px]:text-sm max-[750px]:text-[24px]">
                        {event.title}
                      </div>
                      <div className="text-sm text-gray-200 text-center max-[750px]:text-[24px]">
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
                <div className="flex-shrink-0 w-20 font-bold text-[26px] max-[1050px]:text-[23px] max-[750px]:text-[20px] text-gray-300 max-[500px]:text-[20px] max-[500px]:w-10">
                  {event.time}
                </div>
                <div className="flex justify-center flex-col flex-1 px-2">
                  <div className="text-[28px] font-semibold max-[1050px]:text-[24px] max-[750px]:text-[20px] max-[500px]:text-[19px]">{event.title}</div>
                  <span className="text-[26px] max-[1050px]:text-[22px] max-[750px]:text-[20px] text-gray-400 max-[500px]:text-[18px]">{event.location}</span>
                </div>
                <div
                  className={`ml-2 w-2 h-2 rounded-full ${event.type === 'public'
                    ? 'bg-green-400'
                    : event.type === 'sponsor'
                    ? 'bg-yellow-400'
                    : 'bg-blue-400'
                  }`}
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
