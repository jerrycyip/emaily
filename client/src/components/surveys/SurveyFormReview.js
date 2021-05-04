// SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ formValues, onCancel, sendSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label}) => {
    return (
    <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
    </div>
    );
  });
  
    return (
    <div>
      <h5>Please confirm your entries</h5>
        {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button 
        onClick={()=>sendSurvey(formValues, history)}
        className="green btn-flat right  white-text">
          Send Survey
          <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state){
    
    return {
        formValues : state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
