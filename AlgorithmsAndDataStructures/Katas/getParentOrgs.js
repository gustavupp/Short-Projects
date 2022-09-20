const orgsList = [
  {
    id: 1,
    name: 'ANU',
    parentId: null,
  },
  {
    id: 2,
    name: 'ANU Law School',
    parentId: 1,
  },
  {
    id: 3,
    name: 'College of Law',
    parentId: 2,
  },
]

const targetOrg = {
  id: 3,
  name: 'College of Law',
  parentId: 2,
}

// recursive version
function getParentOrgs(orgsList, targetOrg) {
  if (targetOrg.parentId === null) return targetOrg
  let newArr = []
  let newTargetOrg = orgsList.find((o) => o.id === targetOrg.parentId)
  return newArr.concat(getParentOrgs(orgsList, newTargetOrg), targetOrg)
}
console.log(getParentOrgs(orgsList, targetOrg))

// iterative version
function getParentsIteratively(orgsList, targetOrg) {
  let returnArray = [targetOrg]
  if (targetOrg.parentId === null) return [targetOrg]

  while (targetOrg.parentId !== null) {
    let parentOrg = orgsList.find((o) => o.id === targetOrg.parentId)
    returnArray.unshift(parentOrg)
    targetOrg = parentOrg
  }
  return returnArray
}

console.log(getParentsIteratively(orgsList, targetOrg))
