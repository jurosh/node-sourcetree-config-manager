
import {appendItemToConfig, getConfigPath} from 'sourcetree-config-manager';

appendItemToConfig(getConfigPath('jurosh'), 'path\\to\\git\\project', 'Test Git Project Name');
