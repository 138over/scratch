External Configuration
---
Decoupling configuration from the automation tool that is used to run a pipeline improves:  

* flexiblity  
* resuse  
* simplicity  
* change management  

Instead, I'm using a data format and utility that provides the ability to define a matrix of configurations, 
and then extract a slice (vertice) of the matrix, which becomes the input to the tool that
runs the automation pipeline. [Hocon is my current tool of choice](https://github.com/138over/woo-config).   

Google achieves this via [Gyp](https://gyp.gsrc.io) and [GN](https://chromium.googlesource.com/chromium/src/tools/gn/).  There is no reason the entire product lifecycle, cannot be modeled as data, independently of tasks...

The tasks should be dumb, declarative, single purpose, and the configuration smart. 

* [gradle example of simple tasks](https://github.com/138over/woo-docs/blob/master/src/workspaces/gradle.tasks.md)  
* [gnu-make  example of simple tasks](https://github.com/138over/woo-docs/blob/master/src/workspaces/makefile.target.md)  

Gradle Example with Spring
---
```
given a matrix of configurations
retrieve a slice of the the matrix
and dynamically assign to gradle configuration tasks
then run gradle buildEnvironment buildInfo
```

The challenge initially is how to configure the buildscript section of gradle. 
The buildscript section of gradle sets up the environment to build the project, including downloads its plugin dependencies and setting the classpath.  

My first thought was metaprogramming the gradle dsl. Tried playing the meta 
game and it works when inlined within the buildscript {} block but does not 
work when using gradle 'apply from' statement

```
    This works inline i.e build.gradle. But if I want to have this functionality shared among many builds, and even for an organization, I want to use the gradle 'apply from' functionality, but it does not work... 

    buildscript {
        repositories.metaClass.buildscriptConfig { repo ->
            repo.each { r ->
                delegate.maven {
                    url r.url
                }
            }
        }

        repositories {
            buildscriptConfig()
        }
    }
```

Searching for info on how this might be done with the gradle dsl  

[Groovy Metaprogamming in Gradle](https://github.com/gradle/gradle/issues/2173) not a good idea. bummmmmmer   
[Apply 'from' in buildscript issue](https://github.com/gradle/kotlin-dsl/issues/497)   
[Related -- Cannot apply plugin by id from init script (from outside distribution)](https://github.com/gradle/gradle/issues/1322)   
[Luke Daly buildscript modification](https://discuss.gradle.org/t/how-can-you-use-an-init-script-to-specify-a-repo-dependency-for-a-plugin-jar-but-allow-version-to-be-configured-in-builds-root-project/5416/4)  Nice! ok. this looks like interesting   

Luke's approach will work!  A quick mockup...  

```
Given an external configuration file in json format, define the plugin repositories to use, 
the plugins to load, and the classpath to use the plugins

cfg.json
~~~~~~~~~~
{
    "repo": [ 
        {
            "type": "maven",
            "url": "https://repo.spring.io/plugins-release"
        },
        {
            "type": "maven",
            "url": "https://plugins.gradle.org/m2/"
        }
    ],
    "classpath": [
        "gradle.plugin.com.github.nwillc:buildinfo:0.1.4",
        "io.spring.gradle:propdeps-plugin:0.0.8",
        "io.spring.gradle:docbook-reference-plugin:0.3.1",
        "org.asciidoctor:asciidoctorj-pdf:1.5.0-alpha.16",
        "org.asciidoctor:asciidoctorj-epub3:1.5.0-alpha.7"
    ],
    "plugins": [
        {
            "id": "com.github.nwillc.buildinfo"
        },
        {
            "id": "java"
        },
        {
            "id": "project-report"
        }
    ]
}
```

Create an external gradle script to import into the build.gradle and implement 
extensions to handle the mapping of external configuration to gradle configuration.
The external script will slurp in the json configuration data. Again, this external
script would be a candidate to share across projects, teams, organization

```
init.gradle
~~~~~~~~~~
def cfg = new groovy.json.JsonSlurper().parseText(new File('cfg.json').text)

class OurPlugins {
    Map cfg
    ScriptHandler buildscript
    Project project
    
    OurPlugins(project, cfg) {
        this.cfg = cfg
        this.project = project
        this.buildscript = project.buildscript
    }

    def applyRepos() {
        cfg.repo.each { r ->
            buildscript.repositories.maven { m ->
                m.url = r.url
            }
        }
    }

    def applyClasspaths() {
        cfg.classpath.each { c ->
            buildscript.dependencies {
                classpath c
            }
        }
    }
}

class OurConf {
    Map cfg
    List plugins
    Project project

    OurConf(project, cfg) {
        this.project = project
        this.cfg = cfg
        this.plugins = cfg.plugins
    }

    def applyPlugins() {
        plugins.each { p ->
            project.getPluginManager().apply(p.id)
        }
    }
}

allprojects {
    extensions.create('ourPlugins', OurPlugins, project,cfg)
    extensions.create('ourConf', OurConf, project, cfg)
}
```

```

Now the build.gradle is a consumer of the external script, and
configuration has been removed from within the build.gradle's buildscript section

build.gradle
~~~~~~~~~~
buildscript {
    apply from: project.file('init.gradle')

    ourPlugins.applyRepos()
    ourPlugins.applyClasspaths()
}

ourConf.applyPlugins()
```

With this approach I can decouple the entire configuration from the build.gradle, and have build pipelines that are reusable between projects, teams, organizations. Another way to think of this is, define a pipeline as a template, the only thing that changes is 
the configuration, and this is how we arrive at, [gradle  example of simple tasks](https://github.com/138over/woo-docs/blob/master/src/workspaces/gradle.tasks.md)

