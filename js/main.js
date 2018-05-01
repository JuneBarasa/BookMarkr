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
        //init array
    var bookmarks = [];
    bookmarks.push(bookmark);

    //set to localStorage
        //change from JSON array to string since this is vanilla JS,
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        //get bookmarks from local storage
        var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
        bookmark.push(bookmark);

        //re-set back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //re-fetch bookmarks
    fetchBookmarks();

    //prevents form from submitting
    a.preventDefault();
}

//delete bookmark

function deleteBookmark(url) {

    //get bookmark from localStorage

    var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));

    for (var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url === url){
            bookmarks.splice(i, 1);
        }

    }

    //re-set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //refetch bookmarks
    fetchBookmarks();

}

//fetch Bookmarks from local storage and display them on the web page

function fetchBookmarks() {

    var bookmarks =JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');

    //build output
    bookmarksResults.innerHTML ='';
    for (var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                        '<h3>'+name +
                                        '<a class="btn btn-success" target="_blank" href="'+url+'">Visit</a> ' +
                                        '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                        '</h3>'+
                                        '</div>';

    }


}


