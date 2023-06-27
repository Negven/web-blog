import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Find post"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                options={[
                    {
                        value: "title",
                        name: "By title",
                    },
                    {
                        value: "body",
                        name: "By text",
                    },
                ]}
                defaultValue="Sort"
                value={filter.sort}
                onChange={type => setFilter({...filter, sort: type})}
            />
        </div>
    );
};

export default PostFilter;