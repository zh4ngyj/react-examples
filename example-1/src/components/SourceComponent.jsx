class SourceComponent extends React.Component {

    render() {
        console.log("SourceComponent render开始执行");
        console.log(this.props);
        const { onSelectedChangeHandler } = this.props;
        return (
            <div>
                <select onChange={ onSelectedChangeHandler }>
                    {
                        this.props.sourceList.map(source => <option key={source}>{source}</option>)
                    }
                </select>
            </div>
        )
    }
}