
import { NEXT_AUTH } from "@/lib/lib";
import { getServerSession  } from "next-auth"

export default async function server (){

    const session =await getServerSession(NEXT_AUTH);
    return <div>
  {JSON.stringify(session)}
    </div>
}