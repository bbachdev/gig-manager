import { Avatar, AvatarFallback } from '../ui/avatar';

export default async function PrimaryHeader() {
  return (
    <header className={`p-6 shadow-md flex flex-row items-center`}>
      <div>
        <span>GigManager</span>
      </div>
      <div className={`ml-auto`}>
        <Avatar>
          <AvatarFallback className={`bg-blue-200`}>BB</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}