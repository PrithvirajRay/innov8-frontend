import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import Projects from "@/components/Dashboard/Projects";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

function Dashboard() {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();

  if (isLoaded && !isSignedIn) {
    router.push("/sign-in");
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen">
      {isLoaded && isSignedIn ? (
        <>
          <div className="">
            <Navbar />
          </div>
          <Projects />
          <div className="">
            <Footer />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dashboard;
