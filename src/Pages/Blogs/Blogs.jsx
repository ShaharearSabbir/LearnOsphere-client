import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Helmet } from "react-helmet";
import usePageTop from "../../Hooks/usePageTop";
import OnTitleBar from "../../Components/SharedComponents/OnTitleBar";
import Title from "../../Components/SharedComponents/Title";

const Blogs = () => {
  usePageTop();
  const { user } = useContext(AuthContext);
  const blogs = useLoaderData().data;
  return (
    <section>
      <OnTitleBar>Blogs</OnTitleBar>
      <div
        className={
          user ? "flex flex-col lg:flex-row gap-4 justify-between items-center mb-8" : null
        }
      >
        {" "}
        <Title
          secondary="Blogs"
          title="Explore Our"
          utitle="Blogs"
          center={user ? false : true}
        />
        <div className="flex justify-between items-center">
          {user && (
            <Link to="/addBlog" className="btn btn-primary-outline text-center">
              Add Blog
            </Link>
          )}
        </div>
      </div>
      <div className="space-y-6 sm:space-y-12">
        <div>
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-100 p-4 md:p-10 rounded-2xl mb-10 blog-container"
            >
              <h1 className="text-3xl font-semibold my-3">{blog.title}</h1>
              <div
                className="prose dark:prose-invert max-w-none mb-5 space-y-2 text-justify"
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
