'use client'

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput";
import { ModeToggle } from "../theme-toggle";


const NavBar = () => {
    const router = useRouter();
    const { userId } = useAuth();

    return(
        <div className="sticky top-0 border border-b-primary/10 bg-secondary z-50 shadow-sm">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.push('/')}>
                        <Image src='/logo.png' alt="logo" width='30' height='30'/>
                        <div className="font-bold text-xl">MyApp</div>
                    </div>
                    <SearchInput />
                    <div className="flex gap-3 items-center">
                        <div><ModeToggle/></div>
                        <UserButton/>
                        {!userId && <>
                        <Button onClick={() => router.push('/sign-in')} variant='outline' size='sm'>Sign in</Button>
                        <Button onClick={() => router.push('/sign-up')} size='sm' className="bg-gray-600 hover:bg-gray-500">Sign up</Button>
                        </>}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default NavBar;