"use client"

import Image from "next/image";
import Projectdata from './data/Projectdata.json'
import EduCareer from './data/EduCareer.json'
import { useRef, useState, useEffect } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import Lenis from "lenis"

export default function Home() {

  const contentRef = useRef()

  const [tab, setTab] = useState(null)
  const animationsRef = useRef(new Map())
  
  useGSAP(() => {
    const tiles = gsap.utils.toArray(contentRef.current.children)

    gsap.fromTo(tiles,
      {
        opacity: 0,
        y: 20
      },{
        opacity: 1,
        y:0,
        stagger: 0.2,
        ease: "power2.out"
      }
    )

    const tabs = gsap.utils.toArray(".tabs")

    tabs.forEach((tab, index) => {

      const tabAnimation = gsap.fromTo(tab,
        { x: "-100%" },   // start off to the right
        { x: "0%", duration: 0.5, ease: "power2.inOut", paused: true }
      );

      tabAnimation.reverse()
      animationsRef.current.set(index, tabAnimation)

    })

  })

  function handleTab(index){

    if (tab === index){
      animationsRef.current.get(index).reverse()
      setTab(null)
    } else{
      if (tab !== null){
        animationsRef.current.get(tab).reverse()
      }
      animationsRef.current.get(index).play()
      setTab(index)
    }
  }

  function removeTab(index) {
    
    animationsRef.current.get(index).reverse()
    setTab(null)
  }

  

  return (
    <>

      {/* TAB 0 APPEARING FROM SIDE ON CLICK - PROJECTS */}
      
      <div className=" fixed h-full w-full z-1 tabs backdrop-filter backdrop-blur-[3px] cursor-pointer" onClick={() => removeTab(0)}>

          <div className="max-w-[800px] h-[100vh] overflow-y-auto bg-white p-6 sm:px-20" onClick={(e) => e.stopPropagation()}>
          
          <div className="flex justify-between gap-2">
            <h2>PROJECTS</h2>
            <h3 className="cursor-pointer" onClick={() => removeTab(0)}><b>X</b></h3>
          </div>  

          {Projectdata.map( (project, index) => (
            <div className="flex gap-5 py-2 flex-col pt-5 border-b-[2px] border-solid border-blue-900" key={index}>

              <h3>{project.header}</h3>

              <div className="flex flex-wrap flex-row gap-2">
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
                  <a href={project.github} className="primary-btn"><span>GITHUB</span></a>
                  <a href={project.website} className="primary-btn"><span>WEBSITE</span></a>
              </div>

            </div>
          ))}
          </div>

      </div>
      {/* TAB 1 APPEARING FROM SIDE ON CLICK - EDUCATION AND CAREER */}

      <div className="fixed h-full w-full z-1 tabs cursor-pointer " onClick={() => removeTab(1)}>
        {
          
          <div className="max-w-[800px] h-[100vh] overflow-y-auto bg-white p-6" onClick={(e) => e.stopPropagation()}>

          <div className="flex justify-between gap-2">
            <h2>Education and Career</h2>
            <h3 className="cursor-pointer" onClick={() => removeTab(1)}><b>X</b></h3>
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

      {/* TAB 2 APPEARING FROM SIDE ON CLICK - CV*/}

      <div className="fixed h-full w-full z-1 tabs cursor-pointer" onClick={() => removeTab(2)}>
        {<>
          <div className="text-right bg-white max-w-[800px] p-1 cursor-pointer text-xs">X</div>
          
          <div className="max-w-[800px] h-[100vh] overflow-y-auto bg-white " onClick={(e) => e.stopPropagation()}>
          
            <img src="/Images/CV_pdf.jpeg"/>
          
          
          </div>
        </>
        }
      </div>
      

      {/* MAIN PAGE WITH TILES */}

      <h1 className="px-14 hidden sm:block">Ahmed</h1>
      <div ref={contentRef} className="content-tiles p-6">
        
        { /* ---------------------------------------- CV TILE ---------------------------------------------- */ }

        <div className="col-span-3 sm:col-span-2 row-span-1 bg-[#93B2E0] flex flex-row justify-between ">
          <h2>View CV</h2>
          <h2 className="glow cursor-pointer" onClick={() => handleTab(2)}>+</h2>
        </div>
        
        { /* ---------------------------------------- EMPTY YELLOW TILE ---------------------------------------------- */ }

        <div className="hidden md:hidden 2xl:hidden 4xl:block col-span-1 row-span-1 bg-[#DFC202]">
          
        </div>
        
        { /* ---------------------------------------- EDUCATION TILE ---------------------------------------------- */ }

        <div className="col-span-3 sm:col-span-2 lg:col-span-3 xl:col-span-2 2xl:col-span-2 4xl:col-span-3 flex flex-col justify-between row-span-2 bg-[#9A9CD4]">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex justify-between">
              <h2>Education</h2>
              <h2 className="glow cursor-pointer" onClick={() => handleTab(1)}>+</h2>
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

        { /* ---------------------------------------- PROJECTS TILE ---------------------------------------------- */ }

        <div className="col-span-3 sm:col-span-2 row-span-2 justify-between p-3 flex flex-col bg-[#91C6CA]">

          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2>Highlight</h2>
              <h2 className="glow cursor-pointer" onClick={() => handleTab(0)}>+</h2>
            </div>
            <div>
              <h2>Projects</h2>
            </div>  
          </div>
          
          <div className="text-right">
            <h1>6</h1>
          </div>

        </div>


        { /* ---------------------------------------- ME TILE ---------------------------------------------- */ }

        <div className="text-right flex flex-col justify-end col-span-3 sm:col-span-2 row-span-2 lg:col-span-3 xl:col-span-2 2xl:col-span-2 3xl:col-span-3 4xl:col-span-2 bg-black" style={{backgroundImage:`url("/AREmoji_circular.png")`, backgroundPosition:'left', backgroundSize:'contain', backgroundRepeat:"no-repeat"}}>
          <h2 className="sm:hidden lg:block xl:hidden 2xl:block 4xl:hidden text-white">Ahmed</h2>
          <h3 className="sm:hidden lg:block xl:hidden 2xl:block 4xl:hidden text-white">Developer</h3>
        </div>

        { /* ---------------------------------------- LONDON TILE ---------------------------------------------- */ }

        <div className="col-span-3 sm:col-span-4 md:col-span-2 2xl:col-span-3 row-span-1 bg-[#FF987C] text-white backdrop-filter backdrop-blur-sm"  style={{backgroundImage:`url("/lodon.jpg")`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:"no-repeat"}}>
          <h2>Based in London</h2>
        </div>

        { /* ---------------------------------------- CONTACT TILE ---------------------------------------------- */ }

        <div className="col-span-3 row-span-3 md:col-span-2 lg:col-span-3 xl:col-span-2 2xl:row-span-1 4xl:row-span-2 4xl:col-span-3 bg-[#93C9A8]">
          <h2>Contact Me!</h2>
          <form className="flex justify-between flex-col h-80 gap-3">
            <div>
              <label id="name" htmlFor="name">Name</label>
              <input className="w-full" type="text" id="name" name="email" placeholder="Enter Name"/>
            </div>
            <div>
              <label id="email" htmlFor="email">Email</label>
              <input  className="w-full"type="text" id="email" name="email" placeholder="Enter Name"/>
            </div>
            <div className="grow ">
              <label id="message" htmlFor="message">Message</label>
              <textarea  className="w-full"type="text" id="message" name="message" placeholder="Enter Message"/>
            </div>
            <button className="badge cursor-pointer flex bg-[#6AB487] justify-center self-center">SEND</button>
          </form>
        </div>

        { /* ---------------------------------------- TECH STACK TILE ---------------------------------------------- */ }

        <div className="col-span-3 sm:col-span-3 md:col-span-2 2xl:row-span-1 2xl:col-span-3 4xl:col-span-2 4xl:row-span-2 row-span-3 bg-[#91C6CA]">
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

        { /* ---------------------------------------- ABOUT TILE ---------------------------------------------- */ }

        <div className="col-span-3 row-span-3 md:col-span-2 lg:col-span-3 xl:col-span-4 xl:row-span-2 2xl:row-span-2 2xl:col-span-3 4xl:row-span-2 bg-[#E5A8DF] flex flex-col gap-2">
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

        { /* ---------------------------------------- CAREER TILE ---------------------------------------------- */ }
        
        <div className="col-span-3 row-span-2 sm:col-span-3 md:col-span-2 2xl:col-span-3 2xl:row-span-1 4xl:row-span-1 4xl:col-span-2 bg-[#91C6CA]">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2>Career</h2>
              <h2 className="glow cursor-pointer" onClick={() => handleTab(1)}>+</h2>
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
        
        { /* ---------------------------------------- SOCIAL TILE ---------------------------------------------- */ }

        <div className="col-span-3 sm:col-span-3 md:col-span-2 3xl:col-span-3 4xl:col-span-2 row-span-1 bg-[#DFC202]">
          <h2>Socials</h2>
          <div className="flex flex-row gap-3 ustify-between p-2">
            <div className="text-black rounded-4xl py-2 px-3 sm:px-5 bg-[#EBD74F]"><a href="https://www.linkedin.com/in/ahmed-mohamed-haniffa-arfan-989267202/">LinkedIn</a></div>
            <div className="text-black rounded-4xl py-2 px-3 sm:px-5 bg-[#EBD74F]"><a href="mailto:ahmedmharfan@gmail.com">Email</a></div>
            <div className="text-black rounded-4xl py-2 px-3 sm:px-5 bg-[#EBD74F]"><a href="https://github.com/Wertasile">GitHub</a></div>
          </div>
        </div>

      </div>
    </>
  );
}
