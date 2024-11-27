import '@univerjs/presets/lib/styles/preset-sheets-core.css';
import '@univerjs/sheets-crosshair-highlight/lib/index.css';
import '@univerjs/sheets-zen-editor/lib/index.css';

import { LocaleType, Tools, createUniver, defaultTheme } from '@univerjs/presets';
import { UniverSheetsCorePreset } from '@univerjs/presets/preset-sheets-core';
import UniverPresetSheetsCoreEnUs from '@univerjs/presets/preset-sheets-core/locales/en-US';

import { UniverSheetsCrosshairHighlightPlugin } from '@univerjs/sheets-crosshair-highlight';
import sheetsCrosshairHighlightEnUs from '@univerjs/sheets-crosshair-highlight/locale/en-US';

import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor';
import SheetsZenEditorEnUs from '@univerjs/sheets-zen-editor/locale/en-US';

import '@univerjs/sheets-crosshair-highlight/facade';

export function setupUniver() {
  const { univerAPI } = createUniver({
    locale: LocaleType.EN_US,
    locales: {
      enUS: Tools.deepMerge({}, UniverPresetSheetsCoreEnUs, sheetsCrosshairHighlightEnUs, SheetsZenEditorEnUs)
    },
    theme: defaultTheme,
    presets: [
      UniverSheetsCorePreset({
        container: 'univer'
      })
    ],
    plugins: [UniverSheetsCrosshairHighlightPlugin, UniverSheetsZenEditorPlugin]
  });

  univerAPI.createUniverSheet({});

  univerAPI.setCrosshairHighlightEnabled(true);
  univerAPI.setCrosshairHighlightColor('rgba(0,0,0,0.01)');

  return univerAPI;
}
