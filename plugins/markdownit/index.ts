import { Plugin } from '@nuxt/types';

const plugin: Plugin = ({ $md }) => {
  $md.renderer.rules.link_open = (
    tokens: Array<any>,
    idx: number,
    options: unknown,
    env: unknown,
    self: any
  ) => {
    const aIndex = tokens[idx].attrIndex('target');

    // Add target="blank"
    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank']);
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank';
    }

    // Add "↗"
    tokens[idx + 1].content += '↗';

    return self.renderToken(tokens, idx, options);
  };
};

export default plugin;
