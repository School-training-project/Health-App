const db = require("../dbConnection")

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const d = new Date()
const date = d.getDate()
const monthIndex = d.getMonth()
const monthName = months[monthIndex]
const year = d.getFullYear()
const formatted = `${date} ${monthName} ${year}`

const createUser = async (obj) => {
    const credential = new db.Credential({
        name: obj.name,
        email: obj.email,
        password: obj.password
    })
    await credential.save()
    return credential
}


const createUserData = async (obj) => {
    const data = new db.Data({
        email: obj.email,
        caloriesBurnt: obj.caloriesBurnt,
        stepsWalked: obj.stepsWalked,
        caloriesIncome: obj.caloriesIncome,
        hoursSlept: obj.hoursSlept,
    })
    await data.save()
}

const findUser = async (obj) => {
    return await db.Credential.find(obj).exec()
}


const getUserData = async (obj = {}) => {
    const data = await db.Data.find(obj)
    return data
}

const getUser = async (obj = {}) => {
    const users = await db.Credential.find(obj);
    return users
};

const updateUser = async (obj = {}, cond) => {
    const result = await db.Credential.updateOne(cond, { $set: obj })
    return result
}

const updateUserData = async (obj = {}, cond) => {
    const result = await db.Data.updateOne(cond, { $set: obj })
    return result
}
const pushObjDataHoursSlept = async (number, cond) => {
    const result = await db.Data.updateOne({ filter: cond }, { $push: { hoursSlept: { sleep: number, day: `${formatted}` } } })

    return result
}
const pushObjDataStepsWalked = async (number, cond) => {
    const result = await db.Data.updateOne({ filter: cond }, { $push: { stepsWalked: { steps: number, day: `${formatted}` } } })

    return result
}
const pushObjDataHydrationRate = async (number, cond) => {
    const result = await db.Data.updateOne({ filter: cond }, { $push: { hydrationRate: { water: number, day: `${formatted}` } } })

    return result
}
const pushObjDataCaloriesBurnt = async (number, cond) => {
    const result = await db.Data.updateOne({ filter: cond }, { $push: { caloriesBurnt: { calories: number, day: `${formatted}` } } })
    // await db.save()

    return result
}
const pushObjDataCaloriesIncome = async (number, cond) => {
    const result = await db.Data.updateOne({ filter: cond }, { $push: { caloriesIncome: { calories: number, day: `${formatted}` } } })

    return result
}

const removeUser = async (obj) => {
    const result = await db.Credential.deleteOne(obj)
    return result
}
const removeUserData = async (obj) => {
    const result = await db.Data.deleteOne(obj)
    return result
}


module.exports.findUser = findUser
module.exports.removeUser = removeUser
module.exports.removeUserData = removeUserData
module.exports.updateUser = updateUser
module.exports.updateUserData = updateUserData
module.exports.createUser = createUser
module.exports.getUser = getUser
module.exports.getUserData = getUserData
module.exports.pushObjDataHoursSlept = pushObjDataHoursSlept
module.exports.pushObjDataStepsWalked = pushObjDataStepsWalked
module.exports.pushObjDataCaloriesBurnt = pushObjDataCaloriesBurnt
module.exports.pushObjDataCaloriesIncome = pushObjDataCaloriesIncome
module.exports.createUserData = createUserData
module.exports.pushObjDataHydrationRate = pushObjDataHydrationRate
