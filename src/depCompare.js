const depCompare = (oldDeps, newDeps) =>
  oldDeps.length === newDeps.length &&
  oldDeps.every((dep, i) => {
    console.log(dep, newDeps[i]);
    return dep === newDeps[i];
  });

depCompare([1], [1]);

console.log('TCL: depCompare([], [])', depCompare([1], [1]));
const obj = { a: 1 };
const objRefCopy = obj;

console.log(
  'TCL: depCompare([obj], [objRefCopy])',
  depCompare([obj], [objRefCopy]) // true
);

console.log(
  'TCL: depCompare([obj], [{ a: 1 }])',
  depCompare([obj], [{ a: 1 }]) // false, object compare
);
