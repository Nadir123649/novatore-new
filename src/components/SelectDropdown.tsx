import React from 'react';

interface SelectProps {
    name: string;
    id: string;
    options: { value: string; label: string }[];
    defaultOption: string;
}

const SelectDropdown: React.FC<SelectProps> = ({ name, id, options, defaultOption }) => {
    return (
        <select name={name} id={id} className="form-select-select form-input font-lato py-[12px] px-[16px] border-[#969696] border border-solid rounded-[36px]  text-[#969696] text-[18px] not-italic leading-normal capitalize font-normal">
            <option value="">{defaultOption}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default SelectDropdown;
