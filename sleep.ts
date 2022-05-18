import lodash from "lodash";

const sleep = (sec) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

const _ = { sleep, ...lodash };

export default _;
