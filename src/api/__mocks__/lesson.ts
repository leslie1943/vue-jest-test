export const getLessonList = jest.fn(() => {
  // console.info('>>>>>>>> ATTENTION START <<<<<<<<')
  // console.info('IN depens-modules.spec.ts File')
  // console.info('')
  // console.info('>>>>>>>> ATTENTION FINISH <<<<<<<<')
  const lessons = {
    success: true,
    data: [
      { id: 1, title: '深入理解ES6' },
      { id: 2, title: 'JavaScript高级程序设计' },
      { id: 3, title: 'CSS揭秘' },
      { id: 4, title: '深入浅出Vue.js' },
    ],
  }

  return Promise.resolve(lessons)
})
