const Skill = require('../models/skill')

let index = (req, res) => {
    res.render('index.ejs', { skills: Skill.getAll() })
}

let show = (req, res) => {
    res.render('show.ejs', { skill: Skill.getOne(req.params.id) })
}

let newSkill = (req, res) => {
    res.render('new.ejs');
}

let addSkill = (req, res) => {
    req.body.id = Math.floor(Math.random()*10000000);
    Skill.getAll().push(req.body);
    res.redirect('/skills');
}

let editSkill = (req, res) => {
    res.render('edit.ejs', { skill: Skill.getOne(req.params.id) })
}

let updateSkill = (req, res) => {
    Skill.getAll().splice(req.params.id, 1);
    req.body.id = Skill.getAll().length
    Skill.getAll().push(req.body);
    res.redirect(`/skills/${req.body.id}`)
}

let deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

module.exports = {
    index,
    show,
    new: newSkill,
    add: addSkill,
    edit: editSkill,
    update: updateSkill,
    delete: deleteSkill,
}