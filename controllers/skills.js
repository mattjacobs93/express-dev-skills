import * as skillDb from '../data/skill-db.js'

//Note: I coded the below function by hand using the provided function as a guide from https://www.notion.so/seiremote/Express-Routers-Controllers-d1d13d2ef3fc4b77b42e00e0821ce4ad

function index (req, res) {
  skillDb.find({}, function (error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, function (error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}




export {
  index,
  show,
}