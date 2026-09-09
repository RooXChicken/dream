import { GameTask, MessageTransfer } from "/game.js"

let data = new MessageTransfer()

onmessage = (event) => {
    eval(event.data.message)
}