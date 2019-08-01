import React, { Children } from 'react';
import './style.scss';

const FormControl: React.FC<{ placeholder?: string, label?: string, buttonIcon?: any, helpIcon?: any }> = ({children, placeholder = '', label = '', buttonIcon, helpIcon}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" placeholder={placeholder}/>
      {helpIcon ? <span className="form-group-icon">{helpIcon}</span> : '' }
      {buttonIcon ? <button>{buttonIcon}</button> : ''}
    </div>
  );
}

export default FormControl;
