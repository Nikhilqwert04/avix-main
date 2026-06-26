import React from "react";

const blogsData = [
  {
    category: "Technology",
    date: "Dec 29, 2025",
    title: "What Are AI Agents and How Are Businesses Using Them Today?",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1565&auto=format&fit=crop",
  },
  {
    category: "Insights",
    date: "Dec 26, 2025",
    title: "How AI Automation Helps Businesses Save Time and Scale Faster",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1227&auto=format&fit=crop",
  },
  {
    category: "Guides",
    date: "Dec 24, 2025",
    title: "10 AI Tools Every Small Business Should Use in 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop",
  },
  {
    category: "Guides",
    date: "Dec 20, 2025",
    title: "The Future of AI: What to Expect in the Next 5 Years",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
  },
];

const Blogs = () => {
  return (
    <div className="mx-auto grid h-fit w-full max-w-6xl grid-cols-1 gap-8 px-8 md:grid-cols-2">
      {blogsData.map((blog, index) => (
        <div
          key={index}
          className="group relative h-[320px] cursor-pointer overflow-hidden rounded-2xl"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute top-0 left-0 z-10 rounded-br-[20px] bg-black px-4 pt-4 pb-2.5 transition-colors duration-500">
            <span className="text-xs font-medium text-white">
              {blog.category}
            </span>

            <div className="absolute top-0 -right-6 h-6 w-6 rounded-tl-[24px] bg-transparent shadow-[-10px_-10px_0_10px_black] transition-shadow duration-500" />
            <div className="absolute -bottom-6 left-0 h-6 w-6 rounded-tl-[24px] bg-transparent shadow-[-10px_-10px_0_10px_black] transition-shadow duration-500" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-5">
            <span className="mb-1.5 text-xs font-medium text-gray-300">
              {blog.date}
            </span>
            <h3 className="text-base leading-snug font-semibold text-white md:text-lg">
              {blog.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
