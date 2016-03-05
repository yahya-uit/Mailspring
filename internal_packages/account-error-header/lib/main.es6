import {ComponentRegistry, WorkspaceStore} from 'nylas-exports';
import AccountErrorHeader from './account-error-header';

export function activate() {
  ComponentRegistry.register(AccountErrorHeader, {location: WorkspaceStore.Sheet.Global.Header});
}

export function serialize() {}

export function deactivate() {
  ComponentRegistry.unregister(AccountErrorHeader);
}
