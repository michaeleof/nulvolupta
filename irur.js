function collect(values) {
  return Object.values(values).reduce((acc, current) => acc.concat([current]), []);
}
