"use client"

import { useState, useEffect } from "react"
import "./volunteer.css"
import Navbar from "../../navbar"

function Volunteer() {
  // States to manage resumes and editing
  const [resumes, setResumes] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [activeTab, setActiveTab] = useState("list")

  // Effect to load resumes from localStorage when component mounts
  useEffect(() => {
    loadResumes()
  }, [])

  // Function to load resumes from localStorage
  const loadResumes = () => {
    const savedData = localStorage.getItem("resumes")
    if (savedData) {
      setResumes(JSON.parse(savedData))
    }
  }

  // Function to save resumes to localStorage
  const saveResumes = (newResumes) => {
    localStorage.setItem("resumes", JSON.stringify(newResumes))
    setResumes(newResumes)
  }

  // Function to activate a tab
  const activateTab = (tabId) => {
    setActiveTab(tabId)
  }

  // Function to add a new resume
  const addResume = (e) => {
    e.preventDefault()

    const form = e.target
    const newResume = {
      id: Date.now().toString(),
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      education: form.education.value,
      experience: form.experience.value,
      skills: form.skills.value,
    }

    const newResumes = [...resumes, newResume]
    saveResumes(newResumes)

    // Clear form
    form.reset()

    // Return to list
    activateTab("list")
  }

  // Function to start editing a resume
  const startEditing = (id) => {
    setEditingId(id)
    activateTab("form")
  }

  // Function to save the edited resume
  const saveEdit = (e) => {
    e.preventDefault()

    const form = e.target
    const index = resumes.findIndex((r) => r.id === editingId)

    if (index !== -1) {
      const newResumes = [...resumes]
      newResumes[index] = {
        id: editingId,
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        education: form.education.value,
        experience: form.experience.value,
        skills: form.skills.value,

      }

      saveResumes(newResumes)

      // Clear form and editing state
      cancelEdit()

      // Return to list
      activateTab("list")
    }
  }

  // Function to cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    document.getElementById("resume-form").reset()
  }

  // Function to delete a resume
  const deleteResume = (id) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      const newResumes = resumes.filter((r) => r.id !== id)
      saveResumes(newResumes)
    }
  }

  // Function to download a resume
  const downloadResume = (id) => {
    const resume = resumes.find((r) => r.id === id)

    if (resume) {
      // Create text file content
      let content = `RESUME - ${resume.name}\n`
      content += `=================================\n\n`
      content += `Name: ${resume.name}\n`
      content += `Email: ${resume.email}\n`
      content += `Phone: ${resume.phone}\n\n`
      content += `EDUCATION:\n${resume.education}\n\n`
      content += `PROFESSIONAL EXPERIENCE:\n${resume.experience}\n\n`
      content += `SKILLS:\n${resume.skills}\n\n`

      
      // Create download element
      const element = document.createElement("a")
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content))
      element.setAttribute("download", `resume_${resume.name.replace(/\s+/g, "_")}.txt`)

      element.style.display = "none"
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    }
  }

  // Render the component
  return (
    <>
      <Navbar />
      <section className="volunteer-section">
        <h2>Volunteer & Get Involved</h2>
        <p id="caption">Empower lives by giving your time and skills.</p>

        <div className="volunteer-options">
          <div className="volunteer-card">
            <h3>On-Ground Volunteering</h3>
            <p>Assist in relief missions, training, and fieldwork.</p>
          </div>
          <div className="volunteer-card">
            <h3>Remote Volunteering</h3>
            <p>Help with fundraising, digital campaigns, and advocacy.</p>
          </div>
          <div className="volunteer-card">
            <h3>Fundraising & Donations</h3>
            <p>Organize charity drives or support financially.</p>
          </div>
        </div>

        <p id="cta-text">Every action counts. Sign up today!</p>
        <a href="./" className="btn-volunteer">
          Join Us
        </a>

        <div className="container">
          <h1>Resume Database</h1>

          <div className="tabs">
            <div className={`tab ${activeTab === "list" ? "active" : ""}`} onClick={() => activateTab("list")}>
              Resume List
            </div>
            <div className={`tab ${activeTab === "form" ? "active" : ""}`} onClick={() => activateTab("form")}>
              New Resume
            </div>
          </div>

          <div className={`tab-content ${activeTab === "list" ? "active" : ""}`} id="list">
            <div className="add-button-container">
              <button id="add-resume-btn" onClick={() => activateTab("form")}>
                Add Resume
              </button>
            </div>

            <div className="resumes-grid" id="resumes-container">
              {resumes.length === 0 ? (
                <div className="empty-message">No resumes registered. Add a new one!</div>
              ) : (
                resumes.map((resume) => (
                  <div className="resume-card" key={resume.id}>
                    <div className="resume-header">
                      <h3>{resume.name}</h3>
                      <p>{resume.email}</p>
                    </div>
                    <div className="resume-body">
                      <p>
                        <strong>Phone:</strong> {resume.phone}
                      </p>
                      <p>
                        <strong>Education:</strong> {resume.education}
                      </p>
                      <p>
                        <strong>Experience:</strong> {resume.experience}
                      </p>
                      <p>
                        <strong>Skills:</strong> {resume.skills}
                      </p>
                      
                    </div>
                    <div className="resume-footer">
                      <button className="download" onClick={() => downloadResume(resume.id)}>
                        Download Resume
                      </button>
                      <div>
                        <button className="edit" onClick={() => startEditing(resume.id)}>
                          Edit
                        </button>
                        <button className="delete" onClick={() => deleteResume(resume.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className={`tab-content ${activeTab === "form" ? "active" : ""}`} id="form">
            <form id="resume-form" onSubmit={editingId ? saveEdit : addResume}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  defaultValue={editingId ? resumes.find((r) => r.id === editingId)?.name : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  defaultValue={editingId ? resumes.find((r) => r.id === editingId)?.email : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="(555) 123-4567"
                  defaultValue={editingId ? resumes.find((r) => r.id === editingId)?.phone : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="education">Education</label>
                <textarea
                  id="education"
                  name="education"
                  placeholder="Your educational background"
                  defaultValue={editingId ? resumes.find((r) => r.id === editingId)?.education : ""}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Professional Experience</label>
                <textarea
                  id="experience"
                  name="experience"
                  placeholder="Your work experience"
                  defaultValue={editingId ? resumes.find((r) => r.id === editingId)?.experience : ""}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <textarea
                  id="skills"
                  name="skills"
                  placeholder="Your skills and competencies"
                  defaultValue={editingId ? resumes.find((r) => r.id === editingId)?.skills : ""}
                ></textarea>
              </div>

              

              <div className="form-group">
                <button type="submit" id="submit-btn">
                  {editingId ? "Save Changes" : "Add Resume"}
                </button>
                <button
                  type="button"
                  id="cancel-btn"
                  onClick={cancelEdit}
                  style={{ display: editingId ? "inline-block" : "none" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Volunteer

