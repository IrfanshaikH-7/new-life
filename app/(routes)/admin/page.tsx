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
    <section className="h-full w-full">
      <div className="mt-24 flex justify-center items-center md:bg-blue-500 md:!flex-row flex-col">
        <div className="bg-slate-800 md:bg-red-700 h-full w-2/6 ">

          dis fugiat obcaecati, rerum quidem ab, fugit magnam sit dignissimos labore alias voluptates laborum voluptate ut eius commodi? Ex rerum suscipit numquam, perferendis incidunt laboriosam? Unde ipsa reprehenderit, eaque quod nemo ratione vel? In, atque.
        </div>
        <div className="h-full w-4/6 bg-slate-200">
          <InputForm />
        </div>

      </div>
    </section>

  )





}

export default page
