/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jatin Kishore",
  title: "Hi all, I'm Jatin",
  subTitle: emoji(
    "A passionate Devops & Cloud Engineer 🚀 having an experience of building robust scalable applications with faultless instant deployments using Automation"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1s9rPQwPkDSznkAFcbAvtraO_CEoWPkP1/edit?usp=sharing&ouid=104329436919273413888&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JatinKishore",
  linkedin: "https://www.linkedin.com/in/jatinkishore-m/",
  gmail: "jatinkm02@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS & CLOUD ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Deploy and Manage Platforms to run applications, Automate all the Deployment and Productions Tasks for early deployment of application for production"
    ),
    
    emoji(
      "⚡ Worked in CI/CD Pipelines, Ansible, Terraform, Jenkins & Git Action, Docker and K8s"
    ),
    emoji(
      "⚡ Apart from DevOps I also have a broad knowledge on Front End and Backend Development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [        
    {
      skillName: "cloud",     
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",      
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }, 
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },       
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Velammal Institute of Technology",
      logo: require("./assets/images/VelammalLogo.jpg"),
      subHeader: "Bachelor of Engineering in Electronics and Communication Engineering",
      duration: "June 2020 - May 2024",
      desc: "Worked in 3 projects, conducted 1 workshop and published 1 journal",
      descBullets: [
        "CGPA :  8.26",
        "Anna University"
      ]
    },
    {
      schoolName: "Ponjesly Public School",
      logo: require("./assets/images/Ponjesly.jpg"),
      subHeader: "HSC",
      duration: "June 2019 - May 2020",
      descBullets: [
        "Percentage :  75%",
        "State Board"
      ]
    },
    {
      schoolName: "St. Joseph's Matric. Hr. Sec. School",
      logo: require("./assets/images/joseph.png"),
      subHeader: "SSLC",
      duration: "June 2017 - May 2018",
      descBullets: [
        "Percentage :  91%",
        "State Board"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Fullstack Development",
      progressPercentage: "40%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founder",
      link:"https://codeclub-officials.neocities.org/",
      company: "codeClub Community",
      companylogo: require("./assets/images/codeClub.png"),
      date: "September 2023 – Present ",
      desc: "Running a Non-Profit Community of 500+ students and helping them in their placements preparation and career development",
      descBullets: [
        "'Bid Your Price' a revolutionary project to connect clients with tight budgets and students who are eager to experience real-time projects.",
        "'FightClub' a free weekly coding contest with cash price to motivate students in coding",
        "Other than this weekly Guest Lectures, Daily Coding & Aptitude Questions, web development tasks are also conducted with the help of volunteers."
      ]
    },
    {
      role: "Embedded Intern",
      link:"https://zrae.global/",
      company: "ZRAE Globals",
      companylogo: require("./assets/images/ZRAE-global.jpeg"),
      date: "October 2022 – January 2023 ",
      desc: "Worked as a Horizontal Head of Embedded Systems team, Done research work on various projects to reduce the project cost without compromising in the quality.",
      descBullets: [
        "Achieved 66.67% cost reduction while developing a Prototype for an MSME project - 'TB DETECTOR MASK' ",
        "Built a RaspberryPi based remote system to sent live photos and GPS data from boats to a Web UI for an DRDO contest  - 'BLACK BOX for SHIPS' ",
        "Along with this also worked in various other paper works and presentations"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some devops projects you have worked on

const devopsProjects = {
  title: "Domain Projects",
  subtitle: "I have mentioned the projects with their names or techstacks I have used to in them to showcase my knowledge on those techstacks",
  projects: [
    {
      image: require("./assets/images/devops.png"),
      projectName: "DevOps",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aids.jpg"),
      projectName: "AI and Data Science",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/web.jpg"),
      projectName: "Web Development",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/embedded.png"),
      projectName: "Embedded Systems",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "AWARD WINNING PROJECTS",
  subtitle: "Projects that are recognized in stages",
  projects: [
    {
      image: require("./assets/images/MSME-Logo.png"),
      projectName: "Touch Responsive frame",
      projectDesc: "Providing Touch Responsiveness for Non-touch screen laptops using a sensor frame, Won 5.5 Lakhs fund from MSME",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/VelammalLogo.jpg"),
      projectName: "Varicose Veins Caring Kit",
      projectDesc: "Winner of Innovate Tech Expo 2022 and Finalist of StartUpMania 2022",
      footerLink: [
        {
          name: "Innovate Tech Expo 2022",
          url: ""
        },
        {
          name: "Finalist in StartupMania 2022",
          url: "https://drive.google.com/file/d/1wxCVCpvUiuxbJPejxfN2XwGlT4HVMrsr/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 📜 & Achievements🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AZURE CERTIFICATIONS",
      subtitle:
        "I have 3 certifications in Azure on various domains as follows",
      image: require("./assets/images/azure.png"),
      imageAlt: "Azure",
      footerLink: [
        {
          name: "AZ 900",
          url: "https://learn.microsoft.com/en-us/users/jatinkishore-2161/credentials/9250d79744ffd2c7"
        },
        {
          name: "DP 900",
          url: "https://learn.microsoft.com/en-us/users/jatinkishore-2161/credentials/8819714df4f7421f"
        },
        {
          name: "SC 900",
          url: "https://learn.microsoft.com/en-us/users/jatinkishore-2161/credentials/9c8dbe8275654155"
        }
      ]
    },
    {
      title: "NPTEL",
      subtitle:
        "I have taken 4 certifications related to Cloud and Networking and now a way close to a Domain certification",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL",
      footerLink: [
        {
          name: "Cloud Computing",
          url: "https://drive.google.com/file/d/1qdJq6w75ed3-qnOpMBvdK49nRMimnt8T/view?usp=sharing"
        },
        {
          name: "Google Cloud Computing",
          url: "https://drive.google.com/file/d/1EjHNLp69MLUGMBB-HAJrY6mzmapYSFZJ/view?usp=sharing"
        },
        {
          name: "Internet Of Things",
          url: "https://drive.google.com/file/d/1-Cjl7RIO9CLRKDekuBhZhsIdmgwpeBeg/view?usp=sharing"
        },
        {
          name: "Computer Networks and Protocols",
          url: "https://drive.google.com/file/d/1k9Z1g5RkrWpRkj26COjwhW0MSB6jKp_1/view?usp=sharing"
        },
      ]
    },
    {
      title: "GOOGLE",
      subtitle:
        "I have completed 2 professional Certificates of Google",
      image: require("./assets/images/google.png"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Data Analytics",
          url: "https://coursera.org/verify/professional-cert/3NCXCE3AVKHA"
        },
        {
          name: "Project Management",
          url: "https://coursera.org/verify/professional-cert/KYDNPSYLWMUX"
        }
      ]
    },

    {
      title: "PATENT WORK",
      subtitle: "Happy to say I got my first patent at the age of 21 for my project on Responsive Frame",
      image: require("./assets/images/patent.jpg"),
      imageAlt: "Patent",
      footerLink: [        
        {
          name: "Patent File",
          url: "https://drive.google.com/file/d/1HwSLdnkvk0H39PihMHj2WkF8ZcJgjueD/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    
    {
      url: "https://www.linkedin.com/posts/jatinkishore-m_docker-handwritten-notes-activity-7183514047047237633-f9c1?utm_source=share&utm_medium=member_desktop",
      title: "My Notes on Docker",
      description:
        "This covers my Experience Zero to Hero Course of Abhishek Veeramalla"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "LECTURES BY ME",
  subtitle: emoji(
    "I LOVE TO CONTRIBUTE TO THE TECH SOCIETY BY TEACHING WHATEVER I HAVE LEARNT"
  ),

  talks: [
    {
      title: "Docker & K8s ",
      subtitle: "Container vs VM | MultiStage Docker | Docker vs K8s | KOPS",
      slides_url: "https://docs.google.com/presentation/d/1fwCrjjpu4PfFYdmtDhjug4QtDaXhGHNERCPWhPosBaY/edit?usp=sharing",
      event_url: ""
    },
    {
      title: "Crack Coding Rounds",
      subtitle: "Patterns | Arrays | Recursion | LinkedList",
      slides_url: "https://docs.google.com/presentation/d/1VeLTTB15rrp8iKLGrZZwFrk9ABzK4ZSJB4qu8SHrl8Q/edit?usp=sharing",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7548883301",
  email_address: "jatinkm02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  devopsProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
