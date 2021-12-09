$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    method: 'GET',
    dataType: 'json',
    data: {
        part: 'snippet,contentDetails,statistics',
        id: 'UCaL1L-np8fBWIW4jPE7IwcQ', // Youtube Channel ID
        key: 'AIzaSyC8YWqhiubsu_R6xEOpUM-dZQ7b6D4ihaM' // Google Console API KEY. Warning!!! Get Your Own API KEY.
    },
    success: function (data) {
        let profileImgUrl = data.items[0].snippet.thumbnails.default.url;
        $("img").attr({
            src: profileImgUrl,
            alt: 'Kandra Wilko'
        });
        let subs = data.items[0].statistics.subscriberCount;
        $("<span/>",{
            text: "subscriber" + " " + subs 
        }).appendTo("body");
    }
});

