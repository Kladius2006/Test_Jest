import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import App from './App';

describe('ทดสอบหน้าจอ App หลัก', () => {

  it('ควรคำนวณและแสดงผลลัพธ์ พร้อมบันทึกประวัติเมื่อกดปุ่ม +', () => {
    render(<App />);

    // 1. ดึงช่อง Input ทั้ง 2 ช่อง (ค่าเริ่มต้นของช่องกรอกคือค่าว่าง '')
    // ใช้ getAllByDisplayValue จะได้ array ของช่องกรอกข้อมูลมาครับ
    const inputs = screen.getAllByDisplayValue(''); 

    // จำลองการพิมพ์ตัวเลข 10 และ 20 ลงในช่อง
    fireEvent.changeText(inputs[0], '10');
    fireEvent.changeText(inputs[1], '20');

    // 2. ค้นหาปุ่ม '+' และจำลองการกด
    const addButton = screen.getByText('+');
    fireEvent.press(addButton);

    // 3. ตรวจสอบว่ามีข้อความประวัติการคำนวณแสดงขึ้นมาถูกต้อง
    expect(screen.getByText('10 + 20 = 30')).toBeTruthy();
  });

  it('ควรล้างประวัติได้เมื่อกดปุ่ม Clear', () => {
    render(<App />);

    // 1. สร้างประวัติจำลองก่อน โดยกดคำนวณ 1 ครั้ง
    const inputs = screen.getAllByDisplayValue('');
    fireEvent.changeText(inputs[0], '5');
    fireEvent.changeText(inputs[1], '5');
    fireEvent.press(screen.getByText('+'));

    // ยืนยันว่าประวัติ '5 + 5 = 10' โผล่มาแล้วจริงๆ
    expect(screen.getByText('5 + 5 = 10')).toBeTruthy();

    // 2. จำลองการกดปุ่ม Clear
    const clearButton = screen.getByText('Clear');
    fireEvent.press(clearButton);

    // 3. ข้อความประวัติต้องหายไป และแสดงคำว่า 'No history yet.'
    expect(screen.getByText('No history yet.')).toBeTruthy();
  });

  it('ควรเปิดหน้าต่าง About ได้เมื่อกดปุ่ม About', () => {
    render(<App />);

    // 1. ค้นหาปุ่ม About แล้วกด
    const aboutButton = screen.getByText('About');
    fireEvent.press(aboutButton);

    // 2. ตรวจสอบว่า Modal เปิดขึ้นมา โดยหาข้อความเฉพาะที่อยู่ในหน้า About
    expect(screen.getByText('Version: 1.0')).toBeTruthy();
    expect(screen.getByText('Created using React Native and Expo.')).toBeTruthy();
  });

});