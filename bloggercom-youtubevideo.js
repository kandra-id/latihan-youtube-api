document.addEventListener("DOMContentLoaded", function() {
    if (typeof _WidgetManager === "undefined") return;
    var data = _WidgetManager._GetAllData();
    if (data.view.isSingleItem) {
        $.ajax({
            url:'https://www.googleapis.com/youtube/v3/search',
            type: 'get',
            dataType: 'json',
            data: {
                'part': 'snippet',
                'channelId': 'UCaL1L-np8fBWIW4jPE7IwcQ',
                'key': 'AIzaSyAleKJBu82CNLdN5DNA1Qp_Sq4QCrTgsjg',
                'order': 'date',
                'maxResults': '1'
            },
            success: function(data){
                let videoId = data.items[0].id.videoId;
                let embedUrl = "https://www.youtube.com/embed/" + videoId;
                let iframe = document.getElementsByTagName("iframe")[1];
                iframe.setAttribute("src", embedUrl);
            }
        });
    } else {
        $.ajax({
            url:'https://www.googleapis.com/youtube/v3/search',
            type: 'get',
            dataType: 'json',
            data: {
                'part': 'snippet',
                'channelId': 'UCaL1L-np8fBWIW4jPE7IwcQ',
                'key': 'AIzaSyAleKJBu82CNLdN5DNA1Qp_Sq4QCrTgsjg',
                'order': 'date',
                'maxResults': '1'
            },
            success: function(data){
                let videoId = data.items[0].id.videoId;
                let embedUrl = "https://www.youtube.com/embed/" + videoId;
                let iframe = document.getElementsByTagName("iframe")[0];
                iframe.setAttribute("src", embedUrl);
            }
        });
    }
}, false);
