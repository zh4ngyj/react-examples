import React from 'react';

const SourceComponent = ({ onSelectedChangeHandler, sourceList }: { 
    onSelectedChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    sourceList: string[]
}) => {
    return (
        <div>
                <select onChange={ onSelectedChangeHandler }>
                    {
                        sourceList.map(source => <option key={source}>{source}</option>)
                    }
                </select>
            </div>
    );
}

export default SourceComponent;