export let actions = {
  default: async () => {
    return {
      randomNumber: Math.round(Math.random() * Math.random() * 1000),
    };
  },
};
