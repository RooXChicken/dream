import org.scalajs.linker.interface.ModuleSplitStyle

name := "webgl"
scalaVersion := "3.8.3"

lazy val predef = project

lazy val webgl = project.in(file("."))
    .dependsOn(predef)
    .enablePlugins(ScalaJSPlugin) // Enable the Scala.js plugin in this project
    .settings(
        // Tell Scala.js that this is an application with a main method
        scalaJSUseMainModuleInitializer := true,
        scalacOptions ++= Seq(
            "-Yimports:org.loveroo.predef.Predef"
        ),

        /* Configure Scala.js to emit modules in the optimal way to
         * connect to Vite's incremental reload.
         * - emit ECMAScript modules
         * - emit as many small modules as possible for classes in the "livechart" package
         * - emit as few (large) modules as possible for all other classes
         *   (in particular, for the standard library)
         */
        scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) },

        /* Depend on the scalajs-dom library.
         * It provides static types for the browser DOM APIs.
         */
        libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.8.1",
    )