import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const Blogs = () => {
  const { user } = useContext(AuthContext);
  const blogs = useLoaderData().data;
  return (
    <section className=" dark:text-gray-800">
      <div className="flex justify-between items-center">
        <h2 className="primary-title my-16">Blogs</h2>
        {user?.role === "mentor" && (
          <Link to="/addBlog" className="btn btn-primary-outline">
            Add Blog
          </Link>
        )}
      </div>
      <div className="space-y-6 sm:space-y-12">
        <div>
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-100 p-10 rounded-2xl mb-10 blog-container"
            >
              <h1 className="text-3xl font-semibold my-3">{blog.title}</h1>
              <div
                className="prose dark:prose-invert max-w-none mb-5 space-y-2" // Optional: Add Tailwind Typography classes for styling raw HTML
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
