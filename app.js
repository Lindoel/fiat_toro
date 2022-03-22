let design_box = document.querySelector("#design")
let interior_box = document.querySelector(".interior")
let performance_box = document.querySelector(".performance")
let tecnology_box = document.querySelector(".tecnology")
let safety_box = document.querySelector(".safety")

let button_design = document.querySelector("#button_design")
let button_interior = document.querySelector("#button_interior")
let button_performance = document.querySelector("#button_performance")
let button_tecnology = document.querySelector("#button_tecnology")
let button_safety = document.querySelector("#button_safety")

function design() {
      design_box.style.display = 'flex'
      button_design.style.backgroundColor = '#008000'

      interior_none()
      performance_none()
      tecnology_none()
      safety_none()
}

function interior() {
      interior_box.style.display = 'flex'
      button_interior.style.backgroundColor = '#008000'
      
      design_none()
      performance_none()
      tecnology_none()
      safety_none()
}

function performance() {
      performance_box.style.display = 'flex'
      button_performance.style.backgroundColor = '#008000'

      design_none()
      interior_none()
      tecnology_none()
      safety_none()
}

function tecnology() {
      tecnology_box.style.display = 'flex'
      button_tecnology.style.backgroundColor = '#008000'

      design_none()
      interior_none()
      performance_none()
      safety_none()
}

function safety() {
      safety_box.style.display = 'flex'
      button_safety.style.backgroundColor = '#008000'

      design_none()
      interior_none()
      performance_none()
      tecnology_none()
}



function design_none() {
      design_box.style.display = 'none'
      button_design.style.backgroundColor = '#00000000'
}

function interior_none() {
      interior_box.style.display = 'none'
      button_interior.style.backgroundColor = '#00000000'
}

function performance_none() {
      performance_box.style.display = 'none'
      button_performance.style.backgroundColor = '#00000000'
}

function tecnology_none() {
      tecnology_box.style.display = 'none'
      button_tecnology.style.backgroundColor = '#00000000'
}

function safety_none() {
      safety_box.style.display = 'none'
      button_safety.style.backgroundColor = '#00000000'
}