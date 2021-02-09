import React from 'react';
import './optionpicker.styles.scss';

export const OptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <div className="select-wrap">
      <label>{name}</label>
      <div className="option-picker">
        <select onChange={onChange} value={selected}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export const OptionPickerDark = ({ name, options, onChange, selected }) => {
  return (
    <div className="select-wrap picker-dark">
      <label>{name}</label>
      <div className="option-picker">
        <select onChange={onChange} value={selected}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export const ColorOptionPicker = ({ name, options, onChange, selected }) => {
  return (
    <div className="color-options option-picker">
      <label>{name}</label>
      <div onChange={onChange} value={selected} className="color-options-flex">
        {options.map(option => (
          <>
            <input type="radio" value={option} name="color" key={option} style={{background: `${option}`}}/>
            <label>{option}</label>
          </>       
        ))}
     </div>
    </div>
)}
 