const getDogs = function(userInput) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
        .then(response => response.json())
        .then(jsonData => {
            appendDogs(jsonData)
        })
        .catch(error => console.log(error));
};


const handleSubmit = function() {
    $('.dog-form').on('submit', event => {
        event.preventDefault();
        $('.dog-pics').empty();
        let numOfDogs = $('#num-dogs').val();
        getDogs(numOfDogs);
    });
};

const handleBreedSearch = function() {
    $('.breed-dog-form').on('submit', event=> {
        event.preventDefault();
        $('.dog-pics').empty();
        let searchTerm = $('#breed-type').val();
        if (searchTerm.includes(' ')) {
            searchTerm = searchTerm.trim().split(' ').reverse().join('/');
        }
        getBreeds(searchTerm);
    })
    
}

const appendDogs = function(dogData){
    dogData.message.forEach(data => {
        $('.dog-pics').append(createTemplate(data))
    });
};

const getBreeds = function(breedType){
    //handle api data
    fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
        .then(response => response.json())
        .then(jsonData => {
            appendBreeds(jsonData)
        })
        .catch(error => {
            $('#js-error-message').text(`Something went wrong: ${error.message}`)
        })
};

const appendBreeds = function(breedData){
    //append breed img
    if (breedData.status === 'error') {
        $('#js-error-message').text(`Something went wrong: ${breedData.message}`)
    } else {
        $('.dog-pics').append(createTemplate(breedData.message));
    }
};

const createTemplate = function(dogMessage){
    return `<img src=${dogMessage}>`;
};

const main = function(){
    handleSubmit()
    handleBreedSearch()
}

$(main)