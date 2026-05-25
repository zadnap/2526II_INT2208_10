import evaluateLoan from './loan';

describe('Module phê duyệt khoản vay', () => {
  describe('Nhóm 1: Kiểm tra ngoại lệ đầu vào', () => {
    test('TC_01: Age >= 18', () => {
      const result = evaluateLoan(17, 250.0, 500, 'C');
      expect(result).toBe('Invalid Input');
    });

    test('TC_02: Age <= 65', () => {
      const result = evaluateLoan(66, 250.0, 500, 'C');
      expect(result).toBe('Invalid Input');
    });

    test('TC_03: Income >= 5.0', () => {
      const result = evaluateLoan(40, 4.9, 500, 'C');
      expect(result).toBe('Invalid Input');
    });

    test('TC_04: Income <= 500.0', () => {
      const result = evaluateLoan(40, 500.1, 500, 'C');
      expect(result).toBe('Invalid Input');
    });

    test('TC_05: Credit score >= 300', () => {
      const result = evaluateLoan(40, 250.0, 299, 'C');
      expect(result).toBe('Invalid Input');
    });

    test('TC_06: Credit score <= 850', () => {
      const result = evaluateLoan(40, 250.0, 851, 'C');
      expect(result).toBe('Invalid Input');
    });

    test('TC_07: Employment không hợp lệ', () => {
      const result = evaluateLoan(40, 250.0, 500, 'Z');
      expect(result).toBe('Invalid Input');
    });
  });

  describe('Nhóm 2: Kiểm tra logic nghiệp vụ', () => {
    test('TC_08: Từ chối khoản vay khi khách hàng thuộc nhóm rủi ro cao', () => {
      const result = evaluateLoan(40, 250.0, 500, 'C');
      expect(result).toBe('REJECT');
    });

    test('TC_09: Yêu cầu xét duyệt thủ công cho khách hàng rủi ro thấp nhưng thu nhập thấp', () => {
      const result = evaluateLoan(18, 10.0, 701, 'C');
      expect(result).toBe('MANUAL REVIEW');
    });

    test('TC_10: Xét duyệt thủ công với khách hàng lớn tuổi và thu nhập sát ngưỡng thấp', () => {
      const result = evaluateLoan(65, 14.9, 850, 'C');
      expect(result).toBe('MANUAL REVIEW');
    });

    test('TC_11: Từ chối khách hàng rủi ro trung bình có thu nhập thấp', () => {
      const result = evaluateLoan(40, 10.0, 501, 'C');
      expect(result).toBe('REJECT');
    });

    test('TC_12: Từ chối khách hàng freelance thuộc nhóm rủi ro trung bình', () => {
      const result = evaluateLoan(40, 14.9, 700, 'F');
      expect(result).toBe('REJECT');
    });

    test('TC_13: Từ chối khách hàng freelance dù thuộc nhóm rủi ro thấp', () => {
      const result = evaluateLoan(40, 5.0, 750, 'F');
      expect(result).toBe('REJECT');
    });

    test('TC_14: Phê duyệt khoản vay cho khách hàng contract có thu nhập đạt ngưỡng', () => {
      const result = evaluateLoan(40, 15.0, 701, 'C');
      expect(result).toBe('APPROVE');
    });

    test('TC_15: Phê duyệt khoản vay với mức thu nhập và credit score ở biên trên', () => {
      const result = evaluateLoan(40, 500.0, 700, 'C');
      expect(result).toBe('APPROVE');
    });

    test('TC_16: Chuyển sang xét duyệt thủ công cho khách hàng freelance rủi ro trung bình', () => {
      const result = evaluateLoan(40, 15.0, 501, 'F');
      expect(result).toBe('MANUAL REVIEW');
    });

    test('TC_17: Xét duyệt thủ công cho khách hàng freelance thuộc nhóm rủi ro thấp', () => {
      const result = evaluateLoan(40, 250.0, 850, 'F');
      expect(result).toBe('MANUAL REVIEW');
    });
  });
});
