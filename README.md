the [`launch.json`](https://github.com/Carlyle-Foster/the_simplest_vscode_extension/blob/master/.vscode/launch.json) is unecessary, it's just there so u can try this thing without installing it

..press `F5` (Start Debugging) to do that, btw

> let the TRIVIA commence..

vscode DOES support using [EcmaScript Modules as extensions](https://code.visualstudio.com/updates/v1_100#_extension-authoring) but it's very recent, thus the high [minimum version](https://github.com/Carlyle-Foster/the_simplest_vscode_extension/blob/3365f02444b3cbc32bd5554b7e9d2fa9decfa39d/package.json#L5) in `package.json`

it's implied [here](https://code.visualstudio.com/api/get-started/extension-anatomy#extension-manifest) that the `publisher` field in `package.json` is required, and it probably should be but it's not so i don't include it
