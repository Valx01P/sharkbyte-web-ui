'use client'

import { useState } from 'react'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0)

  // Schedule data - easily editable array structure
  const scheduleData = [
    {
      date: "Nov 7th",
      day: "Friday",
      events: [
        { time: "6:00 PM", title: "Registration & Check-in", location: "Main Lobby", type: "admin" },
        { time: "7:00 PM", title: "Opening Ceremony", location: "Auditorium", type: "ceremony" },
        { time: "8:00 PM", title: "Team Formation", location: "Main Hall", type: "networking" },
        { time: "9:00 PM", title: "Dinner & Networking", location: "Cafeteria", type: "food" },
        { time: "10:00 PM", title: "Hacking Begins!", location: "Building 7", type: "coding" },
      ]
    },
    {
      date: "Nov 8th",
      day: "Saturday",
      events: [
        { time: "8:00 AM", title: "Breakfast", location: "Cafeteria", type: "food" },
        { time: "9:00 AM", title: "Etcetera presents", location: "Room 1111", type: "workshop" },
        { time: "10:00 AM", title: "Lunch", location: "Building 7, Room 1111", type: "food" },
        { time: "12:00 PM", title: "Tech Workshop: AI/ML", location: "Room 205", type: "workshop" },
        { time: "2:00 PM", title: "Mentor Check-ins", location: "Various Rooms", type: "mentorship" },
        { time: "6:00 PM", title: "Dinner", location: "Cafeteria", type: "food" },
        { time: "8:00 PM", title: "Mini Presentations", location: "Main Hall", type: "presentation" },
        { time: "10:00 PM", title: "Late Night Snacks", location: "Building 7", type: "food" },
      ]
    },
    {
      date: "Nov 9th",
      day: "Sunday",
      events: [
        { time: "8:00 AM", title: "Breakfast", location: "Cafeteria", type: "food" },
        { time: "10:00 AM", title: "Final Submissions Due", location: "Online Portal", type: "admin" },
        { time: "11:00 AM", title: "Project Demos", location: "Main Hall", type: "presentation" },
        { time: "1:00 PM", title: "Lunch & Judging", location: "Cafeteria", type: "food" },
        { time: "3:00 PM", title: "Closing Ceremony", location: "Auditorium", type: "ceremony" },
        { time: "4:00 PM", title: "Awards & Prizes", location: "Auditorium", type: "ceremony" },
      ]
    }
  ]

  // Event type styling - custom dark colors (no reds/yellows)
  const getEventTypeStyle = (type) => {
    const styles = {
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
      className="w-screen min-h-screen flex flex-col justify-start items-center relative overflow-hidden pixel-bg-schedule py-16 max-[650px]:py-12"
    >
      {/* TITLE */}
      <div className="mb-6 max-[650px]:mb-4 mt-4 max-[650px]:mt-2">
        <div className="bg-gray-900 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-4 max-[650px]:py-2">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs">Event Schedule</h1>
        </div>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex gap-2 mb-6 max-[650px]:mb-4 max-[650px]:gap-1">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 border-3 pixel-shadow transition-transform duration-300 hover:scale-110 max-[650px]:px-3 max-[650px]:py-1.5 ${
              activeDay === index
                ? 'bg-gray-900 text-white border-gray-600'
                : 'bg-white text-gray-900 border-gray-600'
            }`}
          >
            <div className="text-sm font-bold max-[650px]:text-xs">{day.date}</div>
            <div className="text-xs text-gray-500">{day.day}</div>
          </button>
        ))}
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="w-full max-w-5lg px-4 max-[650px]:px-2 flex-1 flex flex-col justify-center">
        <div className="overflow-x-auto p-4">
          <div className="flex gap-4 pb-4 min-w-max max-[650px]:gap-3">
            {scheduleData[activeDay].events.map((event, eventIndex) => (
              <div key={eventIndex} className="flex-shrink-0 relative">
                {/* EVENT CARD */}
                <div className={`${getEventTypeStyle(event.type)} text-white p-4 border-3 border-gray-600 pixel-shadow transition-transform duration-300 hover:scale-105 cursor-pointer w-56 max-[650px]:w-48 max-[650px]:p-3`}>
                  <div className="flex flex-col gap-2 max-[650px]:gap-1">
                    <div className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-base">{event.time}</div>
                    <div className="font-bold text-center max-[1350px]:text-sm max-[650px]:text-sm">{event.title}</div>
                    <div className="text-sm text-gray-200 text-center max-[1350px]:text-sm">{event.location}</div>
                  </div>
                </div>
                
                {/* CONNECTING ARROW */}
                {eventIndex < scheduleData[activeDay].events.length - 1 && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-2lg max-[650px]:text-lg max-[650px]:-right-1.5">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="mt-1 mb-4 text-gray-800 font-bold text-sm text-center max-[650px]:text-xs max-[650px]:mb-0">
        ← Scroll horizontally to view timeline →
      </div>
    </section>
  )
}

export default Schedule