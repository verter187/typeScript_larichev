function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

console.log(getSplitedHalf<Number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;

interface ILogLine<T> {
  timeStamp: Date;
  data: T;
}

type LogLineType<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogLine<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};
