import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import Projects from "@/components/Dashboard/Projects";
import Script from "next/script";
import React from "react";

interface Props {
  triggerLoginState: () => void;
}

export default function Home({ triggerLoginState }: Props) {
  const [projects, setProjects] = React.useState([]);

  const logOut = async () => {
    localStorage.removeItem("token");
    triggerLoginState();
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("this is token", token);
    if (token) {
      const retriveProjects = async () => {
        const res = await fetch(
          "http://localhost:8000/api/project/get-all-projects",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();JSON.stringify(data.projects);
        const dataProjects = JSON.parse(JSON.stringify(data.projects));
        console.log("this is data", dataProjects);
        setProjects(dataProjects);
      };
      retriveProjects();
    }
  }, []);

  React.useEffect(() => {
    console.log("this is projects", projects);
  }, [projects]);

  return (
    <div>
      <Navbar logOut={logOut} />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}
