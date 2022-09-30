import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculator, operations, numbers, equalSign } from '../src/Calculator.jsx'

describe('Calculator', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Calculator />)
  })
  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Final Calculator')
  })
  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => {
      screen.getByText(number)
    })
  })
  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })
  it('should render mathematical operations', () => {
    render(<Calculator />)
    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })
  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })
  it('should render an input field', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })
  it('should display in the input field the number clicked', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })
  it('should display in the input field when clicked several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)
    const two = screen.getByText('2')
    fireEvent.click(two)
    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })
  it('should display numbers and operations when clicked', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })
  it('should compute and show the correct result based on user input ', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
