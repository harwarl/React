import { useState } from 'react';
function Event() {
    const [value, setValue] = useState('');
    function handleOnChange(e) {
        e.preventDefault();
        setValue(e.target.value);
        console.log(e.target.value);
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        alert(`Form submitted`);
        setValue('');
    }
    return (
        <section>
            <form>
                <h2>Typical Form</h2>
                <input
                    type="text"
                    name="example"
                    onChange={(e) => handleOnChange(e)}
                    value={value}
                    style={{ margin: '1rem 0' }}
                />
                <button type="submit" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Event;
