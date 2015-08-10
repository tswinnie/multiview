/**
 * Created by tyroneswinnie on 8/9/15.
 */

//FUTURE ISSUES

//GIVE THE USERS ABILITY TO LOAD PAGES THAT DON'T HAVE A TRADITIONAL ANCHOR HREF ATTR BY USING DATA-MULTIVIEW-HREF ATTR



//fix for scrolling issue on overflow containers
//$('.multiview-resize-bar-container').bind('mousewheel DOMMouseScroll', function(e) {
//    var scrollTo = null;
//
//    if (e.type == 'mousewheel') {
//        scrollTo = (e.originalEvent.wheelDelta * -1);
//    }
//    else if (e.type == 'DOMMouseScroll') {
//        scrollTo = 40 * e.originalEvent.detail;
//    }
//
//    if (scrollTo) {
//        e.preventDefault();
//        $(this).scrollTop(scrollTo + $(this).scrollTop());
//    }
//});

//$(window).on('resize', function(){
//    //var win = $(this); //this = window
//    //resizeMain(".cd-gallery");
//});


//$(".multiview-resize-button").draggable({axis: "x", containment: ".multiview-resize-container" });

//$('.multiview-resize-container').draggable({axis: "x"});
//$('.multiview-resize-container').draganddrop(function(){
//
//    console.log($(this).width());
//    //$(_this).width($(".cd-main-content").width()-$(".multiview-container").width());
//});

//$('.multiview-container').resizeable({handle: 'e w'});

//$( ".multiview-containerAdded" ).resizable({
//    alsoResize: ".multiview-container"
//});
//$( ".multiview-container" ).resizable({handle: 'w e', grid: 50});

//$(".multiview-resize-button").draggable({
//
//    axis: "x",
//    start: function (e, ui) {
//        var parentOffset = $(this).parent().offset();
//         startrelX = e.pageX - parentOffset.left;
//        var relY = e.pageY - parentOffset.top;
//        console.log(" x: " + startrelX);
//        resultStart = startrelX;
//    },
//    stop: function (e, ui) {
//        var parentOffset = $(this).parent().offset();
//         stoprelX = e.pageX - parentOffset.left;
//        var relY = e.pageY - parentOffset.top;
//        console.log(" x: " + stoprelX );
//        resultStop = stoprelX;
//
//        newWidth = resultStop - resultStart;
//        console.log(newWidth);
//
//        //now lets subtract the difference value from newWidth to the width and convert to percent and set
//
//        var pixels = 100;
//        //var newContainerWidth = $(container).width();
//        //set the value of the main content equal to the current window width minus 1/2
//        var diffPercentage = Math.round(( newWidth - pixels )) / newWidth * 100 -100 ; // 0.92%
//
//        $('.multiview-resize-container').css({"width": newWidth+'px'});
//
//        console.log("the difference in percent value is " + diffPercentage);
//
//
//    }
//
//
//
//    //get the distance that the element was moved
//
//
//
//
//
//
//});


//now the objective becomes to resize the window left and right using the resizeButton


//$('.multiview-resize-button').draggable({
//
//        containment: '.multiview-containerAdded',
//        axis: 'x'
//});
//    drag: function() {
//        $('.multiview-resize-container').css('left',$(this).position().left);
//    },
//    axis: 'x',
//    containment: '.multiview-resize-container',
//    stop: function(){
//        $('.multiview-resize-container').css('left',$(this).position().left);
//    }
//
//});



//$('.multiview-resize-button').click(function(){
//
//    $('.multiview-left-seventy-thirty').css({"display":'inline-block'});
//
//});
//
////now make the resizebar drraggable
//$('.multiview-resize-button').draggable({
//
//    axis: "x",
//    revert: true,
//    containment: "html",
//
//    start: function(e, ui) {
//    var parentOffset = $(this).parent().offset();
//     startX = e.pageX - parentOffset.left;
//    //console.log(" x starting position: " + startX);
//
//    //show my multiview resize background
//    $(_this).prepend('<div class="multiview-container-background"></div>');
//
//        //used to get the initial left or right value
//        xpos = ui.position.left;
//        ypos = ui.position.top;
//
//    },
//    drag: function(ui, e) {
//
//        //get current drag position
//        var offset = $(this).offset();
//        var xPos = offset.left;
//        $('#posX').text('x: ' + xPos);
//        console.log(xPos);
//
//        //get the current width to be set on div
//        var currentWidth = xPos - startX;
//
//        //set multiview background width on drag
//        $('.multiview-container-background').width(currentWidth);
//
//
//    },
//    stop: function(e,ui) {
//        var parentOffset = $(this).parent().offset();
//        stopX = e.pageX - parentOffset.left;
//        //console.log(" x stopping position: " + stopX);
//
//        //set the percentage value to draggable element
//        $(this).width(percentage);
//
//        // calculate the dragged distance, with the current X and Y position and the "xpos" and "ypos"
//        var xmove = ui.position.left - xpos;
//        var ymove = ui.position.top - ypos;
//
//        // define the moved direction: right, bottom (when positive), left, up (when negative)
//        var xd = xmove >= 0 ? 'right' : 'left';
//        var yd = ymove >= 0 ? ' Bottom: ' : ' Up: ';
//
//
//        //console.log(xd);
//        //alert('The DIV was moved,\n\n'+ xd+ xmove+ ' pixels \n'+ yd+ ymove+ ' pixels');
//
//        if(xd == 'right'){
//            //alert(xmove);
//            //do logic
//
//            //get current width of multiview container
//            var newWidth = xmove;
//            //so now lets get the difference that was subtracted
//            var diff = Math.floor(multiviewWidth - newWidth);
//            //now set the new width as a percentage
//
//            //subtract the diff from the width of the main container
//            var newResult = $(_this).width() - diff;
//            var pixel = 100;
//            var percentage = Math.floor(( newResult - pixel )) / newResult * 100/2 ;
//
//            //Set widt values on container to 30/70
//            $(_this).css({"width":'30%'});
//            $('body').css({"width":'70%'});
//
//            $(this).css({"top":'50%',"left":'69%'});
//
//
//        }else if(xd == 'left'){
//
//            //Set widt values on container to 30/70
//            $(_this).css({"width":'70%'});
//            $('body').css({"width":'30%'});
//
//            $(this).css({"top":'50%',"left":'29%'});
//
//        }
//
//

