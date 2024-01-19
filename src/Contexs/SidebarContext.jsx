import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <SidebarContext.Provider value={{
            showSidebar,
            setShowSidebar
        }} >
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider