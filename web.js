var express = require("express");
var app = express();

app.use(express.static(__dirname + "/app"));

app.get('*', function(req, res){
	res.send(' <img alt="Page not found" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABkCAMAAAAvz+deAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyODMyQTYwNTlGRDExRTM4NkQ4Rjg1OTNBRDFBOUIyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxMjkzMTJBNUEwQjExRTM4NkQ4Rjg1OTNBRDFBOUIyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTI4MzJBNUU1OUZEMTFFMzg2RDhGODU5M0FEMUE5QjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTI4MzJBNUY1OUZEMTFFMzg2RDhGODU5M0FEMUE5QjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HeZ0mAAAAhFBMVEWkZ1D02syuc10AAADwzbu+h3DTqZTMl4GedmL02cy3fmercVytc1/Ml3/y0sHZp4/cqpPFj3j///+3fGOyd17wz77Jk3zWrpvux7LHknuscFq6gGbQn4bQnIa7hG7hsJe9hm7xz77ktZ25gGmaW0X13tLYpIrfrpfToInEjHDrvKQAAACKDB13AAAALHRSTlP/////////////////////////////////////////////////////////AMfWCYwAAAF0SURBVHja7NnJVsJAEIXhloigouI8i7ME3v/9vIV9k7LodCC6S/0LzsnAt+l0E5KwVC1My44FRyvwQyXbJXK0G6pBPVBz1AXuO7rI5Gh3dD9GjNtfqA0uY47WaIHO0BgR5b42VPbLhLHnOFoUGiQqbYPeI0d/0E8k0DhmF5UcLPsukRw/R47W6A5KLdLypTb0BsnxC+RojV6jMlFuoHjh8wcyIEfXB2quSl38thck52jQ0fzFn5oA3KfPGSF9U9F3VD5myMJ7SKNNA2ZvkgNHredoarA0ykmg8RN0hHick8bRGp2iXdSE6l6RAILeIjknxKqLv+co4RTaBAv6jIZogJJPexz9hVqI2w+IqEwAR5tRwhbhYjxBepCGsTuUfdLr6Gph0fAkZsE3ZAfI0XWU8CNK3axdoUFs4zcSjlZ/vJ7QoUrQA7T1Wx5HVx0jjXDxPkWO/g0lQvRfBqqHqH7RJX9k7fYmsKNpsOlhwTtyNNu3AAMAAl24/WWI2PYAAAAASUVORK5CYII="/>', 404);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});