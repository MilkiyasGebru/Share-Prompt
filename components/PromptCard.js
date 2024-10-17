
import {useState} from "react";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {usePathname} from "next/navigation";

export default function PromptCard({post,handleClick,handleEdit,handleDelete}) {
    const {data: session} = useSession();
    const [copied,setCopied] = useState("");
    const handleCopy = async ()=>{
        setCopied(post.prompt);
        await navigator.clipboard.writeText(post.prompt);
        setTimeout(()=>{
            setCopied("")
        }, 3000)

    }
    const pathname = usePathname()
    console.log("This is the pathname",pathname)
    return (<div className="rounded border-b-blue-100 border-2 p-4 h-fit w-fit">
        <div className="flex gap-6 items-center flex-between ">
            <div className="flex  gap-5">

                <i className="fa fa-user text-2xl self-center" aria-hidden="true"></i>
                <div className="flex flex-col">
                    <span className="font-bold">{post.creator.username}</span>
                    <span className="font-light">{post.creator.email}</span>
                </div>
            </div>
            <div >
                <Image
                    className="cursor-pointer text-blue-300"
                    src={ copied !== ""? "/assets/icons/tick.svg":"/assets/icons/copy.svg"}
                    alt="Copied Image"
                    width={30}
                    height={30}
                    onClick={handleCopy}
                />
            </div>

        </div>
        <p className="my-4">{post.prompt}</p>
        <p className="cursor-pointer text-sm text-blue-300 ">{post.tag}</p>
        {session?.user.id  === post.creator._id && pathname?.endsWith("/profile") && (
            <div className="flex gap-2 justify-end ">
                <p className="bg-black text-white p-2 rounded-xl cursor-pointer " onClick={handleEdit}>Edit</p>
                <p className="bg-black text-white p-2 rounded-xl cursor-pointer" onClick={handleDelete}>Delete</p>
            </div>
        )}
    </div>)
}