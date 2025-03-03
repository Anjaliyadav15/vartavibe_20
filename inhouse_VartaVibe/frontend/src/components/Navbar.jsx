import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const navigateToSignUp = () => navigate('/signup');
    const navigateToSignIn = () => navigate('/signin');
    const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-2xl tracking-tight">VartaVibe</span>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex space-x-4 px-3 py-2">
                        <li><a href="#home" className="cursor-pointer hover:text-black hover:bg-slate-200">Home</a></li>
                        <li><a href="#about" className="cursor-pointer hover:text-black hover:bg-slate-200">About</a></li>
                        <li><a href="#services" className="cursor-pointer hover:text-black hover:bg-slate-200">Services</a></li>
                        <li><a href="#testimonials" className="cursor-pointer hover:text-black hover:bg-slate-200">Testimonials</a></li>
                        <li><a href="#footer" className="cursor-pointer hover:text-black hover:bg-slate-200">Contact</a></li>
                        
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-4 items-center">
                        <button className="py-2 px-3 border rounded-md" onClick={navigateToSignIn}>LogIn</button>
                        <button className="py-2 px-3 border rounded-md" onClick={navigateToSignUp}>SignUp</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex">
                        <button onClick={toggleNavbar} aria-label="Toggle Menu">
                            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen && (
                    <div className="fixed top-0 right-0 z-50 bg-neutral-900 text-white w-full h-full flex flex-col items-end p-2 lg:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="absolute top-4 right-4"
                            aria-label="Close Menu"
                        >
                            <X size={24} />
                        </button>
                        <ul className="space-y-4 mt-12 pl-8">
                            <li><a href="#home" className="cursor-pointer hover:text-black hover:bg-slate-200">Home</a></li>
                            <li><a href="#about" className="cursor-pointer hover:text-black hover:bg-slate-200">About</a></li>
                            <li><a href="#services" className="cursor-pointer hover:text-black hover:bg-slate-200">Services</a></li>
                            <li><a href="#testimonials" className="cursor-pointer hover:text-black hover:bg-slate-200">Testimonials</a></li>
                            <li><a href="#contact" className="cursor-pointer hover:text-black hover:bg-slate-200">Contact</a></li>
                        </ul>
                        <div className="mt-8 space-x-4 pl-8">
                            <button className="py-2 px-3 border rounded-md" onClick={navigateToSignIn}>LogIn</button>
                            <button className="py-2 px-3 border rounded-md" onClick={navigateToSignUp}>SignUp</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
