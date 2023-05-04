import { SignUp } from "@clerk/nextjs";

function SignUpComponent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-screen h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          redirectUrl="/dashboard"
        />
      </div>
    </section>
  );
}

export default SignUpComponent;
