function validateMovie(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg,invalidMsg)) {
		return false;
	}
	
const form = document.querySelector("#create"); 
const TITLE_REQUIRED = "Please enter your title";
const TYPE_REQUIRED = "Please enter movie type";
const GENRE_REQUIRED = "Please enter movie genre";
const RELEASEDATE_REQUIRED = "Please enter movie release date";
const RATED_REQUIRED = "Please enter movie rate";
const DURATION_REQUIRED = "Please enter movie duration";
const DIRECTOR_REQUIRED = "Please enter movie director";
const WRITER_REQUIRED = "Please enter movie writer";
const ACTORS_REQUIRED = "Please enter movie actors";
const PLOT_REQUIRED = "Please enter movie plot";
const AWARDS_REQUIRED = "Please enter movie awards";
const RATINGS_REQUIRED = "Please enter movie ratings";

form.addEventListener("create", function (event) {
	// stop form submission
	event.preventDefault();

	// // validate the form
	let titleValid = hasValue(form.elements["title"], TITLE_REQUIRED);
    let typeValid = hasValue(form.elements["type"], TYPE_REQUIRED);
    let genreValid = hasValue(form.elements["genre"], GENRE_REQUIRED);
    let releasedateValid = hasValue(form.elements["releasedate"], RELEASEDATE_REQUIRED);
    let ratedValid = hasValue(form.elements["rated"], RATED_REQUIRED);
    let durationValid = hasValue(form.elements["duration"], DURATION_REQUIRED);
    let directorValid = hasValue(form.elements["director"], DIRECTOR_REQUIRED);
    let writerValid = hasValue(form.elements["writer"], WRITER_REQUIRED);
    let actorValid = hasValue(form.elements["actor"], ACTORS_REQUIRED);
    let plotValid = hasValue(form.elements["plot"], PLOT_REQUIRED);
    let awardValid = hasValue(form.elements["award"], AWARDS_REQUIRED);
    let ratingsValid = hasValue(form.elements["ratings"], RATINGS_REQUIRED);

	// if valid, submit the form.
	if (titleValid && typeValid&& genreValid&& releasedateValid&&ratedValid&&durationValid&&directorValid&&writerValid&&actorValid&&plotValid&&awardValid&&ratingsValid) {
		console.log("Create Movie ");
	}}
    )}