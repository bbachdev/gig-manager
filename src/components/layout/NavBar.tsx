import { Separator } from '../ui/separator';
import { FaHome } from "react-icons/fa";
import { FaFileWaveform } from "react-icons/fa6";
import { TbFileInvoice } from "react-icons/tb";

export default function NavBar() {
  return (
    <div className={`flex flex-row min-h-full`}>
      <ul className={`pl-4 pt-4 space-y-4`}>
        <li className={`flex flex-row items-center space-x-2`}><FaHome size={30}/><span>Home</span></li>
        <li className={`flex flex-row items-center space-x-2`}><TbFileInvoice size={30}/><span>Invoicing</span></li>
        <li className={`flex flex-row items-center space-x-2`}><FaFileWaveform size={30}/><span>Audition Tracker</span></li>
      </ul>
      <Separator className={`ml-8 h-auto shadow-inner bg-zinc-300`} orientation='vertical'/>
    </div>
  )
}