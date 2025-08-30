'use client'

import { useState } from "react"
import * as z from "zod"

const contributorTypes = z.literal(["Mentor", "Judge", "Volunteer"])
const currentRoleTypes = z.literal([
  "Student", "Alumni", "Faculty or Staff", "Industry Professional", "Other"
])
const workShopInterestTypes = z.literal(["Yes", "No", "Maybe"])



const Contributor = z.object({

  firstName: z.string(),
  lastName: z.string(),

  discord: z.string(),
  email: z.email(),
  phone: z.string(),
  country: z.string(),

  currentRole: z.currentRoleTypes(),

  // isStudent
  school: z.string().optional(), 
  major: z.string().optional(),
  classStanding: z.string().optional(), // not isAlumni
  gradYear:  z.string().optional(),

  // mentor
  
  // judge
  whatTechCanYouJudge: z.int()

  // volunteer


})

const ContributorForm = () => {
  const [hasMentorInterest, setHasMentorInterest] = useState(false)
  const [hasJudgeInterest, setHasJudgeInterest] = useState(false)
  const [hasVolunteerInterest, setHasVolunteerInterest] = useState(false)
  const [isStudent, setIsStudent] = useState(false)
  const [isAlumni, setIsAlumni] = useState(false)
  const [hasWorkshopInterest, setHasWorkshopInterest] = useState(false)
  const [formData, setFormData] = useState({
    ageConfirmation: false,

    interestRoles: [], // rq-- [mentor, judge, volunteer]
    
    firstName: '', // rq-- 'pablo'
    lastName: '', // rq-- 'valdes

    discord: '', // op-- 'valexj010409'
    email: '', // rq-- 'pablovaldes0925@gmail.com'
    phone: '', // rq-- '7863460791'
    country: '', // rq-- 'United States'

    currentRole: '', // if branch; student, industry professional, etc.

    // show if currentRole is in ['student', 'alumni', 'other']
    school: '',
    // show if currentRole is in ['student', 'alumni', 'other']
    major: '',
    // show if currentRole is in ['student', 'other']
    classStanding: '',
    gradYear: '',

    bestDescribesRole: [], // backend, frontend, mobile, etc.
    prevHackathonsAttended: '',
    howDidYouHearAboutSharkbyte: '',
    participationInterest: '',

    workshopInterest: '', // if branch

    workshopIdeaDescription: '',

    // mentors
    whatCategoriesCanYouMentor: [],
    mentoringModality: '',
    mentoringAvailability: [],

    // judge
    whatCategoriesCanYouJudge: [], // web dev, ios, robotics, etc.

    // volunteer
    volunteerFridayAvailability: [],
    volunteerSaturdayAvailability: [],
    volunteerSundayAvailability: [],
    planToHackWhileVolunteering: true,

    linkedin: '',
    github: '',
    website: '',

    judgeAcknowledgement: false,
    participationAckowledgement: false,
    sponsorReleaseConsent: false,
    mediaReleaseConsent: false,
    mlhAgreement: false,
    mlhTos: false,
    commsFromMlh: false
  })

  return (
    <div className="text-black h-full w-full flex items-baseline justify-baseline">
      <h1>Contributor Form</h1>
      <form className="bg-black">
        <h1>Contributor Type Interests</h1>
        <div>
          {/* Mentor, Volunteer, Judge */}
        </div>

        <h1>Contributor</h1>
        <div>
          {/* FIRST NAME */}
          {/* LAST NAME */}
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

export default ContributorForm