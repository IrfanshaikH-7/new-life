import InputForm from "@/components/admin/InputForm";
import { CreateUser, GetUser, isAdmin } from "@/lib/user-action";
import { currentUser } from "@clerk/nextjs";
import "@uploadthing/react/styles.css";
import { UserButton } from "@clerk/nextjs";
import Admin from "@/lib/models/admin";


const page = async () => {
  const user = await currentUser();
  const DBusers = await GetUser({ userId: user?.id! })
  const AdminCheck = await isAdmin({ userId: user?.id! })

  if(user && !DBusers){
    await CreateUser({
      userId: user?.id,
      name: `${user.firstName} ${user.lastName} `,
      email: user.emailAddresses[0].emailAddress,
    }) 
  }
  // console.log('page')
  // console.log(AdminCheck)

  // console.log(AdminCheck)
  // console.log(AdminCheck)
  // console.log(AdminCheck)
  // console.log(AdminCheck)
  // console.log(AdminCheck)
  if(AdminCheck === false){
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="text-9xl ">No Admin found</p>
        <UserButton />
      </div>
    )
  }

  return (

    <section className="flex mt-24  h-full w-11/12  mx-auto">
      <div className="w-96 bg-blue-700 h-full ">
        hello
        <div className="h-24 w-24">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <InputForm />
    </section>
  )





}

export default page
