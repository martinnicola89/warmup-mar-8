let skills = [
    {
        id: 0,
        name: 'JavaScript',
        yearsExperience: 5
    },
    {
        id: 1,
        name: 'Python',
        yearsExperience: 10
    },
]

function getAll() { return skills }

function getOne(id) { return skills.find(skill => skill.id == parseInt(id)) } 

function deleteOne(id) { skills = skills.filter(skill => skill.id !== parseInt(id)) };

module.exports = {
    getAll,
    getOne,
    deleteOne,
}