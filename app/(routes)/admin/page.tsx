import InputForm from "@/components/admin/InputForm";
import { CreateUser } from "@/lib/user-action";
import { currentUser } from "@clerk/nextjs";
import "@uploadthing/react/styles.css";


const page = async() => {
  const user = await currentUser(); 
  const crtUser = await CreateUser({
    userId: user?.id!,
    name: user?.firstName!,
    email: user?.emailAddresses[0].emailAddress!
  })
  return (
    <>
      <section className="flex mt-24  h-full w-11/12  mx-auto">
        <div className="w-96 bg-blue-700 h-full ">
          hello
        </div>


        <InputForm />

      </section>
    </>
  )
}

export default page
