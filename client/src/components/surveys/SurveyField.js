// SurveyField contains logic to render a single
// label and text input
import React from 'react';

const SurveyField = ({ input, label, meta: {error, touched }}) => {
    return (
        <div>
            <label><h5>{label}</h5></label>
            <input {...input} style={{marginBottom: '5px'}} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
            {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;

