/* const initialHabitObject = {
*    text: NAME OF HABIT
*    records: [ {
*         Date: <UTC STRING>
*         Record: <DONE | SKIPPED | FAILED>
*         Comment: 
*      }
*    ]
*  }
*/
const addHabit = (fs, habitObject) => {
  return fs.push('habit', habitObject)
}

export {addHabit}