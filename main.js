const vsc = require('vscode');

exports.activate = function(context) {
    const handle = vsc.commands.registerCommand(
        'simply.check_mail', 
        vsc.window.showInformationMessage.bind(null, 'well that was simple')
    );
    context.subscriptions.push(handle)
}