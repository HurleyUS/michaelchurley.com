import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-Base to-Crust">
      <SignUp afterSignUpUrl="/manage" signInUrl="/sign-in" />
    </div>
  );
}
