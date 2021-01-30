import fs from "fs";

const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const saveToLogFile = (data: string): any => {
  fs.appendFile("./source/config/logs.txt", "\n" + data, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(
      `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
      object
    );
    saveToLogFile(
      `[${getTimeStamp()}] [INFO] [${namespace}] ${message} ${object}`
    );
  } else {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    saveToLogFile(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(
      `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
      object
    );
    saveToLogFile(
      `[${getTimeStamp()}] [WARN] [${namespace}] ${message} ${object}`
    );
  } else {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    saveToLogFile(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
      object
    );
    saveToLogFile(
      `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message} ${object}`
    );
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    saveToLogFile(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(
      `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
      object
    );
    saveToLogFile(
      `[${getTimeStamp()}] [ERROR] [${namespace}] ${message} ${object}`
    );
  } else {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    saveToLogFile(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

export default {
  info,
  warn,
  debug,
  error,
};
