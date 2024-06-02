import CredentialsProvider from 'next-auth/providers/credentials';
export const NEXT_AUTH={
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
              username: { label: 'email', type: 'text', placeholder: 'Email ' },
              password: { label: 'password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: any) {
                
                return {
                    id: "user1",
                    name:  "Rakesh",
                    email:"Rakeshpaulraj"
                };
            },
          })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks:{
       
        session:({session,token,user }:any)=>{
          if(session && session.user){
            session.user.id=token.sub
          }
          return session;
        }

      }

}