import React, { useState } from "react";

export default function PublicStoryTailwind() {
  const stories = [
  {
  id: 1,
  title: "The Architecture of Tomorrow: Building Digital Sanctuaries",
  author: "Julian Thorne",
  tag: "Editor's Choice",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  description: "An exploration of how designers are creating spaces for deep work and meaningful human connection.",
},

    {
      id: 2,
      title: "The Clockmaker's Secret in Old Prague",
      author: "Elena Novak",
      tag: "Fiction",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Echoes of a Forgotten Forest",
      author: "Marcus Lee",
      tag: "Memoir",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Why We’re Nostalgic for Analog Noise",
      author: "Sarah Jenkins",
      tag: "Technology",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
  id: 5,
  title: "Whispers of the Wind",
  author: "Lara Moon",
  tag: "Poetry",
  image:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
},
{
  id: 6,
  title: "The Nature of Thought",
  author: "Ethan Clarke",
  tag: "Philosophy",
   image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
},

  ];

  const tags = ["For You", "Fiction", "Technology", "Poetry", "Memoir", "Philosophy"];
  const [activeTag, setActiveTag] = useState("For You");

  const filteredStories =
    activeTag === "For You"
      ? stories
      : stories.filter((story) => story.tag === activeTag);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white px-10 py-4 flex justify-between items-center border-b border-gray-200">
        <h2 className="font-bold text-xl">StoryFlow</h2>
        <input
          type="text"
          placeholder="Search stories, topics, or authors"
          className="px-4 py-2 rounded-full border border-gray-300 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div>
          <button className="px-4 py-2 border border-gray-300 rounded mr-2 hover:bg-gray-100 transition">
            Write
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>
      </header>

      {/* Featured Story */}
      <section className="flex flex-col md:flex-row gap-6 px-10 py-10 bg-white rounded-lg shadow-md">
        <img
          src={stories[0].image}
          alt={stories[0].title}
          className="w-full md:w-[420px] h-[380px] object-cover rounded-lg"
        />
        <div>
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            {stories[0].tag}
          </span>
          <h1 className="text-2xl font-bold mt-2">{stories[0].title}</h1>
          <p className="text-gray-700 mt-2">{stories[0].description}</p>
          <small className="text-gray-500 mt-1 block">By {stories[0].author}</small>
        </div>
      </section>

      {/* Tags */}
      <div className="flex gap-3 px-10 py-5">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1 rounded-full border text-sm transition ${
              activeTag === tag
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Stories Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-10">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-90 object-cover"
            />
            <div className="p-4">
              <span className="text-blue-600 text-xs">{story.tag}</span>
              <h3 className="text-lg font-semibold mt-1">{story.title}</h3>
              <small className="text-gray-500">By {story.author}</small>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
