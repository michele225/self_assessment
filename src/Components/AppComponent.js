import React from "react";
import EditSurveyContainer from "../Containers/EditSurveyContainer";
import SurveyContainer from "../Containers/SurveyContainer";

class AppComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        //document.getElementById("post-list").style.overflowY = "scroll"
        document.body.style.overflowY = "scroll"
        return (
            <div id= "appPreview">
                {
                    this.props.editFileClicked?
                        <div className="preview">
                            <EditSurveyContainer survey={this.props.survey}/>
                        </div>
                        :
                        <div></div>
                }
                <div id="navi">
                    <header className="headerSelf">
                        <div id="logoSelf">
                            <span className="iconSelf"> question_answer</span>
                            <span> Self<b>Assessment </b> </span>
                        </div>
                    </header>
                    <SurveyContainer/>
                </div>
            </div>
        )
    }
}

export default AppComponent;



