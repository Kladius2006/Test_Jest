import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App2 from './App2';

describe('App2 test', () => {
  it('When click onBack ,must to back to Page1', () => {
    const mockOnBack = jest.fn();
    const { getByText } = render(<App2 onBack={mockOnBack} />);

    // จำลองการกดปุ่มกลับหน้าแรก
    fireEvent.press(getByText('Page1'));

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('Click Process', () => {
    const mockOnBack = jest.fn();
    const { getByText } = render(<App2 onBack={mockOnBack} />);

    const processButton = getByText('Process');
    fireEvent.press(processButton);

  });
});