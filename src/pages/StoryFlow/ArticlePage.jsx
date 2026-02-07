import React from 'react';

import { HiOutlineSearch, HiOutlineBell } from 'react-icons/hi';
import { IoShareOutline, IoEllipsisHorizontal } from 'react-icons/io5';
import { PiHandsClappingLight } from 'react-icons/pi';
import { FaRegComment } from 'react-icons/fa6';
import { BsBookmarkPlus } from 'react-icons/bs';

const SingleArticlePage = () => {
  const data = {
    title: "The Silent Echoes of the Valley",
    author: {
      name: "Julianna Thorne",
      image: "https://i.pravatar.cc/150?u=julianna",
      bio: "Award-winning novelist and environmental journalist exploring the intersection of folklore and geology. Author of 'The Silent Pulse'."
    },
    meta: "Oct 24, 2023 · 5 min read",
    responses: 142
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-50">
      
      {/* 1. Navbar Section */}
      {/* <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold italic group-hover:bg-blue-700 transition-colors">SF</div>
            <span className="font-bold text-xl tracking-tighter">StoryFlow</span>
          </div>
          <div className="flex items-center gap-5 text-gray-500">
            <HiOutlineSearch size={22} className="cursor-pointer hover:text-black transition-colors" />
            <HiOutlineBell size={22} className="cursor-pointer hover:text-black transition-colors" />
            <div className="w-8 h-8 bg-orange-100 rounded-full border border-gray-200 cursor-pointer overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=User" alt="User" />
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content Wrapper */}
      <main className="max-w-[700px] mx-auto px-5 pt-12 pb-24">
        
        {/* 2. Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.15] tracking-tight">
            {data.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={data.author.image} alt={data.author.name} className="w-11 h-11 rounded-full object-cover" />
              <div className="text-[13px] md:text-sm font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{data.author.name}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">Follow</button>
                </div>
                <div className="text-gray-500">
                  {data.meta} · <span className="text-amber-500">★</span> Featured
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <IoShareOutline size={22} className="cursor-pointer hover:text-black transition-all" />
              <IoEllipsisHorizontal size={22} className="cursor-pointer hover:text-black transition-all" />
            </div>
          </div>
        </header>

        {/* 3. Article Content Section */}
        <article className="font-serif text-[19px] leading-[1.8] text-slate-800">
          <p className="mb-6 first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-slate-900">
            The sun dipped below the horizon, casting long, spindly shadows across the valley floor. It was the kind of silence that felt heavy, almost tangible, as if the air itself were holding its breath.
          </p>
          <p className="mb-8">
            Now, standing where the maps ended, she understood. The valley wasn't empty; it was waiting. It had been waiting for generations, cradling the secrets of those who came before in its limestone embrace.
          </p>

          <figure className="my-12 font-sans">
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200" 
              alt="Mountain View" 
              className="rounded-xl w-full shadow-sm"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-4 italic">
              The valley at dusk, where the echoes begin to stir. Photo by Lucas K.
            </figcaption>
          </figure>

          <p className="mb-6">
            She opened her notebook to a blank page. The wind picked up, rustling the dry grass and bringing with it the scent of damp stone and ancient pine. Then, it happened. A sound, faint at first, like a flute played in another room.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-6 my-12 italic text-2xl text-slate-700 leading-snug">
            "The earth doesn't forget," her grandfather used to say. "It just waits for someone quiet enough to listen."
          </blockquote>
        </article>

        {/* 4. Interaction Bar */}
        <div className="flex items-center justify-between py-5 border-y border-gray-100 mt-12 mb-16 font-sans">
          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2 cursor-pointer hover:text-black group">
              <PiHandsClappingLight size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">2.4K</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-black group">
              <FaRegComment size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">{data.responses}</span>
            </div>
          </div>
          <div className="flex items-center gap-5 text-gray-400">
            <BsBookmarkPlus size={22} className="cursor-pointer hover:text-black transition-colors" />
            <IoShareOutline size={22} className="cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>

        {/* 5. Author Card Section */}
        <section className="bg-slate-50 rounded-2xl p-8 mb-16 font-sans border border-slate-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img src={data.author.image} alt="Author" className="w-20 h-20 rounded-full object-cover shadow-sm" />
            <div className="flex-1 text-center md:text-left">
              <span className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Written By</span>
              <h3 className="text-2xl font-bold mt-1">{data.author.name}</h3>
              <p className="text-gray-600 mt-3 text-[15px] leading-relaxed">{data.author.bio}</p>
              <button className="mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-100">
                Follow Author
              </button>
            </div>
          </div>
        </section>

        {/* 6. Response Section */}
        <section className="font-sans">
          <h4 className="font-bold text-xl mb-6">Responses ({data.responses})</h4>
          <textarea 
            className="w-full border border-gray-200 rounded-xl p-5 min-h-[120px] focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:outline-none bg-white transition-all mb-4"
            placeholder="What are your thoughts?"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all">
              Publish response
            </button>
          </div>
        </section>
      </main>

      {/* 7. Footer Section */}
      {/* <footer className="border-t border-gray-100 py-16 px-6 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
            <span className="font-bold text-lg tracking-tight">StoryFlow</span>
          </div>
          <div className="flex gap-8 text-[13px] font-medium text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">About</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Help</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy</span>
          </div>
          <div className="text-slate-100 font-black italic tracking-[0.4em] text-2xl select-none">
            RETWEET
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default SingleArticlePage;