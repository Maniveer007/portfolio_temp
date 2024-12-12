import React from "react"
import Image from "next/image"
import Link from "next/link"

const skills = [
  { skill: "Frontend" },
  { skill: "Solidity" },
  { skill: "Block chain" },
  { skill: "Backend" },
  { skill: "MERN Stack" },
  { skill: "Next.JS" },
  { skill: "React.JS" },
  { skill: "Data Structures and Algorithms" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-4xl font-bold text-center">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            
            <p>
              Hi, my name is Maniveer and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Blockchain  Developer
              based in India, Gujarat.
            </p>
            <br />
            <p>
              Iam an undergraduate final year student from Indian Institute of Information Technology Vadodara,Gujarat in 2025
              with a B.Tech in Computer Science Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making money on Freelancing,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that one should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="px-4 py-2 mt-2 mr-2 font-semibold text-gray-500 bg-gray-200 rounded"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/BG.png"
              alt=""
              width={400}
              height={400}
              className="hidden md:block md:relative md:bottom-4 md:left-19.8 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
