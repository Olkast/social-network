import React, {createRef} from "react";
import {AddMessageActionCreator, UpDateMessageActionCreator} from "../../redux/dialogs-reducer";
import AddMessage from "./AddMessage";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => {
            dispatch(AddMessageActionCreator());
        },
        UpDateMessage: (message) => {
            dispatch(UpDateMessageActionCreator(message));
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps) (AddMessage);

export default AddMessageContainer;