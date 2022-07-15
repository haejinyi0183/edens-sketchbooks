

const handleSubmit = (props) => {

    const postURL = 'https://edens-sketchbook.herokuapp.com/petfinder'

    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: props.fullName,
            email: props.email,
            password: props.password,
            dates:[]
        })
    })
    
    .then(() => {
        alert('You have been added to the system!')
    })
}

export default handleSubmit;