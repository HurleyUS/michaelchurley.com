import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-Base to-Crust">
      <SignIn afterSignInUrl="/manage" signUpUrl="/sign-up" />
    </div>
  );
}
