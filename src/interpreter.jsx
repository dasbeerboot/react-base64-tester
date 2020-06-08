import React from 'react'

export const interpreter = (props) => {
    const inputText = props;
    const outputText = atob(props)

    return outputText;
}