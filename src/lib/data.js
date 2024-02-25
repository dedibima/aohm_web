const getAllActivities = async () => {
    const response = await fetch('http://localhost:3001/activity/all',{ next: { revalidate: 10 } })
    const obj = await response.json()
    return obj
  }

  const allActivities = await getAllActivities()


  const getActiveActivities = async () =>{
    const response = await fetch('http://localhost:3001/activity/active')
    const obj = await response.json()
    return obj
  }

  const activeActivities = await getActiveActivities()


  const getUser = async (id) =>{
    const response = await fetch(`http://localhost:3001/users/${id}`)
    const obj = await response.json()
    return obj
  }







  export {allActivities, activeActivities,getUser,getAllActivities}