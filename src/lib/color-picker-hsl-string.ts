import type { ColorModel } from './types';
import { ColorPicker } from './components/color-picker.js';
import { hslStringToHsv, hsvToHslString } from './utils/convert.js';
import { equalColorString } from './utils/compare.js';

const colorModel: ColorModel<string> = {
  defaultColor: 'hsl(0, 0%, 0%)',
  toHsv: hslStringToHsv,
  fromHsv: hsvToHslString,
  equal: equalColorString,
  toAttr: (color) => color,
  fromAttr: (color) => color,
  reflect: true
};

export class ColorPickerHslString extends ColorPicker<string> {
  protected get colorModel(): ColorModel<string> {
    return colorModel;
  }
}

customElements.define('color-picker-hsl-string', ColorPickerHslString);