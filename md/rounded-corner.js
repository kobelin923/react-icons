
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdRoundedCorner extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m35 13.4v8.2h-3.4v-8.2c0-2.8-2.2-5-5-5h-8.2v-3.4h8.2c4.7 0 8.4 3.8 8.4 8.4z m-30 21.6v-3.4h3.4v3.4h-3.4z m6.6 0v-3.4h3.4v3.4h-3.4z m6.8 0v-3.4h3.2v3.4h-3.2z m-6.8-26.6v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.4v3.4h-3.4z m0 6.6v-3.4h3.4v3.4h-3.4z m0 13.4v-3.4h3.4v3.4h-3.4z m0-6.8v-3.2h3.4v3.2h-3.4z m26.6 6.8v-3.4h3.4v3.4h-3.4z m0 3.2h3.4v3.4h-3.4v-3.4z"/></g>
            </IconBase>
        );
    }
}