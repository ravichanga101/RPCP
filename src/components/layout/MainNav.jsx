"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navStructure = {
  main: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    {
      label: "Facilities",
      items: [
        {
          href: "/facilities/labs",
          label: "Laboratories",
          description: "State-of-the-art research facilities",
        },
        {
          href: "/facilities/herbal-garden",
          label: "Herbal Garden",
          description: "2000 sq.m medicinal plants collection",
        },
        {
          href: "/facilities/testing",
          label: "Testing Facilities",
          description: "Pharmaceutical research & development",
        },
      ],
    },
    { href: "/research", label: "Research" },
    { href: "/placement", label: "Placement" },
    { href: "/faculty", label: "Faculty" },
    { href: "/contact", label: "Contact" },
  ],
};

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const pathname = usePathname();

  return (
         <nav className="w-full bg-gradient-to-r from-gray-900/95 to-slate-800/95 backdrop-blur-md shadow-lg border-b border-gray-700/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
                     {/* Logo */}
           <Link href="/" className="flex items-center group">
             <div className="flex items-center space-x-3">
               <img
                 src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png"
                 alt="RPCP College Logo"
                 className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
               />
               <div className="text-white">
                 <div className="text-xs opacity-80">College of Pharmacy</div>
               </div>
             </div>
           </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navStructure.main.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.items ? (
                      <>
                                                                         <NavigationMenuTrigger className="h-10 px-4 text-white hover:text-yellow-300 data-[state=open]:text-yellow-300 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-transparent relative hover:underline decoration-yellow-300 decoration-2 underline-offset-4">
                          {item.label}
                        </NavigationMenuTrigger>
                                                 <NavigationMenuContent>
                          <ul className="grid w-[520px] gap-2 p-4 md:w-[560px] md:grid-cols-2 bg-white/95 backdrop-blur rounded-xl shadow-xl ring-1 ring-blue-100/70">
                             {item.items.map((subItem) => (
                               <li key={subItem.label}>
                                 <NavigationMenuLink asChild>
                                                                        <Link
                                       href={subItem.href}
                                      className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-blue-50/70 focus:bg-blue-50/70 focus:ring-2 focus:ring-blue-300/60 relative group"
                                     >
                                                                       <div className="text-sm font-semibold leading-none mb-1 text-gray-900">
                                      {subItem.label}
                                    </div>
                                    <p className="text-xs text-gray-600 line-clamp-2">
                                      {subItem.description}
                                    </p>
                                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-400/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                  </Link>
                               </NavigationMenuLink>
                             </li>
                           ))}
                         </ul>
                       </NavigationMenuContent>
                      </>
                    ) : (
                                             <Link
                        href={item.href}
                        className={`h-10 px-4 inline-flex items-center text-sm font-medium transition-all duration-300 relative hover:underline decoration-yellow-300 decoration-2 underline-offset-4 ${
                          pathname === item.href
                            ? "text-yellow-300"
                            : "text-white hover:text-yellow-300"
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

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
                         <Button variant="ghost" size="sm" className="text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-300">
               <Search className="h-5 w-5" />
             </Button>
             <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
               ADMISSION OPEN
             </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
                         <Button
               variant="ghost"
               className="text-white hover:text-yellow-300 hover:bg-white/10 transition-all duration-300"
               onClick={() => setIsOpen(true)}
             >
               <Menu className="h-6 w-6" />
             </Button>
          </div>
        </div>

                                   {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent side="right" className="bg-gradient-to-b from-gray-900 to-slate-900 text-white border-l border-white/10 w-[85%] sm:max-w-sm p-0">
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <img src="https://www.charusat.ac.in/rpcp/images/rpcplogo.png" alt="RPCP" className="h-10 w-auto" />
                <span className="text-sm font-medium opacity-80">College of Pharmacy</span>
              </div>
              <div className="px-2 py-3 max-h-[calc(100dvh-5rem)] overflow-y-auto">
                <div className="space-y-1">
                  {navStructure.main.map((item) => (
                    <div key={item.label} className="rounded-md">
                      {item.items ? (
                        <>
                          <button
                            className="w-full flex items-center justify-between px-3 py-3 text-base font-medium hover:bg-white/5 rounded-md transition-colors"
                            onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                          >
                            <span>{item.label}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${openSection === item.label ? "rotate-180 text-yellow-300" : ""}`} />
                          </button>
                          {openSection === item.label && (
                            <div className="pl-2 pb-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm text-gray-300 hover:text-yellow-300 hover:bg-white/5 rounded-md transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-3 py-3 text-base font-medium hover:bg-white/5 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 px-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-yellow-300 hover:bg-white/10">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg">
                      ADMISSION OPEN
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
      </div>
    </nav>
  );
}
