"use client"

import {useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Form from "../../components/Form";

export default function CreatePrompt(){
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt:"", tag:""
    });
    const {data:session} = useSession();

    const createPrompt = async (e)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        e.preventDefault();
        console.log(e)
        setSubmitting(true);
        try {
            const response = await fetch("/api/prompt/new", {
                method:"POST",
                body: JSON.stringify({
                    prompt:post.prompt,
                    userId: session?.user.id,
                    tag:post.tag,
                })
            })
            if (response.ok){
                router.push("/")
            }
        }
        catch(err){
            console.log(err)
        }
        finally {
            setSubmitting(false);
        }
    }

    return (<div>
        <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt}/>
    </div>)
}