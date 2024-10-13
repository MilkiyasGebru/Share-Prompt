"use client";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {signIn, signOut,useSession,getProviders} from "next-auth/react";


import Link from "next/link";
import Image from "next/image";

export default function NavBar(){

    const isUserLoggedIn = false;
    const [providers, setProviders] = useState(null);
    const {data:session} = useSession();

    useEffect(()=>{
        const initalizeProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }
        initalizeProviders();
    },[])

    return(<nav className="flex justify-between w-full mb-16">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" alt="Prompt API Logo" width={30} height={30} className="object-contain" />
            <p>Prompt API</p>
        </Link>
        <div className="flex">
            { session?.user ? (
                <div className="flex gap-4">
                    <Link href="/create-prompt" className="black-button">Create Prompt</Link>
                    <button type="button" onClick={signOut} className="black-button">Sign Out</button>
                    <Link href="/profile">
                        <Image src="/assets/images/logo.svg" alt="Profile" width={30} height={30} className="object-contain" />
                    </Link>
                </div>
            ): (<>
                {providers && Object.values(providers).map(provider => (<button key={provider.name } onClick={()=>signIn(provider.id)} type="button" className="black-button">Login In</button>))}
            </>)}
        </div>
    </nav>)
}