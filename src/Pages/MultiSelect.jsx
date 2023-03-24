import Multiselect from 'multiselect-react-dropdown';
import React from 'react';
function MultiSelect({selectData,value,readonly}) {
    return (
        <div>
            <div className='multiselect'>
                <Multiselect
                    isObject={false}
                    options={selectData}
                    selectedValues={value}
                    disable={readonly}
                    showCheckbox
                />
            </div>
        </div>
    )
}

export default MultiSelect