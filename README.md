> Try it for yourself!

open vscode with `code --extensionDevelopmentPath=$PWD`, use `Ctrl+Shift+P` to open the *Command Pallette* and check your mail

> Let the TRIVIA commence..

vscode DOES support using [EcmaScript Modules as extensions][1] but it's very recent, thus the high [minimum version][2] in `package.json`

it's implied [here][3] that the `publisher` field in `package.json` is required, and it probably should be but it's not so i don't include it

[1]: https://code.visualstudio.com/updates/v1_100#_extension-authoring
[2]: https://github.com/Carlyle-Foster/the_simplest_vscode_extension/blob/3365f02444b3cbc32bd5554b7e9d2fa9decfa39d/package.json#L5
[3]: https://code.visualstudio.com/api/get-started/extension-anatomy#extension-manifest
