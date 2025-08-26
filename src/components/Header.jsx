import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import ButFirstCoffeeLogo from '../assets/butfirstcoffee-logo-stacked.png'


const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home"); // NEW: track active section
	const mobileMenuRef = useRef(null);
	const sections = ["home", "about", "skills", "projects", "contact"];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Detect active section while scrolling
			const scrollPosition = window.scrollY + 150; // adjust for header height
			let current = "home";
			sections.forEach((section) => {
				const element = document.getElementById(section);
				if (element && element.offsetTop <= scrollPosition) {
					current = section;
				}
			});
			setActiveSection(current);
		};

		const handleClickOutside = (e) => {
			// Close mobile menu
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
				setIsOpen(false);
			}

		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Styling function for active link
	const getLinkClass = (section) =>
		`pb-1 transition-all duration-300 ${activeSection === section
			? "border-b-2 border-[var(--primary-color)]"
			: "border-b-2 border-transparent"
		}`;

	return (
		<header
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
				? "bg-[var(--background-color)] text-[var(--text-color)] shadow-md"
				: "text-[var(--text-color)]"
				}`}
		>
			<div className="flex justify-between md:justify-around items-center h-16 px-5">
				<div>
					<Link to="/" reloadDocument>
						<img src={ButFirstCoffeeLogo} alt="ButFirstCofee-Logo" className="w-6 h-6 object-cover" />
					</Link>
				</div>

				{/* Desktop Nav */}
				<nav
					className={`hidden md:flex justify-center items-center gap-10 ${scrolled
						? "text-[var(--text-color)]"
						: "text-[var(--text-color)]"
						}`}
				>
					{sections.map((section) => (
						<HashLink
							key={section}
							smooth
							to={`#${section}`}
							className={getLinkClass(section)}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</HashLink>
					))}
				</nav>

				{/* Burger Icon */}
				<div className="md:hidden z-20">
					{isOpen ? (
						<X
							size={28}
							onClick={() => setIsOpen(false)}
							className={`cursor-pointer ${scrolled
								? "text-[var(--text-gray)]"
								: "text-[var(--text-gray)]"
								}`}
						/>
					) : (
						<Menu
							size={28}
							onClick={() => setIsOpen(true)}
							className={`cursor-pointer ${scrolled
								? "text-[var(--text-gray)]"
								: "text-[var(--text-gray)]"
								}`}
						/>
					)}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={mobileMenuRef}
				className={`absolute z-40 top-16 left-0 w-full ${scrolled
					? "bg-[var(--container-color)] text-[var(--text-color)]"
					: "bg-[var(--container-color)] text-[var(--text-color)]"
					} flex flex-col items-center gap-6 px-10 py-5 transition-all duration-300 md:hidden ${isOpen
						? "translate-x-0 opacity-100"
						: "-translate-x-[-130%] opacity-0 pointer-events-none"
					} ${scrolled
						? "text-[var(--text-color)]"
						: "text-[var(--text-color)]"
					}`}
			>
				{sections.map((section) => (
					<HashLink
						key={section}
						smooth
						to={`#${section}`}
						className={getLinkClass(section)}
						onClick={() => setIsOpen(false)}
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</HashLink>
				))}
			</div>
		</header>
	);
};

export default Header;
