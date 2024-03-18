export const daysOfWeek = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 4, label: 'Wednesday' },
    { value: 8, label: 'Thursday' },
    { value: 16, label: 'Friday' },
    { value: 32, label: 'Saturday' },
    { value: 64, label: 'Sunday' },
  ];
  
export const parseBitmask = (bitmask) => {
    const selectedDays = [];
    daysOfWeek.map((day,index) => {
      if (bitmask & day.value) {
        selectedDays.push(index+1);
      }
    });
    return selectedDays.join(', ');
  };
  

  export default {parseBitmask, daysOfWeek}
  