import { RenderTask } from "/target/scala-3.8.3/webgl-fastopt/tasks.js"

onmessage = (event) => {
    eval(event.data)
}