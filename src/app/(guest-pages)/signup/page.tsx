import SignUpModule from '@/components/auth/SignUpModule';
import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function SignUp() {
  const { user } = await validateRequest();
	if (user) {
		return redirect("/dashboard");
	}
  
  return (
    <main className="flex flex-col items-center py-12">
      <SignUpModule />
    </main>
  )
}