import computeDays from '../src/Js/computeDays';

it('should return correct date array', () => {
  let forntDate = new Date();
  for(let i = 0; i < 100; i++) {
    testFunc(forntDate);
    forntDate = new Date(forntDate.getFullYear(), forntDate.getMonth() + 1, 1);
  }
  let backDate = new Date();
  for(let i = 0; i < 100; i++) {
    testFunc(backDate);
    backDate = new Date(backDate.getFullYear(), backDate.getMonth() - 1, 1);
  }
  function testFunc (date) {
    const dateArr = computeDays(date);
    dateArr.forEach((val) => {
      expect(val.length).toBe(7);
    });
    const lastArr = dateArr[dateArr.length - 1];
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    const mark = lastArr.indexOf('');
    if(mark > 0) {
      expect(lastArr[mark - 1]).toBe(date.getDate());
    } else {
      expect(lastArr[lastArr.length - 1]).toBe(date.getDate());
    }
  }
});
