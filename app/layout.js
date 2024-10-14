import '../styles/global.css'
import NavBar from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
    title: "Prompt API",
    description: "Discover and Share AI Prompts"
}
export default function RootLayout({children}) {
    return (
        <html>
        <head>
            <title>Prompt API</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                crossOrigin="anonymous"
            />
        </head>
        <body>
        <Provider>

            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app">
                <NavBar/>
                {children}
            </main>
                </Provider>
            </body>
        </html>
    )
}