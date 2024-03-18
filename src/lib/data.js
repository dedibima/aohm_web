import axios, { privateAxios } from "./hooks/axios";



export const daysOfWeek = [
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 4, label: 'Wednesday' },
  { value: 8, label: 'Thursday' },
  { value: 16, label: 'Friday' },
  { value: 32, label: 'Saturday' },
  { value: 64, label: 'Sunday' },
];

const parseBitmask = (bitmask) => {
  const selectedDays = [];
  daysOfWeek.map((day,index) => {
    if (bitmask & day.value) {
      selectedDays.push(index+1);
    }
  });
  return selectedDays.join(', ');
};





const getActivity = async (id) =>{
try {
  const response = await privateAxios.get(`/activity/${id}`)
  console.log(response,"ajskdj")
  return response
} catch (error) {
  console.log(error)
}

}



const getAllActivities = async () => {
  try {
    const response = await privateAxios.get('http://localhost:3001/activity/all2')
    return response.data
  } catch (error) {
    console.log(error.response)
    return error
  }
  }




  const getActiveActivities = async () =>{
    try {
      const response =  await privateAxios.get('http://localhost:3001/activity/active')
      const obj = await response.json()
      return obj
    } catch (error) {
      console.log(error)
    }
  }




  const getUser = async (id) =>{
    try {
      const response =  await privateAxios.get(`http://localhost:3001/users/${id}`)
      const obj = await response.json()
      return obj
    } catch (error) {
      console.log(error)
    }
  }


const authenticateUser = async (data) => {
  try {
    const response = await axios.post('/login', data, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
      })
      return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}




  export {getActiveActivities,getUser,getAllActivities,parseBitmask,getActivity,authenticateUser}