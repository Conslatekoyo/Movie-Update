document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form'),
    commentsForm = document.getElementById('customer-reviews-form'),
    image = document.getElementById('resulting-image'),
    movieDetails = document.getElementById("movie-details-result"),
    addedComments = document.getElementById('added-comments')

    // Default Movie and it's details

    // console.log(resultForSearch)
    resultsForSearch('Jurassic World')

    
    

   searchForm.addEventListener('submit', e => {
       e.preventDefault()
        resultsForSearch(e.target.movie_title.value)
        searchForm.reset()
    })

    //  async function resultForSearch(){
    //     const response = await fetch(`https://www.omdbapi.com/?t=${string}&plot=full&apikey=d6424164`)
    //     .then(response => response.json())
    //     console.log(response);
    //  }
    
     function resultsForSearch(string) {
        fetch(`https://www.omdbapi.com/?t=${string}&plot=full&apikey=d6424164`)
        .then(response => response.json())
        .then(object => {
            image.removeAttribute('src')
            image.setAttribute('src', `${object.Poster}`)
            if (object.Type === "movie") {
                
                movieDetails.innerHTML = 
            `
           
            <div class="card" style="width: 18rem;">
            <span>Title</span> : &emsp;&emsp;&emsp;&emsp; <strong><i>${object.Title}</i></strong> <br>
            <span>Type</span> : &emsp;&emsp;&emsp;&emsp; <i>${object.Type}</i> <br>
            <span>Genre</span> : &emsp;&emsp;&emsp; <i>${object.Genre}</i> <br>
            <span>Release date</span> : &nbsp; <i>${object.Released}</i> <br>
            <span>Rated</span> : &emsp;&emsp;&emsp;&nbsp; <i>${object.Rated}</i>  <br>
            <span>Duration</span> : &emsp;&emsp;&nbsp; <i>${object.Runtime}</i> <br>
            <span>Director(s)</span> : &emsp;&emsp; <i>${object.Director}</i> <br>
            <span>Writer(s)</span> : &emsp;&emsp;&nbsp; <i>${object.Writer}</i> <br>
            <span>Actors</span> : &emsp;&emsp;&emsp; <i>${object.Actors}</i> <br>
            <span>Plot</span> : <br> ${object.Plot} <br>
            <span>Awards</span> : <br> ${object.Awards} <br> 
            <span>Ratings</span> : 
            <ul>
                <li><i>IMDB - &nbsp; ${object.Ratings[0].Value}</i></li>
                <li><i>Rotten Tomatoes - &nbsp; ${object.Ratings[1].Value}</i></li>
                <li><i>Metacritic - &nbsp; ${object.Ratings[2].Value}</i></li>                        
            </ul> <br>
            </div>
               
            `
            } else if (object.Type === 'series'){
            
                movieDetails.innerHTML = 
                `
                <p class="movie-info"> 
                    <span>Title</span> : &emsp;&emsp;&emsp;&emsp; <strong><i>${object.Title}</i></strong> <br>
                    <span>Type</span> : &emsp;&emsp;&emsp;&emsp; <i>${object.Type}</i> <br>
                    <span>Genre</span> : &emsp;&emsp;&emsp; <i>${object.Genre}</i> <br>
                    <span>Year(s)</span> : &emsp;&emsp;&emsp;&nbsp; <i>${object.Year}</i> <br>
                    <span>Rated</span> : &emsp;&emsp;&emsp;&nbsp; <i>${object.Rated}</i>  <br>
                    <span>Writer(s)</span> : &emsp;&emsp;&nbsp; <i>${object.Writer}</i> <br>
                    <span>Actors</span> : &emsp;&emsp;&emsp; <i>${object.Actors}</i> <br>
                    <span>Ratings</span> : &emsp;&emsp; <i>IMDB - &nbsp; ${object.Ratings[0].Value}</i> <br>
                    <span>Plot</span> : <br> ${object.Plot} <br>
                    <span>Awards</span> : <br> ${object.Awards} <br> 
                </p>
                `
            }
        })
        .catch(error =>  {
            document.getElementById("search-results"). innerHTML = `<p> <br> <b>${error.message}. Please refresh page and try again. </b> </p>`
        })
    }

     commentsForm.addEventListener('submit', e => {
        e.preventDefault()
        addComment(e.target.customer_review.value)
        commentsForm.reset()
    })

      function addComment(userComment) {

        const li=document.createElement('li')
        li.innerText = userComment
        button = document.createElement('button')
        button.style.marginLeft = "10px"
        button.style.color= "red"
        button.style.backgroundColor = "black"
        button.innerText = 'undo'
        li.appendChild(button)
        addedComments.appendChild(li)

        removeAddedComment(button)
    }
     function removeAddedComment(element) {
        button.addEventListener('click', () => {
            element.parentNode.remove()
        })
    }
})

