const skills = [
  {name:'HTML', notes: 'Markup language for webpage elements', _id: 1},
  {name:'CSS', notes: 'Allows for style to be added to HTML pages', _id: 2},
  {name:'JavaScript', notes: 'Programming language to add dynamic functionality to webpages', _id: 3},
  {name:'Node', notes: 'Environmnet to run JavaScript code outside of the browswer', _id: 4},
  {name:'Express', notes: 'Backend framework for setting up servers run in a node environment', _id: 5},
]


//as per instructions, I coded the below functions by hand using the find function from https://www.notion.so/seiremote/Express-Routers-Controllers-d1d13d2ef3fc4b77b42e00e0821ce4ad as a guide:

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)) throw new TypeError('Please pass in an object')
    if (Object.keys(conditions).length === 0) return callback(null, skills)


  } catch (error) {
    console.log(error)
    callback(error,[])
  }
}

const findById = (id, callback) => {
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }


}



export {
  find,
  findById,
}