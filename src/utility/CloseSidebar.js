import { useEffect, useContext } from 'react'
import { useLocation, } from "react-router-dom";
import { SidebarContext } from '../Contexs/SidebarContext';

export default function CloseSidebar() {
    const { setShowSidebar } = useContext(SidebarContext)
    const { pathname } = useLocation()

    useEffect(() => {
        if (window.innerWidth < 1280) {
            setShowSidebar(false);
        }
    }, [pathname]);

}