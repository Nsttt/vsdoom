// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DoomPanel } from './DoomPanel';
import { SidebarProvider } from './sidebarProvider';

export function activate(context: vscode.ExtensionContext) {
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("vsdoom-sidebar", sidebarProvider)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("vsdoom.run", () => {
			DoomPanel.createOrShow(context.extensionUri);
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
