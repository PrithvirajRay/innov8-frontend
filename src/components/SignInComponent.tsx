import { SignIn } from "@clerk/nextjs";

function SignInComponent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          redirectUrl="/dashboard"
        />
      </div>
    </section>
  );
}

export default SignInComponent;
