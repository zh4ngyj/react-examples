class InputComponent extends React.Component {
    render() {
        console.log('InputComponent开始执行');
        console.log('input组件', '-', this.props);
        const { onChangeSearchHandler } = this.props;
        return <input type="search" onChange={onChangeSearchHandler} />;
    }
}