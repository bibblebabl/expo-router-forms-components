const accountName = "bibblebabl";
const projectName = "expo-router-forms-components";
const appName = "Expo Router Forms Components";

const identifiers = {
  development: `com.${accountName}.${projectName}.dev`,
  preview: `com.${accountName}.${projectName}.preview`,
  default: `com.${accountName}.${projectName}`,
};

const appNames = {
  development: `${appName} (Dev)`,
  preview: `${appName} (Preview)`,
  default: appName,
};

const getUniqueIdentifier = () => {
  return identifiers[process.env.APP_VARIANT] || identifiers.default;
};

const getAppName = () => {
  return appNames[process.env.APP_VARIANT] || appNames.default;
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});
