import { GameTask, MessageTransfer } from "game.js"

let data = new MessageTransfer()
GameTask.initGame()

onmessage = (event) => {
    eval(event.data.message)
}