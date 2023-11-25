import React from 'react';

interface ToggleButtonProps {
    className?: string; // Optional className prop
    value: string;
    isSelected: boolean;
    onSelect: () => void;
    children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
                                                       className,
                                                       value,
                                                       isSelected,
                                                       onSelect,
                                                       children,
                                                   }) => {
    return (
        <button
            className={className}
            value={value}
            onClick={onSelect}
        >
            {children}
        </button>
    );
};

export default ToggleButton;
