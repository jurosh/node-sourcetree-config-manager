// Typings for sourcetree-config-manager@1.2.0

export function getConfigPath (username: string): string;

export function appendItemToConfig (configPath: string, path: string, name?: string): void;
