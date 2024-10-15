import PromptCard from "@/components/PromptCard";

export default function Profile({name, desc, data, handleEdit, handleDelete}){
    console.log(data);
    return (<section className="flex flex-col items-center">
        <h1 className="text-6xl text-blue-500 font-bold mb-4">{name} Profile</h1>
        <p>{desc}</p>
        <div className="mt-10 flex gap-2">
            {data.map(post => {
                return (<PromptCard
                            post={post}
                            key={post._id}
                            handleEdit={()=>{handleEdit && handleEdit(post)}}
                            handleDelete={()=>{handleDelete && handleDelete(post)}}

                />)
            })}
        </div>
    </section>)
}