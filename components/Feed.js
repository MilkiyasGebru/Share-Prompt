"use client"
import {useState, useEffect} from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick})=>{
    return (<div className="mt-16 flex gap-2">
        {data.map(post=>{
            return (<div key={post.tag}>
                <PromptCard post={post} handleTagClick={handleTagClick}/>
            </div>)
        })}
    </div>)
}


export default function Feed(){

    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);
    const handleSearchChange = (e)=>{
        setSearchText(e.target.value);
    }
    const handleTagClick = (e) =>{}

    useEffect(()=>{
        const fetchPosts = async ()=> {
            const response = await fetch("api/prompt")
            const data = await response.json();
            setPosts(data)
            console.log(data)
        }
        fetchPosts();
    },[])

    return (<section className="w-full mt-4">
        <form action="" className="relative w-full flex-center">
            <input
                type="text"
                placeholder="Search for Tag or Username"
                value={searchText}
                onChange={handleSearchChange}
                className="w-full p-4 rounded shadow   "
                required
            />


        </form>
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
    </section>)
}