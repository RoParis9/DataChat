import { HardDriveUpload, Plus } from "lucide-react"


const SUGGESTED_QUESTIONS_MOCK = [
  "Summarize the employee handbook",
  "What is the Q3 Revenue growth?",
  "How do i reset my VPN password",
]



export const FullPageChat: React.FC = () => {
  return(
    <div className="flex h-[calc(100vh - 64px)] bg-white overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
        <div className="p-4">
          <button
            className="w-full flex items-center jusity-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg shadow-sm transtion-all font-medeium text-sm">
            <Plus className="w-4 h-4"/>
            <span> New Chat</span>
          </button>
        </div>
      </div>
      
    </div>
  )
}
