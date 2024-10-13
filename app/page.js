import Feed from '../components/Feed'

export default function Home(){
    return (<section className="w-full flex-col flex-center ">
        <h1 className="text-6xl font-bold"> Discover & Share</h1>
        <span className="text-6xl font-bold text-transparent bg-gradient-to-r from-orange-800 to-orange-300 bg-clip-text">AI Powered Prompts</span>
        <p className="text-2xl text-center">Prompt API is an Open Source AI Prompting tool for modern world to discover,
            create and share creative prompts.
        </p>
        <Feed />
    </section>);
}