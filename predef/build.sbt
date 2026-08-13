import org.scalajs.linker.interface.ModuleSplitStyle

name := "predef"
scalaVersion := "3.8.3"

lazy val predef = project.in(file("."))
    .enablePlugins(ScalaJSPlugin) // Enable the Scala.js plugin in this project
    .settings(
        scalaJSLinkerConfig ~= {
            _.withModuleKind(ModuleKind.ESModule)
                .withModuleSplitStyle(ModuleSplitStyle.SmallModulesFor(List("predef")))
        }
    )