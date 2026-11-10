class LiComponent extends React.Component {

    render() {
        const filteredSearchs = this.props.filteredSearchs
        return (
            <ul className="ul-container">
                {
                    filteredSearchs.map(search => {
                        return  (
                            <div key={search.index}>
                                <li key={search.index}>{search.title}</li>
                                <img src={search.extra.pic} className='imgCSS'/>
                            </div>
                        )
                    })
                }
            </ul>
        );
    }
}