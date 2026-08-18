package org.loveroo.webgl.engine.runtime.impl

import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.runtime.{BackgroundTask, TickTask}
import org.loveroo.webgl.engine.runtime.RenderTask.render
import org.scalajs.dom.{DedicatedWorkerGlobalScope, Worker, WorkerOptions, WorkerType}
import scala.scalajs.js
import scala.scalajs.js.Object.{entries, getOwnPropertyNames, getOwnPropertySymbols}
import scala.scalajs.js.{JSON, Object, PropertyDescriptor}
import scala.scalajs.js.annotation.{JSExport, JSGlobal, JSGlobalScope, JSName}

abstract class WebBackgroundTask extends BackgroundTask {
    private val className = getClass.getSimpleName
    private val worker = new Worker(ResourceLoader.getPath("worker.js"), new WorkerOptions { `type` = WorkerType.module })

    protected def run(func: String): Unit = {
        worker.postMessage(s"${className}.${func}()")
    }
}