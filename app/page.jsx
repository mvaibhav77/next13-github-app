"use client";
import Link from "next/link";
import CourseSearch from "./components/BlogSearch";
import Courses from "./components/Blogs";
import { useState, useEffect } from "react";
import LoadingPage from "./loading";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1 className="text-3xl my-4">Welcome To Github</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};
export default HomePage;
