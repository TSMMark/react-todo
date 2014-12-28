window.Utils = {
  merge: function (obj1, obj2, etc) {
    var args = Array.prototype.slice.call(arguments)
      , into = args.shift()

    args.forEach(function (obj) {
      for (var attr in obj) {
        into[attr] = obj[attr]
      }
    })

    return into
  }
}
