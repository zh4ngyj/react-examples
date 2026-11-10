import React from 'react';

export interface HotItem {
    index: number;
    title: string;
    extra: { pic: string };
}

const LiComponent = ({ filteredSearchs }: { 
    filteredSearchs: { index: number, title: string, extra: { pic: string } }[] 
}) => {
    return (
        <ul className="ul-container">
            {
                filteredSearchs.map(search => {
                    return (
                        <div key={search.index}>
                            <li key={search.index}>{search.title}</li>
                            <img src={search.extra.pic} className='imgCSS' referrerPolicy="no-referrer" />
                        </div>
                    )
                })
            }
        </ul>
    );
};

export default LiComponent;