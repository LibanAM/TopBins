import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState("")

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

  return (
    <section className='search'>
        <form>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search..."
            value={text}
            onChange={(event) => onChange(event.target.value)}
            autoFocus/>
        </form>
    </section>
  )
}

export default Search