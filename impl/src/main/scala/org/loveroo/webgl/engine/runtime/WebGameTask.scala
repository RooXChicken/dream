package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.data.{DataWriter, Uint8DataReader, Uint8DataWriter}
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.input.WebInput
import org.scalajs.dom.*

import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}
import scala.scalajs.js.typedarray.{ArrayBuffer, Uint8Array}

class WebGameTask(private val messageHandler: MessageTransfer => Unit) extends GameTask {
    private val bufferTransfer = new js.Array[Transferable]()
    private val bufferMsg = new MessageTransfer()
    private val scratchMsg = new MessageTransfer()

    @Null
    private var worker: Worker = null

    override def init(): Unit = {
        worker = new Worker(
            EngineRuntime.debug.evaluate("game/src/assets/game_task.js", "assets/game_task.js"), new WorkerOptions {
                `type` = WorkerType.module
            }
        )

        scratchMsg.message = s"data.message = \"${GameTask.framePrepared}\""
        worker.postMessage(scratchMsg)

        worker.addEventListener[MessageEvent]("message", m => {
            messageHandler(m.data.as[MessageTransfer])
        })
    }

    override def tick(input: DataWriter): Unit = {
        bufferTransfer.clear()
        bufferTransfer.addOne(input.as[Uint8DataWriter].buffer.buffer)

        bufferMsg.message = s"data.buffer = GameTask.tick(event.data.buffer)"
        bufferMsg.buffer = input.as[Uint8DataWriter].buffer

        scratchMsg.message = s"postMessage(data, [data.buffer.buffer])"

        worker.postMessage(bufferMsg, bufferTransfer)
        worker.postMessage(scratchMsg)
    }
}

@JSExportTopLevel(name = "MessageTransfer", moduleID = "game")
class MessageTransfer extends js.Object {
    var message: String = ""

    @Null
    var buffer: Uint8Array = null
}

@JSExportTopLevel(name = "GameTask", moduleID = "game")
object WebGameTask {
    @Null
    private var game: Game = null

    @JSExport
    def initGame(): Unit = {
        if(game == null) {
            game = new Game(new WebEngineRuntime())
        }
    }

    @JSExport
    def tick(buffer: Uint8Array): Uint8Array = {
        ER.input.as[WebInput].handleChanges(new Uint8DataReader(buffer))
        game.tick().as[Uint8DataWriter].buffer
    }
}
