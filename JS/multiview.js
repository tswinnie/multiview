/**
 * Created by tyroneswinnie on 6/20/15.
 */
(function( $ ){
    $.fn.extend({
        multiview: function(options) {
            //global vars & settings options
            var secondPercent;
            var userData;
            var gutter = 1.5; //used to adjust the width after multiview runs
            var navOption;
            var gridOption;
            var newGutter;


            //options for the user
            var defaults = {
                containerValue: '',
                showNav: '',
                defaultGrid: ''
            };

            options = $.extend(defaults, options);

            var container = options.containerValue;

            navOption = options.showNav;
            gridOption = options.defaultGrid;


        ////disable the add multiview call to action if it has been called once before(prevent user from clicking multiple times)
        if($('.multiview-resize-button').length > 0){
            //stop the multiview function from running
            return false;
        }else {

            var pixels = 100;
            var userContainer = $(container).width();

            //set the value of the main content equal to the current window width minus 1/2
            var percentage = Math.round(( userContainer - pixels )) / userContainer * 100 / 2 + gutter; // 0.92%
            //$(container).css({"width":percentage+'%'});
            $(container).addClass('multiview-container');
            secondPercent = percentage;
            //set the user passed value equal to global value
            userData = container;
            //run copyPrernt to create the new container
            copyParent();


        }


    function copyParent(){

        //first determine if user has set a default width and if so, set newGutter equal to that

        if(gridOption !== null){

            //set the width of the body equal to the remainder of what's left;
            var whole =  100;
            var remainder = whole - gridOption;
            $('body').css({"width": remainder+'%'});

            //set the width of the default second container equal to user specs
            newGutter = gridOption;

        }if(gridOption == ''){

            //now let add my div to the page
            $('body').css({"width": '50%'});

            //set the width equal to half the width of the current display
            newGutter = secondPercent + gutter;

        }

        //now I will create another container
        var newContainer = '<div class="multiview-resize-bar-container" style="width: '+newGutter+'%"><div class="multiview-resize-container"><div class="multiview-containerAdded"></div></div></div>';
        //now add dynamic width to the created container
        $('body').prepend(newContainer);
        loadOptions();

    }

    function loadOptions(){
        var userOptions;
        var previewCard;
        var userHref;


        //loop through all the multiview data attr
        $('[data-multiview]').each(function(){
            // now take each data atr that gets returned and pass it to our container

                //now I need to push the values that get returned to an array.
            var multiArry = [];
            multiArry.push(($(this).data('multiview')));

            //now loop through array and
            for(var i = 0; i < multiArry.length; i++){
                userOptions = multiArry[i];
                userHref = $(this).attr('href');
                //now create card and load data in from array
                previewCard =  '<section><a href="'+$(this).attr('href')+'"><div class="multiview-preview">'+userOptions+'</div></a></section>';

                //now add preview card to view
                $('.multiview-containerAdded').append(previewCard);
            }

        });

        loadPage();

    }

    function loadPage(){

        var url;
        //first get the user's link for the card clicked on
        $('a').on('click', function (event) {
            url = $(this).attr('href');

            //I need to prevent tha page from redirecting
            event.preventDefault();

            //build the url data along with div id passed by the user
            var urlData = ''+url+'  '+userData+'';


            //load new data to our container
            $( ".multiview-containerAdded" ).load(urlData);



            resizeBar();
        });
        resizeBar();


    }

    function resizeBar() {

        //prevent the resize button from appearing more than once on the page
        if($('.multiview-resize-button').length > 0){
            //stop the multiview function from running
            return false;
        }

        var _this = $('.multiview-resize-bar-container');

        //I now need to figure out how to make the multiview-resize-bar-container responsive with a slide gesture

        $(_this).wrapInner('<div class="multiview-resize-bar"></div>');
        $(_this).before('<div class="multiview-resize-button"><div class="sub-button tl"></div><div class="sub-button tr"></div><div class="sub-button bl"></div><div class="sub-button br"></div></div>');


        // I need to check when and if the user selects one of options for display

        var fifty =  $('.tl');
        var seventyThirtyL =  $('.tr');
        var thirtySeventyR =  $('.bl');
        var singleView =  $('.br');



            $(fifty).click(function () {
                $(this).data('clicked', true);
                if ($(fifty).data('clicked')) {
                    //alert('yes');
                    //this will be the 50/50 display option
                    $(_this).css({"width": '50%'});
                    $('body').css({"width": '50%'});

                    //now make sure the multiview button stays on the center line

                }
            });

            $(seventyThirtyL).click(function () {
                $(this).data('clicked', true);
                if ($(seventyThirtyL).data('clicked')) {


                    //this will be the 50/50 display option
                    $(_this).css({"width": '30%'});
                    $('body').css({"width": '70%'});


                }
            });

            $(thirtySeventyR).click(function () {
                $(this).data('clicked', true);
                if ($(thirtySeventyR).data('clicked')) {
                    //alert('yes');
                    //this will be the 50/50 display option
                    $(_this).css({"width": '70%'});
                    $('body').css({"width": '30%'});

                }
            });
            //
            $(singleView).click(function () {
                $(this).data('clicked', true);
                if ($(singleView).data('clicked')) {
                    //if this is clicked we want to run the close method
                    multiviewClose();
                }
            });



        loadNavigation();


    }

    function loadNavigation() {

        //detect if user has selected to show user

        if(navOption == 'true'){
            var _this = $('.multiview-resize-bar-container');

            var navBar = '<div class="multiview-nav"><div class="multiview-back"></div></div>';

            //add nav bar to page

            $(_this).prepend(navBar);


            var backOption = $('.multiview-back');

            $(backOption).click(function () {
                //remove the current view
                $('.multiview-containerAdded ' + userData).remove();


                //check if the list view is loaded twice
                if ($('.multiview-preview').length > 0) {
                    //stop the multiview function from running
                    return false;
                }
                //then show the list options
                loadOptions();
            });
        }else if (navOption == 'false'){
            //hide nav options

            $('.multiview-nav').remove();


        }


    }



    function multiviewClose(){
    //    objective is to stop all operations and remove multiview objects from view

        //first remove parent container from page
        $('.multiview-resize-bar-container').remove();

        //next remove the resize button
        $('.multiview-resize-button').remove();

        //remove multiview classes
        $(userData).removeClass('multiview-container');

        //next set body width back to 100%
        $('body').css({"width":'100%'});



    }



        }
    });



})(jQuery);

