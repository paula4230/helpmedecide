import { application } from "./application"
import controllers from './**/*_controller.js.js.js.js.js'
controllers.forEach((controller) => {
  application.register(controller.name, controller.module.default)
})

