import org.scalajs.linker.interface.ModuleSplitStyle
import org.scalajs.linker.interface.ModuleInitializer

name := "webgl"
scalaVersion := "3.8.3"

lazy val predef = project

lazy val webgl = project.in(file("."))
    .dependsOn(predef)
    .enablePlugins(ScalaJSPlugin, WebScalaJSBundlerPlugin)
    .settings(
        scalacOptions ++= Seq(
            "-Yimports:org.loveroo.predef.Predef"
        ),
        scalaJSLinkerConfig ~= {
            _.withModuleKind(ModuleKind.ESModule)
        },
        libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.8.1",
        Compile / scalaJSModuleInitializers += {
            ModuleInitializer.mainMethod("org.loveroo.webgl.Runtime", "main")
        },
    )