"use client";
import { useRouter } from "next/navigation"
import { signIn,signOut,useSession } from "next-auth/react";
export const Appbar=()=>{
    const router=useRouter();
    const session =useSession();
    return <div >
       

        <button onClick={()=>{
            //{router.push("/api/auth/signin")}
            signIn(); }}>
                Signin</button>
                <button onClick={()=>{
            
            signOut(); }}>
                Signout</button>
                {JSON.stringify(session)}
    </div>
}