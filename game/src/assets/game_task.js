import { GameTask, MessageTransfer } from "/impl/target/scala-3.8.3/impl-fastopt/game.js"

let data = new MessageTransfer()

onmessage = (event) => {
    eval(event.data.message)
}