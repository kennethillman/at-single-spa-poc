window.fms = {
    msg: 'Welcome to this POC!',
    msgFrom: 'default',
    mode: 'init',
    changeMsg: (newMsg) => {
        window.fms.msg = newMsg;
        window.dispatchEvent(new Event('onChangeMsg'));
    },
    changeMsgFrom: (newFrom) => {
        window.fms.msgFrom = newFrom;
        window.dispatchEvent(new Event('onChangeMsgFrom'));
    },
    changeMode: (newMode) => {
        window.fms.mode = newMode;
        window.dispatchEvent(new Event('onChangeMode'));
    }
};