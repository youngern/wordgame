import { Liquid } from 'liquidjs';

import templates from '../templates';

// getTemplate :: string => Promise
export const getTemplate = async (templateName) => {
  const template = templates[templateName];
  const engine = new Liquid();
  const tpl = engine.parse(template.body);
  const assigned = await engine.render(tpl, { words: template.variables });

  return assigned;
};
