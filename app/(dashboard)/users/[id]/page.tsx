async function page({params} : {params: {id: String}}) {
    const {id} = await params;
  return (
    <div>
      User Profile: {id}
    </div>
  )
}

export default page
