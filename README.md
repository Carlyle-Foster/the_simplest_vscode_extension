`.vscode/launch.json` is unecessary, it's just there so u can try this thing without installing it

..press `f5` to do that, btw

vscode DOES support [using EcmaScript Modules as extensions](https://code.visualstudio.com/updates/v1_100#_esm-support-for-extensions) but it's very recent, thus the high minimum version in `package.json` (^1.100.0)

it's implied [here](https://code.visualstudio.com/api/get-started/extension-anatomy#extension-manifest) that the `publisher` field in `package.json` is required, and it probably should be, but it's not so i don't include it
