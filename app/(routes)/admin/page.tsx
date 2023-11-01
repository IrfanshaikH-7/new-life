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

  if (user && !DBusers) {
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
  if (AdminCheck === false) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <p className="text-9xl ">No Admin found</p>
        <UserButton />
      </div>
    )
  }

  return (
    <section className="h-full w-full px-4">
      <div className="mt-24 flex justify-center items-center md:!flex-row flex-col gap-2 rounded-md overflow-hidden">
        <div className="flex justify-center items-center bg-slate-200 md:bg-red-700 h-full md:w-2/6 lg:w-1/6 w-full p-4 rounded-md">
          <p className=" px-12 md:px-2 py-2 bg-slate-300 rounded-md">Upload Images</p>
        </div>
        <div className="h-full md:w-4/6 lg:w-5/6 w-full bg-slate-200 rounded-md overflow-hidden">
          <InputForm />
        </div>

      </div>
    </section>

  )





}

export default page
