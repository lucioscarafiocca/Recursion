function fibs(n) {
  let answer = [0, 1]
  for (let i = 3; i <= n; i++) {
    let add = answer[answer.length - 1] + answer[answer.length - 2]
    answer.push(add)
  }
  if (n == 1) {
    return [0]
  } else if (n == 2) {
    return [0, 1]
  } else {
    return answer
  }
}

function fibsRec(n, answer = [0, 1]) {
  if (n == 1) {
    return [0]
  } else if (n == 2) {
    return answer
  } else {
    let add = answer[answer.length - 1] + answer[answer.length - 2]
    answer.push(add)
    fibsRec(n - 1, answer)
  }
  return answer
}

function mergeSort(n, array = []) {
  if (n.length == 1) {
    return
  }
  let mid = Math.ceil(n.length / 2)
  let left = n.slice(0, mid)
  let right = n.slice(mid)

  if (n.length == 2) {
    if (n[0] > n[1]) {
      array.push(n[1], n[0])
      return array
    } else {
      array.push(n[0], n[1])
      return array
    }
  }

  return merge([mergeSort(left), mergeSort(right)])
}

function merge(a) {
  let left = a[0]
  let right = a[1]
  let array = []

  while (left[0] !== undefined || right[0] !== undefined) {
    if (left[0] > right[0] || left[0] == undefined) {
      array.push(right[0])
      right.shift()
    } else {
      array.push(left[0])
      left.shift()
    }
  }

  return array
}
