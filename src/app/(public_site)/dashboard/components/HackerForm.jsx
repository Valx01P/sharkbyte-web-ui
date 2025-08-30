'use client'

import { useState } from "react"

const HackerForm = () => {
  const [collapseField, setCollapseField] = useState({
    form: false,
    age: false,
    resume: false,
    personal: false,
    contact: false,
    education: false,
    demographics: false,
    experience: false,
    links: false,
    additional: false
  })

  const [formData, setFormData] = useState({
    ageConfirmation: false,
    
    firstName: '',
    lastName: '',
    age: null,
    country: '',

    discord: '',
    email: '',
    phone: '',

    school: '',
    major: '',
    classStanding: '',
    gradYear: '',

    gender: '',
    pronouns: '',
    ethnicity: '',
    race: '',

    bestDescribesRole: [], // backend, frontend, mobile, etc.
    prevHackathonsAttended: '',
    howDidYouHearAboutSharkbyte: '',
    participationInterest: '',

    linkedin: '',
    github: '',
    website: '',

    sponsorReleaseConsent: false,
    mediaReleaseConsent: false,
    mlhAgreement: false,
    mlhTos: false,
    commsFromMlh: false
  })

  return (
    <div className="text-black bg-blue-200 py-2 px-6 h-full w-full flex flex-col items-baseline justify-baseline">
      <h1>Hacker Form</h1>
      <form className="border-l-2 border-gray-900 px-4 flex-wrap flex w-full text-sm flex-col">
        <h1>Age</h1>
        <div className="border-l-2 border-gray-900 px-4">
          
        </div>

        <h1>Resume</h1>
        <div className="border-l-2 border-gray-900 px-4">
          <input type="file" name="upload" accept=".jpg,.png,.pdf"/>
        </div>

        <h1>Hacker</h1>
        <div>
          {/* FIRST NAME */}
          {/* LAST NAME */}
          {/* AGE */}
          {/* COUNTRY */}
        </div>

        <h1>Contact</h1>
        <div>
          {/* EMAIL */}
          {/* PHONE */}
        </div>

        <h1>Education</h1>
        <div>
          {/* SCHOOL */}
          {/* MAJOR */}
          {/* CLASS STANDING */}
          {/* GRAD YEAR */}
        </div>

        <h1>Demographics</h1>
        <div>
          {/* GENDER */}
          {/* PRO-NOUNS */}
          {/* ETHNICITY */}
          {/* RACE */}
        </div>

        <h1>Experience</h1>
        <div>
          {/* ROLE BEST DESCRIBES YOU */}
          {/* PREV HACKATHONS ATTENDED */}
          {/* HOW DID YOU HEAR ABOUT SHARKBYTE */}
          {/* WHY ARE YOU INTERESTED IN PARTICIPATING */}
        </div>

        <h1>Links</h1>
        <div>
          {/* LINKEDIN */}
          {/* GITHUB */}
          {/* WEBSITE */}
        </div>

        <h1>Additional</h1>
        <div>
          {/* OVER 18 */}
          {/* SPONSOR SHARING OKAY */}
          {/* MLH AGREEMENT */}
          {/* MLH TERMS AND CONDITIONS */}
          {/* COMMS FROM MLH */}
        </div>
      </form>
    </div>
  )
}

export default HackerForm