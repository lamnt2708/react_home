import { changeLanguage } from "../Language/action";
import { connect } from "react-redux";
import React from "react";

const style = {
    "background-color": "indogo"
}

class ChangeLanguageText extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(e) {
    e.preventDefault();
    this.props.changeLanguage(e.target.value);
  }

  render() {
    return (
      <div>
        <button style={style} value="en" onClick={(e) => this.handleChangeLanguage(e)}>
          Eng
        </button>
        <button style={style} value="ja" onClick={(e) => this.handleChangeLanguage(e)}>
          Jap
        </button>
      </div>
    );
  }
}

export default connect(null, { changeLanguage })(ChangeLanguageText);
