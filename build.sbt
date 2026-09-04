import org.scalajs.linker.interface.ModuleSplitStyle
import org.scalajs.linker.interface.ModuleInitializer

lazy val importPredef = Seq(
    scalacOptions ++= Seq(
        "-Yimports:org.loveroo.predef.Predef"
    ),
)

lazy val predef = project
    .in(file("predef"))
    .enablePlugins(ScalaJSPlugin)

lazy val engine = project
    .in(file("engine"))
    .dependsOn(predef)
    .enablePlugins(ScalaJSPlugin)
    .settings(importPredef)

lazy val game = project
    .in(file("game"))
    .dependsOn(
        predef,
        engine
    )
    .enablePlugins(ScalaJSPlugin)
    .settings(importPredef)

lazy val impl = project
    .in(file("impl"))
    .dependsOn(
        predef,
        engine,
        game
    )
    .enablePlugins(ScalaJSPlugin, WebScalaJSBundlerPlugin)
    .settings(
        importPredef,
        libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.8.1",
        libraryDependencies += ("org.scala-js" %%% "scalajs-fake-insecure-java-securerandom" % "1.0.0").cross(CrossVersion.for3Use2_13),
        scalaJSLinkerConfig ~= {
            _.withModuleKind(ModuleKind.ESModule)
        },
        Compile / scalaJSModuleInitializers += {
            ModuleInitializer.mainMethod("org.loveroo.webgl.Dream", "main")
        }
    )
