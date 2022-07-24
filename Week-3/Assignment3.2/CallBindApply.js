// Call function
function industry(type, lang) {
    this.type = type;
    this.lang = lang;
}
function movie(movieName) {
    industry.call(this, "Kollywood", "Kannada");
    this.movieName = movieName;
    console.log("Movie details are ", this);
}
function series(seriesName) {
    industry.call(this, "Hollywood", "English");
    this.seriesName = seriesName;
    console.log("Series details are ", this);
}
const movieCall = new movie("KGF");
const seriesCall = new series("Stranger things");

// Apply function
function industry(type, lang) {
    this.type = type;
    this.lang = lang;
}
function movie(movieName) {
    industry.apply(this, ["Kollywood", "Kannada"]);
    this.movieName = movieName;
    console.log("Movie details are ", this);
}
function series(seriesName) {
    industry.apply(this, new Array("Hollywood", "English"));
    this.seriesName = seriesName;
    console.log("Series details are ", this);
}
const movieApply = new movie("KGF");
const seriesApply = new series("Stranger things");

// Bind Fucntion
const myfirst = {
    series: "Stranger things",
    seriesdet: function series() {
        console.log("Series details are ", this);
    },
};
const SeriesObj = {
    series: "Game of Thrones",
};
let ser = myfirst.seriesdet.bind(SeriesObj);
ser();
console.log(myfirst);
