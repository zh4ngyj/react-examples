class App extends React.Component {
    constructor() {
        console.log("constructor开始执行")
        super();
        this.state = {
            hotSearchs: [],
            filteredSearchs: [],
            sourceList: ['bilibili','zhihu','v2ex','juejin'],
            selectedSource: 'bilibili',
        };
    }

    componentDidMount() {
        console.log("componentDidMount开始执行，只执行一次")
        this.fetchData();
    }

    fetchData = () => {
        fetch(`https://uapis.cn/api/v1/misc/hotboard?type=${this.state.selectedSource}`)
            .then(response => response.json())
            .then(json => {
                this.setState(
                    () => {
                        return {
                            hotSearchs: json.list,
                            filteredSearchs: json.list
                        };
                    },
                    () => {
                        console.log(this.state)
                    }
                );
            });
    }

    // 搜索处理函数
    onChangeSearchHandler = event => {
        const comparedSearchs = this.state.hotSearchs.filter(search => search.title.includes(event.target.value));
        this.setState(
            () => {
                return { searching: event.target.value, filteredSearchs: comparedSearchs };
            },
            () => {
                console.log(this.state.searching)
            }
        );
    }

    // 下拉改变处理函数
    onSelectedChangeHandler = event => {
        const selectedSource = event.target.value;
        this.setState(
            () => {
                return { selectedSource };
            },
            () => {
                this.fetchData();
            }
        );
    }

    render() {
        console.log("render开始执行")
        return (
            <div>
                <h1>Hello, React!</h1> 
                <div style={{'display':'flex', 'alignItems':'center'}}>
                    <label>选择来源：</label>
                    <SourceComponent onSelectedChangeHandler={this.onSelectedChangeHandler} sourceList={this.state.sourceList} />
                </div>
                <label>搜索：</label>
                <InputComponent onChangeSearchHandler={this.onChangeSearchHandler}/>
                <LiComponent filteredSearchs={this.state.filteredSearchs} />
            </div>
        );
    }
}