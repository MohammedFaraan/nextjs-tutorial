import Link from "next/link"

async function page() {

  return (
    <div>
      User Page

      <ul>
        <li><Link href={"/users/1"}>User 1</Link></li>
        <li><Link href={"/users/2"}>User 2</Link></li>
        <li><Link href={"/users/3"}>User 3</Link></li>
        <li><Link href={"/users/4"}>User 4</Link></li>
      </ul>
    </div>
  )
}

export default page
