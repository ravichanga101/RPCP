"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu,
  ChevronDown,
  FlaskConical,
  Leaf,
  Microscope,
  BookCopy,
  FileText,
  Banknote,
  Award,
  User,
  Star,
  Lightbulb,
  Download,
  History,
  BookCheck,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Updated navStructure with icons for each item
const navStructure = {
  main: [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    {
      label: "Facilities",
      items: [
        {
          href: "/facilities/classroom",
          label: "Classrooms",
          description: "Modern air-conditioned learning spaces",
          icon: <BookCopy className="h-5 w-5" />,
        },
        {
          href: "/facilities/computer-lab",
          label: "Computer Lab",
          description: "Advanced computational facilities",
          icon: <Microscope className="h-5 w-5" />,
        },
        {
          href: "/facilities/departmental-lab",
          label: "Departmental Laboratory",
          description: "Comprehensive lab facilities",
          icon: <FlaskConical className="h-5 w-5" />,
        },
        {
          href: "/facilities/library",
          label: "Library",
          description: "Gateway to pharmaceutical knowledge",
          icon: <BookCheck className="h-5 w-5" />,
        },
        {
          label: "State of Art Facility",
          description: "World-class research infrastructure",
          icon: <Star className="h-5 w-5" />,
          featured: true,
          subItems: [
            {
              href: "/facilities/animal-house",
              label: "Animal House",
              icon: <FlaskConical className="h-4 w-4" />,
            },
            {
              href: "/facilities/cell-culture-lab",
              label: "Cell Culture Lab",
              icon: <FlaskConical className="h-4 w-4" />,
            },
            {
              href: "/facilities/aseptic-lab",
              label: "Aseptic Lab",
              icon: <FlaskConical className="h-4 w-4" />,
            },
            {
              href: "/facilities/zebrafish",
              label: "Zebrafish",
              icon: <FlaskConical className="h-4 w-4" />,
            },
            {
              href: "/facilities/herbal-garden",
              label: "Herbal Garden",
              icon: <Leaf className="h-4 w-4" />,
            },
          ],
        },
      ],
    },
    {
      label: "Student's Corner",
      items: [
        {
          href: "https://drive.google.com/drive/folders/1NzrZbruW1bZPM-pZvWvbiVfakki5B_PP",
          label: "Syllabus",
          icon: <BookCopy className="h-4 w-4" />,
        },
        {
          href: "https://charusat.edu.in:912/OthPaymentApp/",
          label: "Online Transcript",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          href: "https://support.charusat.edu.in/FeesPaymentApp/frmpayment.aspx",
          label: "Pay Fees",
          icon: <Banknote className="h-4 w-4" />,
        },
        {
          href: "https://charusat.edu.in:912/Uniexamresult/",
          label: "University Result",
          icon: <Award className="h-4 w-4" />,
        },
        {
          href: "/files/students_council.pdf",
          label: "Student Council",
          icon: <User className="h-4 w-4" />,
        },
        {
          href: "/files/extension_activities.pdf",
          label: "Extension Activities",
          icon: <Star className="h-4 w-4" />,
        },
        {
          href: "https://scpit.knimbus.com/portal/v2/custom/questions",
          label: "Old Question Paper",
          icon: <History className="h-4 w-4" />,
        },
      ],
    },
    { href: "/research", label: "Research" },
    { href: "/placement", label: "Placement" },
    { href: "/faculty", label: "Staff" },
    { href: "/about", label: "About Us" },
    { href: "#footer", label: "Contact", isScroll: true },
  ],
};

// Compact Facilities dropdown
const ListItem = ({ href, label, icon, featured = false, subItems }) => {
  if (subItems) {
    return (
      <li className="relative">
        <details className="group">
          <summary
            className={`group flex items-center gap-3 select-none rounded-lg p-3 transition-all duration-200 cursor-pointer list-none ${
              featured ? "bg-amber-50 hover:bg-amber-100" : "hover:bg-blue-50"
            }`}
          >
            <div
              className={`h-6 w-6 rounded-md flex items-center justify-center ${
                featured
                  ? "bg-amber-500 text-white"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {icon}
            </div>
            <span className="text-sm font-medium text-slate-800 flex-1">
              {label}
            </span>
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pl-6 mt-1 space-y-1">
            {subItems.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.href}
                className="flex items-center gap-2 rounded-md p-2 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {subItem.icon}
                <span>{subItem.label}</span>
              </Link>
            ))}
          </div>
        </details>
      </li>
    );
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          target={href.endsWith(".pdf") ? "_blank" : undefined}
          rel={href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
          className={`group flex items-center gap-3 select-none rounded-lg p-3 transition-all duration-200 ${
            featured ? "bg-amber-50 hover:bg-amber-100" : "hover:bg-blue-50"
          }`}
        >
          <div
            className={`h-6 w-6 rounded-md flex items-center justify-center ${
              featured ? "bg-amber-500 text-white" : "bg-blue-100 text-blue-600"
            }`}
          >
            {icon}
          </div>
          <span className="text-sm font-medium text-slate-800">{label}</span>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

// Compact Student's Corner dropdown
const SmallListItem = ({ href, label, icon }) => (
  <NavigationMenuLink asChild>
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 select-none rounded-md p-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
    >
      <span className="text-slate-500">{icon}</span>
      {label}
    </Link>
  </NavigationMenuLink>
);

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navClasses = isScrolled
    ? "bg-white/80 backdrop-blur-lg shadow-sm text-slate-800 border-b border-slate-200/80"
    : "bg-slate-900/20 backdrop-blur-sm text-slate-100 border-b border-white/20";

  const linkColor = isScrolled ? "text-slate-700" : "text-slate-100";
  const hoverColor = isScrolled ? "hover:text-slate-900" : "hover:text-white";
  const activeLinkColor = isScrolled
    ? "text-amber-600 bg-amber-500/10"
    : "text-amber-400 bg-amber-500/10";

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:outline-none"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/images/rpcplogo.png"
                alt="RPCP College Logo"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                <div className="font-semibold">Ramanbhai Patel</div>
                <div className="text-xs opacity-80">College of Pharmacy</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navStructure.main.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger
                          className={`text-sm font-medium transition-colors duration-300 bg-transparent focus:bg-transparent data-[state=open]:bg-black/5 px-4 py-2 rounded-full ${
                            isScrolled
                              ? "!text-black hover:!text-gray-800"
                              : "!text-white hover:!text-gray-200"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {item.label === "Facilities" ? (
                            <ul className="w-[320px] p-3 bg-white rounded-xl shadow-lg border border-slate-200 max-h-[500px] overflow-y-auto">
                              {item.items.map((subItem) => (
                                <ListItem key={subItem.label} {...subItem} />
                              ))}
                            </ul>
                          ) : (
                            <ul className="w-[400px] p-3 grid grid-cols-2 gap-1 bg-white rounded-xl shadow-lg border border-slate-200">
                              {item.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <SmallListItem {...subItem} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : item.isScroll ? (
                      <button
                        onClick={scrollToFooter}
                        className={`relative h-10 px-4 py-2 inline-flex items-center text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-full ${
                          isScrolled
                            ? "text-slate-700 hover:text-slate-900"
                            : "text-slate-100 hover:text-white"
                        }
                        after:content-[""] after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 hover:after:w-1/3 after:transition-all after:duration-300 ${
                          isScrolled
                            ? "after:bg-amber-500"
                            : "after:bg-amber-400"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative h-10 px-4 py-2 inline-flex items-center text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-full ${
                          isScrolled
                            ? "text-slate-700 hover:text-slate-900"
                            : "text-slate-100 hover:text-white"
                        } ${pathname === item.href ? activeLinkColor : ""}
                        after:content-[""] after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 hover:after:w-1/3 after:transition-all after:duration-300 ${
                          isScrolled
                            ? "after:bg-amber-500"
                            : "after:bg-amber-400"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-2 hover:bg-black/10 ${
                    isScrolled
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-slate-100 hover:text-white"
                  }`}
                >
                  <span className="sr-only">Open menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white text-slate-900 w-[85%] sm:max-w-sm p-0"
              >
                <SheetHeader className="p-4 border-b border-slate-200">
                  <SheetTitle className="flex items-center gap-3 text-base">
                    <img
                      src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png"
                      alt="RPCP"
                      className="h-10 w-auto"
                    />
                    <span>College of Pharmacy</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="px-2 py-3 max-h-[calc(100dvh-5rem)] overflow-y-auto">
                  <div className="space-y-1">
                    {navStructure.main.map((item) => (
                      <div key={item.label} className="rounded-md">
                        {item.items ? (
                          <>
                            <button
                              className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-slate-100 rounded-md transition-colors"
                              onClick={() =>
                                setOpenSection(
                                  openSection === item.label
                                    ? null
                                    : item.label,
                                )
                              }
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  openSection === item.label
                                    ? "rotate-180 text-amber-500"
                                    : ""
                                }`}
                              />
                            </button>
                            {openSection === item.label && (
                              <div className="pl-4 pt-1 pb-2 border-l-2 border-amber-200 ml-4">
                                {item.items.map((subItem) => (
                                  <div key={subItem.label}>
                                    {subItem.subItems ? (
                                      // Nested item with sub-items
                                      <details className="group mb-1">
                                        <summary className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-500/10 rounded-md cursor-pointer list-none">
                                          <span>{subItem.label}</span>
                                          <ChevronDown className="h-3 w-3 transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="pl-4 pt-1 space-y-1">
                                          {subItem.subItems.map(
                                            (nestedItem) => (
                                              <Link
                                                key={nestedItem.label}
                                                href={nestedItem.href}
                                                className="block px-3 py-2 text-xs text-slate-600 hover:text-amber-600 hover:bg-amber-500/10 rounded-md transition-all"
                                                onClick={() => setIsOpen(false)}
                                              >
                                                {nestedItem.label}
                                              </Link>
                                            ),
                                          )}
                                        </div>
                                      </details>
                                    ) : (
                                      // Regular item
                                      <Link
                                        href={subItem.href}
                                        target={
                                          subItem.href.startsWith("http") ||
                                          subItem.href.endsWith(".pdf")
                                            ? "_blank"
                                            : undefined
                                        }
                                        rel={
                                          subItem.href.startsWith("http") ||
                                          subItem.href.endsWith(".pdf")
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        className="block px-3 py-2.5 text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-500/10 rounded-md transition-all"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        ) : item.isScroll ? (
                          <button
                            onClick={() => {
                              scrollToFooter();
                              setIsOpen(false);
                            }}
                            className="block px-3 py-3 text-base font-medium rounded-md transition-colors whitespace-nowrap hover:bg-slate-100 w-full text-left"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={`block px-3 py-3 text-base font-medium rounded-md transition-colors whitespace-nowrap ${
                              pathname === item.href
                                ? "text-amber-600 bg-amber-500/10"
                                : "hover:bg-slate-100"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

// // "use client";

// // import Link from "next/link";
// // import Image from "next/image";
// // import { usePathname } from "next/navigation";
// // import { useState, useEffect } from "react";
// // import { Menu, GraduationCap, ChevronDown } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
// // import {
// //   NavigationMenu,
// //   NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// //   NavigationMenuTrigger,
// // } from "@/components/ui/navigation-menu";

// // const navStructure = {
// //   main: [
// //     { href: "/", label: "Home" },
// //     { href: "/programs", label: "Programs" },
// //     {
// //       label: "Facilities",
// //       items: [
// //         {
// //           href: "/facilities/labs",
// //           label: "Laboratories",
// //           description: "State-of-the-art research facilities",
// //         },
// //         {
// //           href: "/facilities/herbal-garden",
// //           label: "Herbal Garden",
// //           description: "2000 sq.m medicinal plants collection",
// //         },
// //         {
// //           href: "/facilities/testing",
// //           label: "Testing Facilities",
// //           description: "Pharmaceutical research & development",
// //         },
// //       ],
// //     },
// //     {
// //       label: "Student's Corner",
// //       items: [
// //         {
// //           href: "https://drive.google.com/drive/folders/1NzrZbruW1bZPM-pZvWvbiVfakki5B_PP",
// //           label: "Syllabus",
// //           description: "Course outlines and syllabi",
// //         },
// //         {
// //           href: "https://charusat.edu.in:912/OthPaymentApp/",
// //           label: "Online Transcript",
// //           description: "Apply for transcript and related documents",
// //         },
// //         {
// //           href: "https://support.charusat.edu.in/FeesPaymentApp/frmpayment.aspx",
// //           label: "Pay Fees",
// //           description: "Student fees payment portal",
// //         },
// //         {
// //           href: "https://charusat.edu.in:912/Uniexamresult/",
// //           label: "University Result",
// //           description: "Check university examination results",
// //         },
// //         {
// //           href: "/students_council.pdf",
// //           label: "Student Council",
// //           description: "Student council information",
// //         },
// //         {
// //           href: "/extension_activities.pdf",
// //           label: "Extension Activities",
// //           description: "Outreach and extension activities",
// //         },
// //         {
// //           href: "/cocurricular_activities.pdf",
// //           label: "Co-curricular Activities",
// //           description: "Academic-linked activities",
// //         },
// //         {
// //           href: "/extra_curricular_activities.pdf",
// //           label: "Extra-curricular Activities",
// //           description: "Clubs and student initiatives",
// //         },
// //         {
// //           href: "/sports_activities.pdf",
// //           label: "Sports Activities",
// //           description: "Sports and athletics",
// //         },
// //         {
// //           href: "/innovative_idea_box.pdf",
// //           label: "Innovative Idea Box",
// //           description: "Share innovative ideas",
// //         },
// //         {
// //           href: "/IIC.pdf",
// //           label: "Institute Innovation Council",
// //           description: "IIC related documents",
// //         },
// //         {
// //           href: "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO",
// //           label: "Download",
// //           description: "Brochures, forms and resources",
// //         },
// //         {
// //           href: "https://drive.google.com/drive/u/1/folders/1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW",
// //           label: "Old Question Paper",
// //           description: "Previous years' question papers",
// //         },
// //       ],
// //     },
// //     { href: "/research", label: "Research" },
// //     { href: "/placement", label: "Placement" },
// //     { href: "/faculty", label: "Faculty" },
// //     { href: "/about", label: "About Us" },
// //     { href: "/contact", label: "Contact" },
// //   ],
// // };

// // export function MainNav() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [openSection, setOpenSection] = useState(null);
// //   const pathname = usePathname();
// //   const [isHeroInView, setIsHeroInView] = useState(true);

// //   useEffect(() => {
// //     const hero = document.getElementById("hero");
// //     if (!hero || typeof IntersectionObserver === "undefined") return;
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         setIsHeroInView(entries[0]?.isIntersecting ?? false);
// //       },
// //       { root: null, rootMargin: "-80px 0px 0px 0px", threshold: 0 }
// //     );
// //     observer.observe(hero);
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <>
// //          <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/20 backdrop-blur-2xl border-b border-white/20 shadow-lg`}>
// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-between h-20">
// //                      {/* Logo */}
// //            <Link href="/" className="flex items-center group">
// //              <div className="flex items-center space-x-3">
// //                <img
// //                  src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png"
// //                  alt="RPCP College Logo"
// //                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
// //                />
// //                <div className={`${isHeroInView ? "text-white" : "text-gray-900"}`}>
// //                  <div className="text-xs opacity-80">College of Pharmacy</div>
// //                </div>
// //              </div>
// //            </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center">
// //             <NavigationMenu>
// //               <NavigationMenuList className="gap-2">
// //                 {navStructure.main.map((item) => (
// //                   <NavigationMenuItem key={item.label}>
// //                     {item.items ? (
// //                       <>
// //                                                                          <NavigationMenuTrigger className={`h-10 px-4 ${isHeroInView ? "text-white hover:text-yellow-300" : "text-gray-900 hover:text-blue-700"} data-[state=open]:text-yellow-300 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-transparent relative hover:underline decoration-yellow-300 decoration-2 underline-offset-4`}>
// //                           {item.label}
// //                         </NavigationMenuTrigger>
// //                                                  <NavigationMenuContent>
// //                           <ul className="grid w-[520px] gap-2 p-4 md:w-[560px] md:grid-cols-2 bg-white/95 backdrop-blur rounded-xl shadow-xl ring-1 ring-blue-100/70">
// //                              {item.items.map((subItem) => (
// //                                <li key={subItem.label}>
// //                                  <NavigationMenuLink asChild>
// //                                                                         <Link
// //                                        href={subItem.href}
// //                                       className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-blue-50/70 focus:bg-blue-50/70 focus:ring-2 focus:ring-blue-300/60 relative group"
// //                                      >
// //                                                                        <div className="text-sm font-semibold leading-none mb-1 text-gray-900">
// //                                       {subItem.label}
// //                                     </div>
// //                                     <p className="text-xs text-gray-600 line-clamp-2">
// //                                       {subItem.description}
// //                                     </p>
// //                                     <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
// //                                   </Link>
// //                                </NavigationMenuLink>
// //                              </li>
// //                            ))}
// //                          </ul>
// //                        </NavigationMenuContent>
// //                       </>
// //                     ) : (
// //                                              <Link
// //                         href={item.href}
// //                         className={`h-10 px-4 inline-flex items-center text-sm font-medium transition-all duration-300 relative hover:underline decoration-yellow-300 decoration-2 underline-offset-4 whitespace-nowrap ${
// //                           pathname === item.href
// //                             ? "text-yellow-300"
// //                             : isHeroInView ? "text-white hover:text-yellow-300" : "text-gray-900 hover:text-blue-700"
// //                         }`}
// //                       >
// //                         {item.label}
// //                       </Link>
// //                     )}
// //                   </NavigationMenuItem>
// //                 ))}
// //               </NavigationMenuList>
// //             </NavigationMenu>
// //           </div>

// //           {/* Right Side Actions - Removed for now */}
// //           <div className="hidden lg:flex items-center space-x-4">
// //             {/* Buttons removed as requested */}
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="lg:hidden">
// //                          <Button
// //                variant="ghost"
// //                className="text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
// //                onClick={() => setIsOpen(true)}
// //              >
// //                <Menu className="h-6 w-6" />
// //              </Button>
// //           </div>
// //         </div>

// //                                    {/* Mobile Navigation */}
// //           <Sheet open={isOpen} onOpenChange={setIsOpen}>
// //             <SheetContent side="right" className="bg-gradient-to-b from-gray-900 to-slate-900 text-white border-l border-white/10 w-[85%] sm:max-w-sm p-0">
// //               <div className="p-4 border-b border-white/10 flex items-center gap-3">
// //                 <img src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png" alt="RPCP" className="h-10 w-auto" />
// //                 <span className="text-sm font-medium opacity-80">College of Pharmacy</span>
// //               </div>
// //               <div className="px-2 py-3 max-h-[calc(100dvh-5rem)] overflow-y-auto">
// //                 <div className="space-y-1">
// //                   {navStructure.main.map((item) => (
// //                     <div key={item.label} className="rounded-md">
// //                       {item.items ? (
// //                         <>
// //                           <button
// //                             className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-white/5 rounded-md transition-colors"
// //                             onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
// //                           >
// //                             <span>{item.label}</span>
// //                             <ChevronDown className={`h-4 w-4 transition-transform ${openSection === item.label ? "rotate-180 text-yellow-300" : ""}`} />
// //                           </button>
// //                           {openSection === item.label && (
// //                             <div className="pl-2 pb-2">
// //                               {item.items.map((subItem) => (
// //                                 <Link
// //                                   key={subItem.label}
// //                                   href={subItem.href}
// //                                   className="block px-3 py-2 text-sm text-gray-300 hover:text-yellow-300 hover:bg-white/5 rounded-md transition-colors"
// //                                   onClick={() => setIsOpen(false)}
// //                                 >
// //                                   {subItem.label}
// //                                 </Link>
// //                               ))}
// //                             </div>
// //                           )}
// //                         </>
// //                       ) : (
// //                         <Link
// //                           href={item.href}
// //                           className="block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-md transition-colors whitespace-nowrap"
// //                           onClick={() => setIsOpen(false)}
// //                         >
// //                           {item.label}
// //                         </Link>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //                 {/* Mobile action buttons removed as requested */}
// //               </div>
// //             </SheetContent>
// //           </Sheet>
// //       </div>
// //     </nav>

// //     </>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Menu, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// // The navigation structure remains the same
// const navStructure = {
//   main: [
//     { href: "/", label: "Home" },
//     { href: "/programs", label: "Programs" },
//     {
//       label: "Facilities",
//       items: [
//         { href: "/facilities/labs", label: "Laboratories", description: "State-of-the-art research facilities" },
//         { href: "/facilities/herbal-garden", label: "Herbal Garden", description: "2000 sq.m medicinal plants collection" },
//         { href: "/facilities/testing", label: "Testing Facilities", description: "Pharmaceutical research & development" },
//       ],
//     },
//     {
//       label: "Student's Corner",
//       items: [
//         { href: "https://drive.google.com/drive/folders/1NzrZbruW1bZPM-pZvWvbiVfakki5B_PP", label: "Syllabus", description: "Course outlines and syllabi" },
//         { href: "https://charusat.edu.in:912/OthPaymentApp/", label: "Online Transcript", description: "Apply for transcript and related documents" },
//         { href: "https://support.charusat.edu.in/FeesPaymentApp/frmpayment.aspx", label: "Pay Fees", description: "Student fees payment portal" },
//         { href: "https://charusat.edu.in:912/Uniexamresult/", label: "University Result", description: "Check university examination results" },
//         { href: "/students_council.pdf", label: "Student Council", description: "Student council information" },
//         { href: "/extension_activities.pdf", label: "Extension Activities", description: "Outreach and extension activities" },
//         { href: "/cocurricular_activities.pdf", label: "Co-curricular Activities", description: "Academic-linked activities" },
//         { href: "/extra_curricular_activities.pdf", label: "Extra-curricular Activities", description: "Clubs and student initiatives" },
//         { href: "/sports_activities.pdf", label: "Sports Activities", description: "Sports and athletics" },
//         { href: "/innovative_idea_box.pdf", label: "Innovative Idea Box", description: "Share innovative ideas" },
//         { href: "/IIC.pdf", label: "Institute Innovation Council", description: "IIC related documents" },
//         { href: "https://drive.google.com/drive/folders/10-XqFw6ISXnDeyajK8oB3YIIj6NfrIyO", label: "Download", description: "Brochures, forms and resources" },
//         { href: "https://drive.google.com/drive/u/1/folders/1U1hIPybwqdsF9Nn_K6QKom0Kg5yAWCaW", label: "Old Question Paper", description: "Previous years' question papers" },
//       ],
//     },
//     { href: "/research", label: "Research" },
//     { href: "/placement", label: "Placement" },
//     { href: "/faculty", label: "Faculty" },
//     { href: "/about", label: "About Us" },
//     { href: "/contact", label: "Contact" },
//   ],
// };

// // Reusable component for dropdown items to keep the code DRY
// const ListItem = ({ href, label }) => (
//   <li>
//     <NavigationMenuLink asChild>
//       <Link
//         href={href}
//         className="block select-none rounded-md p-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-amber-600 focus:bg-slate-100"
//       >
//         {label}
//       </Link>
//     </NavigationMenuLink>
//   </li>
// );

// export function MainNav() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSection, setOpenSection] = useState(null);
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Simplified scroll detection for a cleaner navbar transition
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navClasses = isScrolled
//     ? "bg-white/80 backdrop-blur-lg shadow-sm text-slate-800 border-b border-slate-200/80"
//     : "bg-slate-900/20 backdrop-blur-sm text-slate-100 border-b border-white/20";

//   const linkColor = isScrolled ? "text-slate-700" : "text-slate-100";
//   const hoverColor = isScrolled ? "hover:text-slate-900" : "hover:text-white";
//   const activeLinkColor = isScrolled ? "text-amber-600 bg-amber-500/10" : "text-amber-400 bg-amber-500/10";

//   return (
//     <nav className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <Link href="/" className="flex items-center group">
//             <div className="flex items-center space-x-3">
//               <img
//                 src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png"
//                 alt="RPCP College Logo"
//                 className="h-16 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
//               />
//               <div className={`transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
//                 <div className="font-semibold">Ramanbhai Patel</div>
//                 <div className="text-xs opacity-80">College of Pharmacy</div>
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           {/* <div className="hidden lg:flex items-center">
//             <NavigationMenu>
//               <NavigationMenuList className="gap-1">
//                 {navStructure.main.map((item) => (
//                   <NavigationMenuItem key={item.label}>
//                     {item.items ? (
//                       <>
//                         <NavigationMenuTrigger className={`text-sm font-medium transition-colors duration-300 bg-transparent ${linkColor} ${hoverColor} focus:bg-transparent data-[state=open]:bg-black/5 px-4 py-2 rounded-full`}>
//                           {item.label}
//                         </NavigationMenuTrigger>
//                         <NavigationMenuContent>
//                           <ul className="grid w-[320px] gap-1.5 p-2 md:w-[360px] md:grid-cols-1 bg-white rounded-lg shadow-lg border border-slate-200/70">
//                             {item.items.map((subItem) => (
//                               <ListItem key={subItem.label} {...subItem} />
//                             ))}
//                           </ul>
//                         </NavigationMenuContent>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         className={`group relative h-10 px-4 py-2 inline-flex items-center text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-full ${linkColor} ${hoverColor} ${pathname === item.href ? activeLinkColor : ''}`}
//                       >
//                         {item.label}
//                         <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-1/3 transition-all duration-300 ${isScrolled ? 'bg-amber-500' : 'bg-amber-400'}`}></span>
//                       </Link>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div> */}

//           <div className="hidden lg:flex items-center">
//             <NavigationMenu>
//               {/* Make sure there is NO 'group' class on this list element */}
//               <NavigationMenuList className="gap-1">
//                 {navStructure.main.map((item) => (
//                   <NavigationMenuItem key={item.label}>
//                     {item.items ? (
//                       <>
//                         <NavigationMenuTrigger className={`text-sm font-medium transition-colors duration-300 bg-transparent ${linkColor} ${hoverColor} focus:bg-transparent data-[state=open]:bg-black/5 px-4 py-2 rounded-full`}>
//                           {item.label}
//                         </NavigationMenuTrigger>
//                         <NavigationMenuContent>
//                           <ul className="grid w-[480px] gap-2 p-4 md:w-[520px] md:grid-cols-2 bg-white rounded-xl shadow-lg border border-slate-200/70">
//                             {item.items.map((subItem) => (
//                               <ListItem key={subItem.label} {...subItem} />
//                             ))}
//                           </ul>
//                         </NavigationMenuContent>
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         className={`relative h-10 px-4 py-2 inline-flex items-center text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-full ${linkColor} ${hoverColor} ${pathname === item.href ? activeLinkColor : ''}
//                         after:content-[""] after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 hover:after:w-1/3 after:transition-all after:duration-300 ${isScrolled ? 'after:bg-amber-500' : 'after:bg-amber-400'}`}
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" className={`px-2 ${linkColor} ${hoverColor} hover:bg-black/10`}>
//                   <span className="sr-only">Open menu</span>
//                   <Menu className="h-6 w-6" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="bg-white text-slate-900 w-[85%] sm:max-w-sm p-0">
//                 <SheetHeader className="p-4 border-b border-slate-200">
//                   <SheetTitle className="flex items-center gap-3 text-base">
//                     <img src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png" alt="RPCP" className="h-10 w-auto" />
//                     <span>College of Pharmacy</span>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="px-2 py-3 max-h-[calc(100dvh-5rem)] overflow-y-auto">
//                   <div className="space-y-1">
//                     {navStructure.main.map((item) => (
//                       <div key={item.label} className="rounded-md">
//                         {item.items ? (
//                           <>
//                             <button
//                               className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-slate-100 rounded-md transition-colors"
//                               onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
//                             >
//                               <span>{item.label}</span>
//                               <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSection === item.label ? "rotate-180 text-amber-500" : ""}`} />
//                             </button>
//                             {openSection === item.label && (
//                               <div className="pl-4 pt-1 pb-2 border-l-2 border-amber-200 ml-4">
//                                 {item.items.map((subItem) => (
//                                   <Link
//                                     key={subItem.label}
//                                     href={subItem.href}
//                                     className="block px-3 py-2.5 text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-500/10 rounded-md transition-all"
//                                     onClick={() => setIsOpen(false)}
//                                   >
//                                     {subItem.label}
//                                   </Link>
//                                 ))}
//                               </div>
//                             )}
//                           </>
//                         ) : (
//                           <Link
//                             href={item.href}
//                             className={`block px-3 py-3 text-base font-medium rounded-md transition-colors whitespace-nowrap ${pathname === item.href ? 'text-amber-600 bg-amber-500/10' : 'hover:bg-slate-100'}`}
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {item.label}
//                           </Link>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
