import Link from "next/link";


export default function Form({type,post,handleSubmit,submitting,setPost}){
    return (
        <section className="w-full flex-col">
            <h1 className="text-blue-500 text-6xl font-bold text-center">{type} Post</h1>
            <p className="text-xl text-center font-light mt-2 mb-8">Create and share amazing prompts with the world, and let your imagination run wild with any AI powered platform</p>
            <form className="w-10/12 mx-auto" onSubmit={handleSubmit}>
                <label >
                    <p className="font-bold text-xl">Your AI Prompt</p>
                    <textarea name="" id="" className="w-full min-h-64 p-4 rounded mt-3" value={post.prompt} onChange={(e)=>setPost({...post,prompt:e.target.value})}
                          placeholder="Write Your Prompt Here"></textarea>
                </label>
                <label >
                    <p className="font-bold text-xl mt-2">Tag
                        <span className="font-light">(#product, #webdevelopment,#idea)</span>
                    </p>
                    <input placeholder="#Tag" value={post.tag} onChange={(e)=>{setPost({...post,tag:e.target.value})}}  className="w-full h-8 rounded mt-3"></input>
                </label>
                <div className="flex flex-row-reverse mt-3 gap-2">
                    <button className="black-button bg-amber-600" disabled={submitting}>{submitting ? `${type}...`:type}</button>
                    <Link className="black-button" href="/">Cancel</Link>
                </div>
            </form>

        </section>
    )
}