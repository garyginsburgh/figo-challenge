export default <T>(data: T[], page = 1, limit = 10): T[] =>
  data.slice((page - 1) * limit, limit * page);
