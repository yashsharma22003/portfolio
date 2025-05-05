"use client"; // Add this directive for React hooks (useEffect, useRef)

import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { useEffect, useRef } from "react"; // Import useEffect and useRef
import { gsap } from "gsap"; // Import gsap
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Import ScrollTrigger

// Register the ScrollTrigger plugin globally (or ensure it's done once)
gsap.registerPlugin(ScrollTrigger);

// Define interfaces for project and contract data for better type safety
interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  imageUrl: string; // Added imageUrl field
}

interface SmartContract {
  title: string;
  description: string;
  github: string;
}

// --- Sample Data ---
const featuredProjectsData: Project[] = [
  {
    title: "Aave Lending & Borrowing",
    description:
      "A decentralized lending platform with ERC20 interest tokens and dynamic rates.",
    link: "https://aave-lending-and-borrowing.vercel.app/",
    github: "https://github.com/yashsharma22003/Aave-Lending-And-Borrowing-",
    imageUrl: "/Aave-Clone.png", // <-- Replace with your actual image path
  },
  {
    title: "Uniswap Clone",
    description:
      "Crypto exchange dApp with ERC20 minting, swaps, and transaction history.",
    link: "https://uniswap-clone-k95th333f-yashsharmas-projects.vercel.app/",
    github: "https://github.com/yashsharma22003/Uniswap-clone",
    imageUrl: "/Uniswap-Clone.png", // <-- Replace with your actual image path
  },
  {
    title: "Decentralized Task Manager",
    description: "A decentralized application (dApp) for managing tasks using Ethereum smart contracts.",
    link: "https://task-manager-dapp-3wk7kxac5-yashsharmas-projects.vercel.app/",
    github: "https://github.com/yashsharma22003/task-manager-dapp",
    imageUrl: "/Task-Manager.png", // <-- Replace with your actual image path
  },
  {
    title: "Block-A-Litics",
    description:
      "Decentralized crypto analytics dApp with Chainlink price feeds integration.",
    link: "https://block-a-litics.vercel.app/",
    github: "https://github.com/yashsharma22003/Block-A-Litics",
    imageUrl: "/Blockalitics.png", // <-- Replace with your actual image path
  }

];

const skillsData: string[] = [
  "Ethereum (EVM)", "Solidity", "Foundry", "Hardhat",
  "React", "Next.js", "Tailwind CSS", "Node.js",
  "Express.js", "MongoDB", "TypeScript", "Ethers.js", "Chainlink"
];

const smartContractsData: SmartContract[] = [
  {
    title: "ERC721 NFT Contract",
    description: "A standard compliant ERC721 implementation for unique digital assets (NFTs) using OpenZeppelin.",
    github: "https://github.com/yashsharma22003/your-erc721-repo" // <-- Replace with your actual repo link
  },
  {
    title: "Decentralized Voting System",
    description: "Smart contract enabling on-chain voting for proposals, ensuring transparency and immutability.",
    github: "https://github.com/yashsharma22003/your-voting-repo" // <-- Replace with your actual repo link
  },
  {
    title: "Simple ERC20 Token",
    description: "A basic implementation of the ERC20 token standard for fungible tokens.",
    github: "https://github.com/yashsharma22003/your-erc20-repo" // <-- Replace with your actual repo link
  },
  {
    title: "Reentrancy Guard Example",
    description: "A contract demonstrating the implementation of a reentrancy guard to prevent common attacks.",
    github: "https://github.com/yashsharma22003/your-security-example-repo" // <-- Replace with your actual repo link
  },
];

const timelineData = [
  {
    title: "Cyfrin Ambassador",
    date: "May 2025 – Present",
    description: "Engaging with a global network of blockchain professionals through the Cyfrin Ambassador Program, fostering community growth and promoting blockchain security best practices."
  },
  {
    title: "Blockchain Developer Intern",
    date: "April 2025 – Present",
    description: "Developing and testing smart contracts using Solidity and Foundry. Collaborating on building decentralized applications (dApps) with Next.js and Ethers.js."
  },
  {
    title: "Frontend Developer Intern – AP Mobility India",
    date: "Aug 2024 – Jan 2025",
    description: "Built responsive and interactive user interfaces for web applications using Next.js, TypeScript, and Tailwind CSS. Collaborated with backend teams to integrate APIs."
  },
  {
    title: "Team Leader – Smart India Hackathon (SIH)",
    date: "2022 – 2023",
    description: "Led team SecureHer, qualifying for the Smart India Hackathon finale with a blockchain-based solution focused on enhancing women's safety and security."
  },
  {
    title: "Event Lead – ACM Student Chapter",
    date: "2022 – 2023",
    description: "Coordinated and managed technical workshops, coding competitions, hackathons, and community engagement events for the university's ACM chapter."
  }
];


export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // --- Hero Section Animation ---
      gsap.from(".hero-title", { opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.4, ease: "power3.out" });
      gsap.from(".hero-location", { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: "power3.out" });
      gsap.from(".hero-socials a", { opacity: 0, y: 20, duration: 0.5, delay: 0.8, stagger: 0.1, ease: "power2.out" });

      // --- Section Title Animations ---
      gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
        gsap.from(title, {
          opacity: 0, y: 40, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: title, start: "top 85%", toggleActions: "play none none none" }
        });
      });

      // --- Featured Projects Animation ---
      gsap.from(".project-card", {
        opacity: 0, y: 50, duration: 0.5, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".projects-grid", start: "top 80%", toggleActions: "play none none none" }
      });

      // --- Skills Animation ---
      gsap.from(".skill-item", {
        opacity: 0, scale: 0.8, duration: 0.3, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: ".skills-grid", start: "top 85%", toggleActions: "play none none none" }
      });

      // --- Smart Contracts Animation ---
      gsap.from(".contract-card", {
        opacity: 0, y: 50, duration: 0.5, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".contracts-grid", start: "top 85%", toggleActions: "play none none none" }
      });

      // --- Timeline Animation ---
      gsap.from(".timeline-item", {
        opacity: 0, x: -50, duration: 0.5, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".timeline-container", start: "top 80%", toggleActions: "play none none none" }
      });

      // --- Security Contributions Animation ---
      gsap.from(".security-card", {
        opacity: 0, y: 50, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".security-card", start: "top 85%", toggleActions: "play none none none" }
      });

      // --- Stalk Me Icons Animation ---
      gsap.from(".stalk-me-icons a", {
        opacity: 0, scale: 0.5, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".stalk-me-section", start: "top 85%", toggleActions: "play none none none" }
      });

      // --- Footer Animation ---
      gsap.from(".footer-text", {
        opacity: 0, y: 20, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".footer-text", start: "top 95%", toggleActions: "play none none none" }
      });

    }, mainRef);

    return () => {
      ctx.revert();
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-gray-950 text-white px-6 py-12 flex flex-col items-center overflow-x-hidden"
    >
      {/* HERO SECTION */}
      <section className="max-w-4xl text-center my-40 md:my-60 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title">
          Hi, I'm <span className="text-blue-500">Yash Sharma</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2 hero-subtitle">
          Blockchain Developer | Full Stack Web3 Engineer | Smart Contract Enthusiast
        </p>
        <p className="mb-8 hero-location">📍 Delhi, India</p>
        <div className="flex gap-4 justify-center mb-12 hero-socials">
          <Link href="https://github.com/yashsharma22003" target="_blank" aria-label="GitHub Profile">
            <Github className="hover:text-blue-500 transition-colors duration-300 ease-out" />
          </Link>
          <Link href="https://www.linkedin.com/in/yash-sharma-655985205/" target="_blank" aria-label="LinkedIn Profile">
            <Linkedin className="hover:text-blue-500 transition-colors duration-300 ease-out" />
          </Link>
          <Link href="https://x.com/yash_ether" target="_blank" aria-label="Twitter Profile">
            <Twitter className="hover:text-blue-500 transition-colors duration-300 ease-out" />
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS - MODIFIED */}
      <section className="w-full max-w-4xl mb-20">
        <h2 className="text-2xl font-semibold text-left mb-8 section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 projects-grid">
          {featuredProjectsData.map((project) => (
            <div
              key={project.title}
              // Removed height/min-height, let content dictate size. Added overflow hidden for image rounding
              className="bg-gray-900 rounded-2xl shadow-lg flex flex-col justify-between transition-transform duration-300 ease-out hover:scale-[1.03] project-card overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-56"> {/* Fixed height container */}
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  fill
                  style={{ objectFit: 'cover' }} // Use objectFit cover
                  className="transition-opacity duration-300 ease-out group-hover:opacity-90" // Basic styling
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes - adjust as needed
                />
              </div>

              {/* Content Below Image */}
              <div className="p-5 flex flex-col flex-grow"> {/* Added flex-grow */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}

                {/* Buttons at the bottom */}
                <div className="flex gap-3 mt-auto pt-2"> {/* Increased gap */}
                  <Link href={project.link} target="_blank" className="inline-block flex-1">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-out text-sm w-full">
                      Live Demo
                    </button>
                  </Link>
                  <Link href={project.github} target="_blank" className="inline-block flex-1">
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ease-out text-sm w-full flex items-center justify-center gap-2">
                      <Github size={16} />
                      View Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* END OF FEATURED PROJECTS */}


      {/* SKILLS */}
      <section className="w-full max-w-4xl mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-left mb-8 section-title">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 skills-grid">
          {skillsData.map((skill) => (
            <div key={skill} className="bg-gray-900 rounded-lg p-4 text-center transition-colors duration-500 ease-out hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:text-white shadow-md skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* SMART CONTRACT SHOWCASE */}
      <section className="w-full max-w-4xl mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-left mb-8 section-title">Smart Contract Showcase</h2>
        <div className="grid md:grid-cols-2 gap-8 contracts-grid">
          {smartContractsData.map((contract) => (
            <div
              key={contract.title}
              className="bg-gray-900 rounded-2xl p-5 shadow-lg flex flex-col justify-between h-full min-h-[160px] transition-colors duration-500 ease-out hover:bg-gradient-to-r hover:from-gray-800 hover:to-indigo-900 contract-card"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{contract.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{contract.description}</p>
              </div>
              <div className="mt-auto pt-2">
                <Link href={contract.github} target="_blank" className="inline-block w-full">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-out text-sm w-full flex items-center justify-center gap-2">
                    <Github size={16} />
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* END OF SMART CONTRACT SHOWCASE */}


      {/* TIMELINE */}
      <section className="w-full max-w-4xl mt-16 mb-20">
        <h1 className="text-2xl font-semibold text-left mb-10 section-title">What am I doing?</h1>
        <div className="border-l-2 border-blue-500 pl-6 md:pl-8 space-y-10 relative timeline-container">
          <div className="absolute -left-[1px] -top-1 w-4 h-4 bg-gray-950 rounded-full border-2 border-blue-500"></div>
          {timelineData.map((item, index) => (
            <div className="relative timeline-item" key={item.title + index}>
              <div className="absolute -left-[22px] md:-left-[26px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-950"></div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <span className="text-sm text-gray-400 block mb-1">{item.date}</span>
              <p className="text-gray-300 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY CONTRIBUTIONS */}
      <section className="w-full max-w-4xl mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-left mb-10 section-title">Security Contributions</h2>
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg transition-colors duration-500 ease-out hover:bg-gradient-to-r hover:from-gray-800 hover:to-emerald-900 security-card"> {/* Adjusted hover */}
          <h3 className="text-xl font-semibold mb-2">Cyfrin Updraft: First Flight</h3>
          <span className="text-sm text-gray-400 block mb-1">May 2025</span>
          <p className="text-gray-300 mt-3">
            Participated in Cyfrin's smart contract security challenge focusing on an inheritable smart contract wallet. Identified and successfully submitted a valid medium-severity vulnerability report, contributing to the project's overall security.
          </p>
          <div className="mt-5">
            <Link
              href="https://codehawks.cyfrin.io/c/2025-03-inheritable-smart-contract-wallet/results?lt=contest&page=1&sc=xp&sj=reward&t=report"
              target="_blank"
              className="inline-block bg-emerald-700 text-white px-5 py-2 rounded-lg hover:bg-emerald-800 transition-colors duration-300 ease-out text-base" // Adjusted colors
            >
              View Official Results →
            </Link>
          </div>
        </div>
      </section>

      {/* STALK ME */}
      <section className="w-full max-w-4xl mt-16 stalk-me-section">
        <h2 className="text-2xl font-semibold text-center mb-10 section-title">Stalk Me</h2>
        <div className="flex gap-6 justify-center mb-12 stalk-me-icons">
          <Link href="https://github.com/yashsharma22003" target="_blank" aria-label="GitHub Profile">
            <Github className="hover:text-blue-500 transition-colors duration-300 ease-out" size={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/yash-sharma-655985205/" target="_blank" aria-label="LinkedIn Profile">
            <Linkedin className="hover:text-blue-500 transition-colors duration-300 ease-out" size={32} />
          </Link>
          <Link href="https://x.com/yash_ether" target="_blank" aria-label="Twitter Profile">
            <Twitter className="hover:text-blue-500 transition-colors duration-300 ease-out" size={32} />
          </Link>
          <Link href="mailto:yashsharma22003@gmail.com" target="_blank" aria-label="Email Yash Sharma">
            <Mail className="hover:text-blue-500 transition-colors duration-300 ease-out" size={32} />
          </Link>
          <Link href="https://yashsharma.dev" target="_blank" aria-label="Personal Website">
            <Globe className="hover:text-blue-500 transition-colors duration-300 ease-out" size={32} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 mb-8 text-gray-500 text-sm footer-text">
        <p> Made with love 🤍 by @Yash</p>
      </footer>
    </main>
  );
}