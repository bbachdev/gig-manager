import { validateRequest } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  //TODO: Do with middleware instead
  const { user } = await validateRequest();
  if (!user) {
		return redirect("/");
	}

  return (
    <div className={`flex flex-col items-center py-12`}>
      Dashboard
    </div>
  )
}