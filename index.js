const getDogs = function(userInput) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
        })
        .catch(error => console.log(error));
}

const handleSubmit = function() {
    $('.dog-form').on('submit', event => {
        event.preventDefault();
        getDogs($('#num-dogs').val());
    })
}

$(handleSubmit)