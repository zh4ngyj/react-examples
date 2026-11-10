import React from 'react';

const InputComponent = ({ onChangeSearchHandler }: { 
    onChangeSearchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void 
}) => {
    return (
        <input type="search" onChange={onChangeSearchHandler} />
    );
};

export default InputComponent;