import * as Time from './time';

describe('Time', () => {
  describe('secondsToTime', () => {
    it('should format the time.', () => {
      expect(Time.secondsToTime(6)).toBe('00:06');
      expect(Time.secondsToTime(10)).toBe('00:10');
      expect(Time.secondsToTime(60)).toBe('01:00');
      expect(Time.secondsToTime(66)).toBe('01:06');
      expect(Time.secondsToTime(90)).toBe('01:30');
      expect(Time.secondsToTime(120)).toBe('02:00');
      expect(Time.secondsToTime(600)).toBe('10:00');
    });
  });

});
