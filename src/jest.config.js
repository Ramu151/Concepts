module.exports = {
  preset: "react-scripts", // or any other preset you are using
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  // ... other Jest configuration options
};
