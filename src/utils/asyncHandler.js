const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve().catch((error) => next(error));
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//   //Higher order function that takes function as a parameter. const abc = (function) => {() => {}}.
//   // const asyncHandler = () => {}
//   // const asyncHandler = (func) => () => {}
//   // const asyncHandler = (func) => async () => {}
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ success: false, message: error.message });
//   }
// };
