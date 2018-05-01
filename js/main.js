document.getElementById('myForm').addEventListener('submit', saveBookMark);

function saveBookMark(a) {

    //get from values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    //test if bookmark is null
    if (localStorage.getItem('bookmarks') === null){
    var bookmarks = [];
    bookmarks.push(bookmark);

    //set to localStorage
        //change from JSON array to string since this is vanilla JS,
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        //get bookmarks from local storage
        var bookMarks =JSON.parse(localStorage.getItem('bookmarks'));
        bookmark.push(bookmark);

        //re-set back to local storage
        localStorage.setItem('bookmarks', JSON.stringify('bookmarks'));
    }

    //prevents form from submitting
    a.preventDefault();
}

//fetch Bookmarks from local storage and display them on the web page

function fetchBookmarks() {

    var bookMarks =JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');

    //build output
    bookmarksResults.innerHTML ='';
    for (var i = 0; i < bookMarks.length; i++){
        var name = bookMarks[i].name;
        var url = bookMarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
            '<h3>'+name+
            '<a class="btn btn-success" target="_blank" href="#">Visit</a> ' +
            '<a onclick="deleteBookmark()" class="btn btn-danger" target="_blank" href="#">Delete</a> ' +
            '</h3>'+
            '</div>';

    }


}


