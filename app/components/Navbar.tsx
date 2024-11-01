import Link from "next/link"
import Image from "next/image"
import { auth } from "@/auth"
import SignIn from "./SignIn"
import SignOut from "./SignOut"

const Navbar = async () => {
  const session = await auth()

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav>
        <Link href='/'>
          <Image
            src='https://file.zick.me/s/n7DSgjNF'
            alt='Logo'
            width={144}
            height={30}
          />
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>
              <SignOut />
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
