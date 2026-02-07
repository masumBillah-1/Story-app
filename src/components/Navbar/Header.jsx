import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineEditNote, MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { Link, Links } from 'react-router';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
            <div className="max-w-300
mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="text-primary">
                        <HiOutlineBookOpen className="text-2xl sm:text-3xl" />
                    </div>
                    <h1 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        StoryFlow
                    </h1>
                </div>

                {/* Search Bar - Desktop Only */}
                <div className="hidden md:flex flex-1 max-w-md">
                    <div className="relative w-full group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                            <IoSearchOutline className="text-xl" />
                        </div>
                        <input
                            className="block w-full pl-10 pr-4 py-2 border-none bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white dark:focus:bg-gray-700 transition-all placeholder:text-gray-500"
                            placeholder="Search for stories, topics, or authors..."
                            type="text"
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4">
                    <a
                        className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                        href="#"
                    >
                        Explore
                    </a>
                    
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <MdOutlineDashboard className="text-lg" />
                        <span>Dashboard</span>
                    </button>

                    <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
                        <MdOutlineEditNote className="text-lg" />
                        <span>Write</span>
                    </button>
                    
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                        <FaRegUserCircle className="text-xl" />
                        <Link to='sign-in'>Sign In</Link>
                    </button>
                </nav>

                {/* Mobile Actions */}
                <div className="flex md:hidden items-center gap-2">
                    {/* Search Icon - Mobile */}
                    <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                        <IoSearchOutline className="text-xl" />
                    </button>

                    {/* Write Button - Mobile */}
                    <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all">
                        <MdOutlineEditNote className="text-xl" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="text-2xl" />
                        ) : (
                            <HiOutlineMenu className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-3">
                        {/* Mobile Search */}
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                <IoSearchOutline className="text-lg" />
                            </div>
                            <input
                                className="block w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-500"
                                placeholder="Search stories..."
                                type="text"
                            />
                        </div>

                        {/* Mobile Menu Links */}
                        <a
                            href="#"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <IoSearchOutline className="text-xl" />
                            <span className="font-medium">Explore</span>
                        </a>

                        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                            <MdOutlineDashboard className="text-xl" />
                            <span className="font-medium">Dashboard</span>
                        </button>

                        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                            <FaRegUserCircle className="text-xl" />
                            <Link to='login' className="font-medium">Log In</Link>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;