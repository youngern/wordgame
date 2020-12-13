import { Liquid } from 'liquidjs';

import templates from '../templates';

// getTemplate :: string => Promise
export const getTemplate = async (templateName, variables) => {
  const template = templates[templateName];
  const engine = new Liquid();
  const tpl = engine.parse(template.body);
  const assigned = await engine.render(tpl, { words: variables });

  return assigned;
};

export const getVariables = async (templateName) => {
  const template = templates[templateName];
  return template.variables;
};
