(function () {
  var data = {
    lists: {
      supernova: null,
      stardust: null
    },
  }

  Object.keys(data.lists).forEach(item => {
    var el = document.querySelector("[data-js=button-" + item + "]")
    el.addEventListener("click", function () {
      var selected = "sn__buttons__item__selected"
      data.lists[item] = !data.lists[item]
      var copy = "✨ Sprinkle me with dust"
      if (data.lists.stardust) copy = "✨ Turn me into stardust"
      if (data.lists.stardust && data.lists.supernova) copy = "Make me a star"
      document.querySelector("[data-js=submit]").innerHTML = copy
      if (data.lists[item]) {
        el.classList.add(selected)
      } else {
        el.classList.remove(selected)
      }
    })
  })
})()