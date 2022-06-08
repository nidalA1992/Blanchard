$("#accordion").accordion ({
  collapsible: true,
  active: false,
  heightStyle: "content",
  icons: {
    "header": "btn-icon",
    "activeHeader": "btn-icon"
  },
});

$( "#accordion" ).accordion( "option", "active", 0);
