export default (config) => {
  config.server = config.server || {};
  config.server.allowedHosts = ['api.satvik.de'];
  return config;
};
