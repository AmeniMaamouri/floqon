import { useState } from "react"

const useDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return {
        isOpen,
        toggleDrawer,
    }
}
export default useDrawer