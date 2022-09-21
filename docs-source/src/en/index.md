---
home: true
title: Home
heroImage: /images/logo.png
actions:
  - text: Get Started
    link: /en/guide/home
    type: primary
  - text: Changelog
    link: /en/about/changelog
    type: secondary
features:
  - title: Xposed Module Develop
    details: The automatic builder can help you quickly create an Xposed Module, automatic configure the entry class and xposed_init file.
  - title: Light and Elegant
    details: A powerful, elegant, beautiful API built with Kotlin lambda can help you quickly implement members search and methods hooks.
  - title: Debugging Efficient
    details: A rich debug log function, detailing the name of each hooked method, time-consuming to find the class can quickly debug and find errors.
  - title: Easy to transplant
    details: Native support for Xposed API usage, in any case, the supported Hook Framework with Xposed API can be quickly spliced with it.
  - title: Obfuscate Support
    details: The built Xposed Module simply supports R8, obfuscate will not destroy the hook entry point, and no other configuration is required under R8.
  - title: Quickly Started
    details: Simple and easy to use it now! Do not need complex configuration and full development experience, Integrate dependencies and enjoy yourself.
footer: MIT License | Copyright (C) 2019-2022 HighCapable
---

### All Hook process in one step, everything is simplified

```kotlin
loadApp(name = "com.android.browser") {
    ActivityClass.hook {
        injectMember {
            method {
                name = "onCreate"
                param(BundleClass)
            }
            beforeHook {
                // Your code here.
            }
            afterHook {
                // Your code here.
            }
        }
    }
    resources().hook {
        injectResource {
            conditions {
                name = "ic_launcher"
                mipmap()
            }
            replaceToModuleResource(R.mipmap.ic_launcher)
        }
    }
}
```