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
        { time: "4:00 PM", title: "Check in", location: "Registration Area", type: "public" },
        { time: "5:00 PM", title: "Dinner - Miami Dade College North Campus", location: "Cafeteria", type: "public" },
        { time: "7:00 PM", title: "Sponsor Fair", location: "Conference Center Building 3", type: "sponsor" },
        { time: "8:05 PM", title: "Meet your 5th Teammate: Hacking with GitHub Copilot", location: "Workshop Room", type: "public" },
        { time: "9:00 PM", title: "Game Tournament by Learning Resources", location: "Game Room", type: "public" },
        { time: "11:00 PM", title: "Start Hacking ANNOUNCEMENT", location: "Main Hall", type: "public" },
        { time: "11:00 PM", title: "Snack Time", location: "Cafeteria", type: "public" },
      ]
    },
    {
      date: "Nov 8th",
      day: "Saturday",
      events: [
        { time: "7:00 AM", title: "Breakfast Service", location: "Cafeteria", type: "public" },
        { time: "8:00 AM", title: "Big Sized Games by Learning Resources", location: "Game Room", type: "public" },
        { time: "9:00 AM", title: "VR Demo", location: "Demo Area", type: "public" },
        { time: "9:30 AM", title: "Intro to Google AI Studio", location: "Workshop Room", type: "public" },
        { time: "12:00 PM", title: "Lunch Service", location: "Cafeteria", type: "public" },
        { time: "1:00 PM", title: "Intro to AI/LLM Workshop", location: "Workshop Room", type: "public" },
        { time: "2:00 PM", title: "Professional Headshot", location: "Media Room", type: "public" },
        { time: "3:00 PM", title: "Snack Time", location: "Cafeteria", type: "public" },
        { time: "5:00 PM", title: "MS Paint Bob Ross", location: "Workshop Room", type: "public" },
        { time: "6:00 PM", title: "PitchIT with La'Shandra", location: "Main Hall", type: "public" },
        { time: "7:00 PM", title: "Dinner Service", location: "Cafeteria", type: "public" },
        { time: "9:00 PM", title: "Karaoke Session", location: "Activity Room", type: "public" },
        { time: "10:00 PM", title: "Snack Time", location: "Cafeteria", type: "public" },
      ]
    },
    {
      date: "Nov 9th",
      day: "Sunday",
      events: [
        { time: "7:00 AM", title: "Breakfast Service", location: "Cafeteria", type: "public" },
        { time: "12:30 PM", title: "Lunch Service", location: "Cafeteria", type: "public" },
        { time: "12:30 PM", title: "Begin Projects Evaluation", location: "Main Room", type: "public" },
        { time: "4:30 PM", title: "Finish Judging", location: "Main Room", type: "public" },
        { time: "5:00 PM", title: "Closing Ceremony", location: "Main Hall", type: "public" },
      ]
    }
  ]

//  const scheduleData = [
//     {
//       date: "Nov 7th",
//       day: "Friday",
//       events: [
//         { time: "-:--", title: "TBA", location: "TBA", type: "public" },
//       ]
//     },
//     {
//       date: "Nov 8th",
//       day: "Saturday",
//       events: [
//         { time: "-:--", title: "TBA", location: "TBA", type: "public" },
//       ]
//     },
//     {
//       date: "Nov 9th",
//       day: "Sunday",
//       events: [
//         { time: "-:--", title: "TBA", location: "TBA", type: "public" },
//       ]
//     }
//   ]

  // Event type styling - added internal, public, sponsor types
  const getEventTypeStyle = (type) => {
    const styles = {
      internal: "bg-gradient-to-r from-[#8b5cf6] to-[#851e99]",
      public: "bg-gradient-to-r from-[#5067da] to-[#2f45b0]",
      sponsor: "bg-gradient-to-r from-[#6b41cc] to-[#451f9f]",
    }
    return styles[type] || "bg-gradient-to-r from-[#2d3748] to-[#1a202c]"
  }

  return (
    <section
      id="schedule"
      className="w-screen min-h-screen flex flex-col justify-start items-center relative overflow-hidden pixel-bg-schedule py-4 max-[1350px]:py-4 max-[650px]:py-4"
    >
      {/* TITLE */}
      <div className="mx-4 mb-4 max-[650px]:mb-2">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-3 border-3 border-gray-600 pixel-shadow max-[650px]:px-4 max-[650px]:py-2">
          <h1 className="text-lg font-bold text-center max-[1350px]:text-base max-[650px]:text-xs max-[500px]:text-[22px]">
            Event Schedule
          </h1>
        </div>
      </div>

      <div className="mb-4 max-[650px]:mb-2 text-center py-3 px-5 max-[650px]:px-4 max-[500px]:px-3 max-[300px]:px-2 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-3 border-gray-600 pixel-shadow">
        <div className="text-white text-sm max-[650px]:text-xs max-[500px]:text-[22px] max-[300px]:text-[20px]">
          Schedule subject to change
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
                ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-gray-600'
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
          className="max-[527px]:mt-1 hover:cursor-pointer px-3 py-2 border-2 border-gray-600 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white text-xs pixel-shadow hover:bg-gray-800 transition-colors max-[390px]:text-[22px] max-[390px]:px-3"
        >
          {compactView ? 'Timeline View' : 'Compact List View'}
        </button>
      </div>
      
      <div className='flex w-full items-center justify-center min-[650px]:px-4 max-[650px]:px-0'>
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
          <div className="w-full max-w-lg flex-1">
            <ul className="divide-y divide-gray-700 border-2 border-gray-600 pixel-shadow bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pixel-shadow overflow-y-auto max-h-[calc(40vh+60px)]">
              {scheduleData[activeDay].events.map((event, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between px-3 py-1.5 text-sm text-white max-[650px]:px-2 max-[650px]:py-1"
                >
                  <div className="flex-shrink-0 w-20 font-bold text-[26px] max-[1050px]:text-[23px] max-[650px]:text-[20px] text-gray-300 max-[500px]:text-[20px] max-[500px]:w-10">
                    {event.time}
                  </div>
                  <div className="flex justify-center flex-col flex-1 px-2">
                    <div className="text-[26px] font-semibold max-[1050px]:text-[24px] max-[650px]:text-[20px] max-[500px]:text-[19px]">{event.title}</div>
                    <span className="text-[24px] max-[1050px]:text-[22px] max-[650px]:text-[20px] text-gray-400 max-[500px]:text-[18px]">{event.location}</span>
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
      </div>
    </section>
  )
}

export default Schedule