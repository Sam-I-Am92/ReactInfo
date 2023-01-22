// test timelog function sends back time string
export const timeLog = (req, res) => {
  var time = `${Date.now()}`;
  res.status(200).send(time);
};