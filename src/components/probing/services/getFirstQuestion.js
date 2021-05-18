export const getFirstQuestion = questions => {
  const firstQuestion = questions?.filter(
    question => question?.data?.order === 1
  )
  if (firstQuestion.length > 0) {
    return firstQuestion[0]
  } else return ""
}
