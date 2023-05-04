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
    <div className="bg-gray-50 dark:bg-gray-900">
      {isLoaded && isSignedIn ? (
        <>
          <Navbar />
          <Projects />
          <Footer/>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dashboard;
