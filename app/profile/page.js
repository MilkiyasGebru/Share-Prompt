"use client";

import {useState, useEffect} from "react";
import {useSession} from "next-auth/react"
import {useRouter} from "next/navigation";

import Profile from "../../components/Profile"

export default function ProfilePage() {
    const {data:session} = useSession();
    const handleEdit = async ()=>{}
    const handleDelete = async ()=>{}
    // console.log(session);
    // console.log(session?.user.id)
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async ()=> {
            const response = await fetch(`api/users/${session?.user.id}/posts`)
            const data = await response.json();
            setPosts(data)
            console.log("This is the fetched", data)
        }
        console.log("Use effect is going to be called")
        if(session?.user.id){
            fetchPosts()
        }
    },[session])


    return (<Profile
                name= "My"
                desc= "Welcome to your personalized profile page"
                data= {posts}
                handleDelete={handleDelete}
                handleEdit={handleEdit}

    />)
}