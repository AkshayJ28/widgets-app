import React, { useState } from 'react'
import Accordion from './components/accordion'
import Search from './components/search'
import Dropdown from './components/dropdown'
import Translate from './components/translate'
import Route from './components/route'
import Header from './components/header'

const items = [
    {
        title: 'What is React',
        content: 'React is frond-end javascript Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favoraite javascript library among Developers'
    }
];
const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
]


export default () => {
    const [selected, setSelected] = useState(options[0])
    // const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <Header />
            <br></br>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="select the color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};