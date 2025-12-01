'use client'

import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
    return(
        <div className="sticky top-0 border border-b-primary/10 bg-secondary">
            <UserButton/>
        </div>
    );
}

export default NavBar;