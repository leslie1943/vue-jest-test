type Student = {
  name: string
  score: number
}
type State = {
  students: Array<Student>
}
const passList = (state: State): Array<Student> => {
  return state.students.filter((stu: any) => stu.score >= 60)
}

export default {
  passList,
}
