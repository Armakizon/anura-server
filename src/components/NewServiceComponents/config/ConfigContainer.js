import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { INIT_CONFIG } from '../../../Constant/constants'
import ConfigDetails from './ConfigDetails'
import JsonEditor from './JsonEditor'

export default class ConfigContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            configFile: (props.config ? props.config.configFile : undefined) || INIT_CONFIG
        }
    }
    updateConfig = (config) => {
        this.setState({
            configFile: config
        })
    }
    addConfigCallback = (config) => {
        // no config error
        this.props.addConfigCallback({
            ...config,
            configFile: this.state.configFile,
        })
        this.setState({ configFile: {} })
    }

    render() {
        const { config, editedID } = this.props
        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                    <ConfigDetails cancel={this.props.cancelConfigEdit} cancelable={this.props.cancelable}
                        editedID={editedID} config={config} addConfigCallback={this.addConfigCallback} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <JsonEditor configFile={config && config.configFile ? config.configFile : INIT_CONFIG}
                        updateConfigFile={this.updateConfig} />
                </Grid>

            </Grid>
        )
    }
}
