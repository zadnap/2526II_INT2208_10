import classifyTriangle from './triangle';

describe('Module Phân Loại Tam Giác', () => {
  describe('Nhóm 1: Kiểm tra ngoại lệ đầu vào', () => {
    test('TC_01: Biên dưới của a vi phạm', () => {
      expect(classifyTriangle(0, 50, 50)).toBe('Invalid Input');
    });

    test('TC_02: Biên trên của a vi phạm', () => {
      expect(classifyTriangle(101, 50, 50)).toBe('Invalid Input');
    });

    test('TC_03: Biên dưới của b vi phạm', () => {
      expect(classifyTriangle(50, 0, 50)).toBe('Invalid Input');
    });

    test('TC_14: Biên trên của b vi phạm', () => {
      expect(classifyTriangle(50, 101, 50)).toBe('Invalid Input');
    });

    test('TC_04: Biên dưới của c vi phạm', () => {
      expect(classifyTriangle(50, 50, 0)).toBe('Invalid Input');
    });

    test('TC_15: Biên trên của c vi phạm', () => {
      expect(classifyTriangle(50, 50, 101)).toBe('Invalid Input');
    });
  });

  describe('Nhóm 2: Kiểm tra logic nghiệp vụ', () => {
    test('TC_05: Tổng hai cạnh bé hơn cạnh còn lại', () => {
      expect(classifyTriangle(10, 20, 50)).toBe('Not a Triangle');
    });

    test('TC_06: Chạm biên bất đẳng thức', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    test('TC_07: Tam giác đều', () => {
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
    });

    test('TC_08: Tam giác đều ở biên hợp lệ lớn nhất', () => {
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });

    test('TC_09: Cân tại đỉnh c', () => {
      expect(classifyTriangle(50, 50, 40)).toBe('Isosceles');
    });

    test('TC_10: Cân tại đỉnh a', () => {
      expect(classifyTriangle(40, 50, 50)).toBe('Isosceles');
    });

    test('TC_11: Cân tại đỉnh b', () => {
      expect(classifyTriangle(50, 40, 50)).toBe('Isosceles');
    });

    test('TC_12: Tam giác thường', () => {
      expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
    });

    test('TC_13: Tam giác thường áp sát biên trên', () => {
      expect(classifyTriangle(98, 99, 100)).toBe('Scalene');
    });
  });
});
