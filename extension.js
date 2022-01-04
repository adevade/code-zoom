const vscode = require('vscode');

function activate(context) {
	let config = vscode.workspace.getConfiguration('editor');

	let makeDefault = vscode.commands.registerCommand('code-zoom.default', () => {
		config.update('fontSize');
		config.update('lineHeight');
	});

	let makeSmall = vscode.commands.registerCommand('code-zoom.small', () => {
		config.update('fontSize', 12);
		config.update('lineHeight', 16);
	});

	context.subscriptions.push(makeDefault, makeSmall);
}

function deactivate() {
	let config = vscode.workspace.getConfiguration('editor');

	config.update('fontSize');
	config.update('lineHeight');
}

module.exports = {
	activate,
	deactivate
}
