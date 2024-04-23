import SignInModule from '@/components/auth/SignInModule';
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";


export default async function Home() {
  const { user } = await validateRequest();
	if (user) {
		return redirect("/dashboard");
	}

  return (
    <main className="flex flex-col items-center py-12">
      <SignInModule />
    </main>
  );
}
