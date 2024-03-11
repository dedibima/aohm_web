import { useAuthStore } from "./AuthStore"; 



const daysOfWeek = [
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
  const response = await axios.get(`http://localhost:3001/activity/${id}`,axiosConfig)
  const obj = await response.json()
  return obj
}



const getAllActivities = async () => {
    const response = await fetch('http://localhost:3001/activity/all')
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







  export {allActivities, activeActivities,getUser,getAllActivities,parseBitmask,getActivity,axiosConfig}