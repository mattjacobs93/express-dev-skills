import * as skillDb from '../data/skill-db.js'

//Note: I coded the below function by hand using the provided function as a guide from https://www.notion.so/seiremote/Express-Routers-Controllers-d1d13d2ef3fc4b77b42e00e0821ce4ad and https://www.notion.so/seiremote/Express-Middleware-a1ee2c6825f945a09e87d78d6318a0de

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

function newSkill (req,res) {
  res.render('skills/new')
}

function create(req,res) {
  console.log(req.body)
  skillDb.create(req.body, function (error,todo) {
    res.redirect('/skills')
  })
}

function deleteSkill (req, res) {
  skillDb.findByIdAndDelete(req.params.id, function (error,skill) {
    res.redirect('/skills')
  })
}



export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete
}