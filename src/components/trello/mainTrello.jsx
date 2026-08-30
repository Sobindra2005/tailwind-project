import { MainContent } from "./mainContent"
import { Sidebar } from "./sidebar"
import "./styles.css"

export function Main() {
    return (
        <div className="flex h-svh">
            <Sidebar />
            < MainContent />
        </div>)
}