"use client"

import Image from "next/image";
import Projectdata from './data/Projectdata.json'
import EduCareer from './data/EduCareer.json'
import { useState } from "react";


export default function Home() {

  const [tab,setTab] = useState(new Set())
  const [tabOpen, setTabOpen] = useState(false)

  function handleTab(index){

    setTab( (prev) => {
      let newSet = new Set(prev)
      if (newSet.has(index)){
        setTabOpen(false)
        newSet.delete(index)
      } else{
        setTabOpen(true)
        newSet.add(index)
      }

      return newSet
    })
  }

  function removeTab(event) {
    

    setTab( (prev) => {
      let newTab = new Set()
      return newTab
    })

    setTabOpen(false)
  }

  

  return (
    <>

      {/* TAB APPEARING FROM SIDE ON CLICK */}

      {(tabOpen && tab.has(0)) && (
        <div className="bg-[rgba(0,0,0,0.5)] fixed h-full w-full z-1" onClick={removeTab}>
          
          {
            
            <div index={0} className="max-w-[800px] -left-[400px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl m-5 p-6 sm:px-20" onClick={(e) => e.stopPropagation()}>
            
            <div className="flex justify-between gap-2">
              <h2>Projects</h2>
              <h3 onClick={removeTab}><b>X</b></h3>
            </div>  

            {Projectdata.map( (project, index) => (
              <div className="flex gap-5 p-2 flex-col py-20 border-b-[2px] border-solid border-blue-900" key={index}>

                <h3>{project.header}</h3>

                <div className="flex flex-row gap-2">
                  {project.techstack.map((tech, i) => (
                    <div key={i} className="text-black rounded-4xl p-2 bg-[#EBE9E2]">
                      {tech}
                    </div>
                  ))}
                </div>

                <div>
                  <img className="rounded-xl shadow-lg" src={project.img} alt={`${project.header}'s image`}/>
                </div>

                <p>
                  {project.description}
                </p>

                <div className="flex flex-row gap-2">
                    <a href={project.github} className="text-black border-black border-[1px] border-solid rounded-xl p-2 hover:bg-black hover:text-white duration-300 ease-in-out">Github</a>
                    <a href={project.website} className="text-black border-black border-[1px] border-solid rounded-xl p-2 hover:bg-black hover:text-white duration-300 ease-in-out">Website</a>
                </div>

              </div>
            ))}
            </div>
        
          }
        </div>
      )}

      {(tabOpen && tab.has(1)) && (
        <div className="bg-[rgba(0,0,0,0.5)] fixed h-full w-full z-1" onClick={removeTab}>
          {
            
            <div index={1} className="max-w-[800px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl m-5 p-6" onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-between gap-2">
              <h2>Education and Career</h2>
              <h3 onClick={removeTab}><b>X</b></h3>
            </div>

            {EduCareer.map( (edu, index) => (
              <div className="flex gap-5 p-2 flex-col py-20 border-b-[2px] border-solid border-blue-900" key={index}>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <h3>{edu.title}</h3>
                  <i>{edu.year}</i>
                </div>  
                <div className="flex flex-row gap-2 flex-wrap">
                  {edu.tags.map((tag, i) => (
                    <div key={i} className="text-black rounded-sm sm:rounded-4xl text-xs sm:text-baser p-1 sm:py-2 sm:px-5 bg-[#EBE9E2]">
                      {tag}
                    </div>
                  ))}
                </div>
                <p>
                  {edu.description}
                </p>
        
              </div>
            ))}
            </div>
        
          }
        </div>
      )}

      {(tabOpen && tab.has(2)) && (
        <div className="bg-[rgba(0,0,0,0.5)] fixed h-full w-full z-1" onClick={removeTab}>
          {
            
            <div index={2} className="max-w-[800px] max-h-[95vh] overflow-y-auto bg-white  m-5 " onClick={(e) => e.stopPropagation()}>
            
              <img src="/Images/CV_pdf.jpeg"/>
            
            
            </div>
        
          }
        </div>
      )}
      

      {/* MAIN PAGE WITH TILES */}

      <h1 className="px-14 hidden sm:block">Ahmed</h1>
      <div className="content-tiles p-6">

        <div className="col-span-3 sm:col-span-2 row-span-1 bg-[#93B2E0] flex flex-row justify-between ">
          <h2>View CV</h2>
          <h2 className="glow" onClick={() => handleTab(2)}>+</h2>
        </div>

        <div className="hidden sm:block col-span-1 row-span-1 bg-[#DFC202]">
          <h2>STAR</h2>
        </div>
          
        <div className="col-span-3 justify-between row-span-2 bg-[#9A9CD4]">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2>Education</h2>
              <h2 className="glow" onClick={() => handleTab(1)}>+</h2>
            </div>
            <div className="flex flex-col gap-3">
              <h3>University of Greenwich</h3>
              <div className="flex flex-row flex-wrap gap-2 justify-right">
                <div className="badge bg-[#7E81C8]">Computer Engineering</div>
                <div className="badge bg-[#7E81C8]">First Class 4.0 GPA</div>
              </div>
            </div>  
          </div>
          
          <div className="text-right">
            <h1>6</h1>
          </div>
        </div>

        <div className="col-span-3 sm:col-span-2 row-span-2 justify-between p-3 flex flex-col bg-[#91C6CA]">

          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2>Highlight</h2>
              <h2 className="glow" onClick={() => handleTab(0)}>+</h2>
            </div>
            <div>
              <h2>Projects</h2>
            </div>  
          </div>
          
          <div className="text-right">
            <h1>6</h1>
          </div>

        </div>

        <div className="text-right text-white flex flex-col justify-end col-span-3 sm:col-span-2 row-span-2 bg-[#1A1A1A]" style={{backgroundImage:`url("/AREmoji.jpg")`, backgroundPosition:'left', backgroundSize:'contain', backgroundRepeat:"no-repeat"}}>
          <h2 className="">Ahmed</h2>
          <h3>Developer</h3>
        </div>

        <div className="col-span-3 row-span-1 bg-[#FF987C]">
          <h2>Based in London</h2>
        </div>

        <div className="col-span-3 row-span-3 bg-[#93C9A8]">
          <h2>Contact Me!</h2>
          <form className="flex justify-between flex-col h-80 gap-3">
            <div>
              <label id="name" htmlFor="name">Name</label>
              <input type="text" id="name" name="email" placeholder="Enter Name"/>
            </div>
            <div>
              <label id="email" htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Enter Name"/>
            </div>
            <div className="grow ">
              <label id="message" htmlFor="message">Message</label>
              <textarea type="text" id="message" name="message" placeholder="Enter Message"/>
            </div>
          </form>
        </div>

        <div className="col-span-3 sm:col-span-2 row-span-3 bg-[#91C6CA]">
          <h2>Tech Stack</h2>
          <div className="flex flex-col gap-2">
            <div className="badge bg-[#68B1B6]">ReactJS</div>
            <div className="badge bg-[#68B1B6]">NextJS</div>
            <div className="badge bg-[#68B1B6]">MongoDB</div>
            <div className="badge bg-[#68B1B6]">AWS</div>
            <div className="badge bg-[#68B1B6]">.NET Blazor</div>
            <div className="badge bg-[#68B1B6]">Docker</div>
            <div className="badge bg-[#68B1B6]">SQL Server</div>
          </div>
        </div>

        <div className="col-span-3 row-span-3 bg-[#E5A8DF] flex flex-col gap-2">
          <h2>About Me</h2>
          <p className="text-justify">I am currently working as a Freelance Developer for SMEs and local businesses. I worked previously as an IT Support Staff which enhanced my communication skills,
              Hardware and Software troubleshooting skills and I became familiar with Azure and IT Service Management Softwares. However, I always loved Coding and providing creative solutions,
              hence why I pursue my current path, gaining real world experience and looking to start my Career as a Developer in the Corporate World.
          </p>
          <p className="text-justify">
            While most of my experience comes from web and application Development, I also have worked with Embedded Systems and FPGAs as well as creation of Wireless Sensor Modules.
            I have a strong background in Advanced Mathematics having built digital filters.
          </p>
        </div>
        
        <div className="col-span-3 sm:col-span-2 row-span-2 bg-[#91C6CA]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2>Career</h2>
              <h2 className="glow">+</h2>
            </div>
            <div className="flex gap-2 flex-col text-right">
              <div className="badge bg-[#68B1B6]">IT Support Analyst</div>
              <div className="badge bg-[#68B1B6]">Freelance Developer</div>
            </div>  
          </div>
          
          <div className="text-right">
            <h1>2</h1>
          </div>
        </div>
        
        <div className="col-span-3 sm:col-span-2 row-span-1 bg-[#DFC202]">
          <h2>Socials</h2>
          <div className="flex flex-row gap-3 ustify-between p-2">
            <div className="text-black rounded-4xl py-2 px-5 bg-[#EBD74F]"><a href="https://www.linkedin.com/in/ahmed-mohamed-haniffa-arfan-989267202/">LinkedIn</a></div>
            <div className="text-black rounded-4xl py-2 px-5 bg-[#EBD74F]"><a href="mailto:ahmedmharfan@gmail.com">Email</a></div>
            <div className="text-black rounded-4xl py-2 px-5 bg-[#EBD74F]"><a href="https://github.com/Wertasile">GitHub</a></div>
          </div>
        </div>

      </div>
    </>
  );
}
