import * as vsc from 'vscode';

function check_mail() {
    vsc.window.showInformationMessage('well that was simple');
}

export function activate(_) {
    vsc.commands.registerCommand('simply.check_mail', check_mail);
}
