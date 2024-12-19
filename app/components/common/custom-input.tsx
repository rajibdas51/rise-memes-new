import React from 'react';

interface CustomInputProps {
  label: string;
  value?: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  showMax?: boolean;
  onMaxClick?: () => void;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
  type?: 'text' | 'email' | 'number'; // Added type prop
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChange,
  placeholder = '0',
  showMax = true,
  disabled = false,
  onMaxClick,
  labelClassName,
  inputClassName,
  type = 'text', // Default to text
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Only apply number validation if type is 'number'
    if (type === 'number') {
      if (/^\d*$/.test(newValue)) {
        onChange(newValue);
      }
    } else {
      // For all other types, pass the value directly
      onChange(newValue);
    }
  };

  const containerShadowStyle = {
    filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))',
  };

  return (
    <div className='w-full my-2'>
      <div
        className={`text-gradient font-semibold text-sm mb-1.5 uppercase ${labelClassName}`}
        style={containerShadowStyle}
      >
        {label}
      </div>

      <div className='relative w-full h-11 border-[1.5px] border-[#230203] bg-gradient-to-b from-[#230203] via-[#430109] to-[#230203]'>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full lowercase h-full bg-transparent px-3 text-gradient font-semibold focus:outline-none
            text-md relative z-10 ${inputClassName}`}
          style={{
            caretColor: '#ffffff',
          }}
        />

        {showMax && onMaxClick && (
          <button
            onClick={onMaxClick}
            className='absolute right-2 top-1/2 -translate-y-1/2
              text-gradient transition-colors
              text-sm font-medium  z-20'
          >
            MAX
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
