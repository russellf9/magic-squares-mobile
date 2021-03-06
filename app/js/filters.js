'use strict';

/* Filters */

// see: https://gist.github.com/rewonc/e53ad3a9d6ca704d402e
angular.module('filters', []).filter('hrefToJS', function($sce, $sanitize) {
    return function(text) {
        var regex = /href="([\S]+)"/g,
        newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_blank', 'location=yes')\"");
        return $sce.trustAsHtml(newString);
    };
});


