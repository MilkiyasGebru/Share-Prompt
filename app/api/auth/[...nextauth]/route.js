import NextAuth from "next-auth";
import ConnectToDatabase from "../../../../utils/database"
import User from "../../../../models/user"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        // GoogleProvider({clientId:'',clientSecret:''}),
                CredentialsProvider({
                    name:"Testing",
                    credentials: {
                        username: { label: "email", type: "email", placeholder: "jsmith" },
                        password: { label: "Password", type: "password" }
                    },
                    async authorize(credentials,req) {
                        console.log("This is the req",req)
                        console.log("This is the credentials",credentials)
                        await ConnectToDatabase()
                        const authenticatedUser = await User.findOne({})
                        console.log("This is the authenticated user",authenticatedUser)
                        // return {username: credentials.username, password: credentials.password}
                        return authenticatedUser
                    }
                })],
    callbacks: {
        async session({session}) {
            console.log("This is the Session",session)
            await ConnectToDatabase();
            const sessionUser = await User.findOne({email: session.user.email});
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile,user}) {
            console.log("this is the profile",profile)
            return user
            // await ConnectToDatabase();
            // const userExists = await User.findOne({email: profile.email});
            // if (!userExists) {
            //     await User.create({email: profile.email, username: profile.username, image: profile.picture});
            // }
        },
        async signOut({profile,session}) {
            session = {}
            return true
        }
    },
    secret:process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST};