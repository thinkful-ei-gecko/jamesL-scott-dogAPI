const getDogs = function(userInput) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(jsonData => {
            appendDogs(jsonData)
        })
        .catch(error => console.log(error));
};

const appendDogs = function(dogData){
    dogData.message.forEach(data => {
        $('.dog-pics').append(createTemplate(data))
    });
};

const handleSubmit = function() {
    $('.dog-form').on('submit', event => {
        event.preventDefault();
        getDogs($('#num-dogs').val());
    });
};

const createTemplate = function(dogMessage){
    return `<img src=${dogMessage}>`;
};

$(handleSubmit)