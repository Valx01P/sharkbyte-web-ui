"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

const BetaHackerForm = () => {
  const [collapseField, setCollapseField] = useState({
    form: true,
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

  const toggleCollapse = (field) => {
    setCollapseField((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    // data.resume[0] will contain the uploaded file
  }

  return (
    <div className="text-black bg-blue-200 pb-2 px-6 h-auto min-h-dvh pt-[60px] w-full flex flex-col items-baseline justify-baseline">
      <h1 className="text-sm">Hacker Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="border-l-2 border-gray-900 px-4 py-2 flex-wrap flex w-full text-xs flex-col gap-1">
        {/* Age Section */}
        <h2 onClick={() => toggleCollapse("age")} className="cursor-pointer w-min text-nowrap">
          Age
        </h2>
        {collapseField.age && (
          <div className="border-l-2 border-gray-900 px-4">
            <label>
              <input
                type="checkbox"
                {...register("ageConfirmation", { required: true })}
              />{" "}
              I confirm I am 18+
            </label>
            {errors.ageConfirmation && (
              <p className="text-red-500">You must be 18+</p>
            )}
            <input
              type="number"
              placeholder="Your Age"
              {...register("age")}
              className="border p-1 w-full"
            />
          </div>
        )}

        {/* Resume */}
        <h2
          onClick={() => toggleCollapse("resume")}
          className="cursor-pointer w-min text-nowrap"
        >
          Resume
        </h2>
        {collapseField.resume && (
          <div className="border-l-2 border-gray-900 px-4">
            <input type="file" {...register("resume", { required: true })} />
            {errors.resume && (
              <p className="text-red-500">Resume required</p>
            )}
          </div>
        )}

        {/* Personal Info */}
        <h2
          onClick={() => toggleCollapse("personal")}
          className="cursor-pointer w-min text-nowrap"
        >
          Hacker Info
        </h2>
        {collapseField.personal && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <input
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="border p-1 w-full"
            />
            <input
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className="border p-1 w-full"
            />
            <input
              placeholder="Country"
              {...register("country")}
              className="border p-1 w-full"
            />
          </div>
        )}

        {/* Contact */}
        <h2
          onClick={() => toggleCollapse("contact")}
          className="cursor-pointer w-min text-nowrap"
        >
          Contact
        </h2>
        {collapseField.contact && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="border p-1 w-full"
            />
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              className="border p-1 w-full"
            />
            <input
              placeholder="Discord"
              {...register("discord")}
              className="border p-1 w-full"
            />
          </div>
        )}

        {/* Education */}
        <h2
          onClick={() => toggleCollapse("education")}
          className="cursor-pointer w-min text-nowrap"
        >
          Education
        </h2>
        {collapseField.education && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <input
              placeholder="School"
              {...register("school")}
              className="border p-1 w-full"
            />
            <input
              placeholder="Major"
              {...register("major")}
              className="border p-1 w-full"
            />
            <select {...register("classStanding")} className="border p-1 w-full">
              <option value="">Select Class Standing</option>
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="graduate">Graduate</option>
            </select>
            <input
              type="number"
              placeholder="Graduation Year"
              {...register("gradYear")}
              className="border p-1 w-full"
            />
          </div>
        )}

        {/* Demographics */}
        <h2
          onClick={() => toggleCollapse("demographics")}
          className="cursor-pointer w-min text-nowrap"
        >
          Demographics
        </h2>
        {collapseField.demographics && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <input placeholder="Gender" {...register("gender")} className="border p-1 w-full" />
            <input placeholder="Pronouns" {...register("pronouns")} className="border p-1 w-full" />
            <input placeholder="Ethnicity" {...register("ethnicity")} className="border p-1 w-full" />
            <input placeholder="Race" {...register("race")} className="border p-1 w-full" />
          </div>
        )}

        {/* Experience */}
        <h2
          onClick={() => toggleCollapse("experience")}
          className="cursor-pointer w-min text-nowrap"
        >
          Experience
        </h2>
        {collapseField.experience && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <p>Roles that best describe you:</p>
            <label>
              <input type="checkbox" value="backend" {...register("bestDescribesRole")} /> Backend
            </label>
            <label>
              <input type="checkbox" value="frontend" {...register("bestDescribesRole")} /> Frontend
            </label>
            <label>
              <input type="checkbox" value="mobile" {...register("bestDescribesRole")} /> Mobile
            </label>

            <input
              placeholder="Previous Hackathons Attended"
              {...register("prevHackathonsAttended")}
              className="border p-1 w-full"
            />
            <input
              placeholder="How did you hear about SharkByte?"
              {...register("howDidYouHearAboutSharkbyte")}
              className="border p-1 w-full"
            />
            <textarea
              placeholder="Why are you interested in participating?"
              {...register("participationInterest")}
              className="border p-1 w-full"
            />
          </div>
        )}

        {/* Links */}
        <h2
          onClick={() => toggleCollapse("links")}
          className="cursor-pointer w-min text-nowrap"
        >
          Links
        </h2>
        {collapseField.links && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <input placeholder="LinkedIn" {...register("linkedin")} className="border p-1 w-full" />
            <input placeholder="GitHub" {...register("github")} className="border p-1 w-full" />
            <input placeholder="Website" {...register("website")} className="border p-1 w-full" />
          </div>
        )}

        {/* Additional */}
        <h2
          onClick={() => toggleCollapse("additional")}
          className="cursor-pointer w-min text-nowrap"
        >
          Additional
        </h2>
        {collapseField.additional && (
          <div className="border-l-2 border-gray-900 px-4 space-y-2">
            <label>
              <input type="checkbox" {...register("sponsorReleaseConsent")} /> Agree to Sponsor Sharing
            </label>
            <label>
              <input type="checkbox" {...register("mediaReleaseConsent")} /> Media Release Consent
            </label>
            <label>
              <input type="checkbox" {...register("mlhAgreement", { required: true })} /> Agree to MLH Code of Conduct
            </label>
            <label>
              <input type="checkbox" {...register("mlhTos", { required: true })} /> Agree to MLH Terms & Conditions
            </label>
            <label>
              <input type="checkbox" {...register("commsFromMlh")} /> Receive comms from MLH
            </label>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="border border-gray-900 text-[22px mt-3 px-2 py-1 text-nowrap rounded w-min"
        >
          Submit Application
        </button>
      </form>
    </div>
  )
}

export default BetaHackerForm
