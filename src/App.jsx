//pages
import Topbar from "./Bars/Top";
import Sidebar from "./Bars/Sidebar";
export default function App() {
  return (
    <div className="max-w-[1920px] h-screen flex my-0 mx-auto">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topbar />
        <div className="bg-[#DCE9F9] w-[100%] h-screen flex justify-center overflow-y-scroll py-5"></div>
      </div>
    </div>
  );
}
