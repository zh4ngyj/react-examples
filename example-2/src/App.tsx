import React from 'react';
import SourceComponent from './components/SourceComponent';
import InputComponent from './components/InputComponent';
import LiComponent, { HotItem } from './components/LiComponent';

const App = () => {
    const [hotSearchs, setHotSearchs] = React.useState<HotItem[]>([]);
    const [filteredSearchs, setFilteredSearchs] = React.useState<HotItem[]>([]);
    const [sourceList] = React.useState(['bilibili','zhihu','v2ex','juejin']);
    const [selectedSource, setSelectedSource] = React.useState('bilibili');

    React.useEffect(() => {
        console.log('执行useEffect')
        fetchData(selectedSource);
    }, [selectedSource]);

    const fetchData = (type:string) => {
        console.log('执行fetchData:',selectedSource)
        fetch(`https://uapis.cn/api/v1/misc/hotboard?type=${type}`)
            .then(response => response.json())
            .then(json => {
                setHotSearchs(json.list);
                setFilteredSearchs(json.list);
            })
            .catch(error => console.error('请求热搜接口失败：',error));
    }

    const onChangeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const comparedSearchs = hotSearchs.filter(search => search.title.includes(event.target.value));
        setFilteredSearchs(comparedSearchs);
    }

    const onSelectedChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSourceTemp = event.target.value;
        setSelectedSource(selectedSourceTemp);
    }

    return (
        <div>
            <h1>Hello, React!</h1>
            <div className="selectCSS">
                <label>选择来源：</label>
                <SourceComponent onSelectedChangeHandler={onSelectedChangeHandler} sourceList={sourceList} />
            </div>
            <label>搜索：</label>
            <InputComponent onChangeSearchHandler={onChangeSearchHandler} />
            <LiComponent filteredSearchs={filteredSearchs} />
        </div>
    );
};

export default App;